# openapi_client.FilesystemOperationsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesystem_create**](FilesystemOperationsApi.md#filesystem_create) | **PUT** /{filesystem} | Create Filesystem
[**filesystem_delete**](FilesystemOperationsApi.md#filesystem_delete) | **DELETE** /{filesystem} | Delete Filesystem
[**filesystem_get_properties**](FilesystemOperationsApi.md#filesystem_get_properties) | **HEAD** /{filesystem} | Get Filesystem Properties.
[**filesystem_set_properties**](FilesystemOperationsApi.md#filesystem_set_properties) | **PATCH** /{filesystem} | Set Filesystem Properties
[**path_list**](FilesystemOperationsApi.md#path_list) | **GET** /{filesystem} | List Paths


# **filesystem_create**
> filesystem_create(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, x_ms_properties=x_ms_properties)

Create Filesystem

Create a filesystem rooted at the specified location. If the filesystem already exists, the operation fails.  This operation does not support conditional HTTP requests.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesystemOperationsApi(api_client)
    filesystem = 'filesystem_example' # str | The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
    resource = 'resource_example' # str | The value must be \"filesystem\" for all filesystem operations.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)
    x_ms_properties = 'x_ms_properties_example' # str | User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs \"n1=v1, n2=v2, ...\", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. (optional)

    try:
        # Create Filesystem
        api_instance.filesystem_create(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, x_ms_properties=x_ms_properties)
    except Exception as e:
        print("Exception when calling FilesystemOperationsApi->filesystem_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filesystem** | **str**| The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters. | 
 **resource** | **str**| The value must be \&quot;filesystem\&quot; for all filesystem operations. | 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 
 **x_ms_properties** | **str**| User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs \&quot;n1&#x3D;v1, n2&#x3D;v2, ...\&quot;, where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * x-ms-namespace-enabled - A bool string indicates whether the namespace feature is enabled. If \&quot;true\&quot;, the namespace is enabled for the filesystem.   <br>  * x-ms-version - The version of the REST protocol used to process the request. <br>  * ETag - An HTTP entity tag associated with the file or directory. <br>  * Last-Modified - The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesystem_delete**
> filesystem_delete(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Delete Filesystem

Marks the filesystem for deletion.  When a filesystem is deleted, a filesystem with the same identifier cannot be created for at least 30 seconds. While the filesystem is being deleted, attempts to create a filesystem with the same identifier will fail with status code 409 (Conflict), with the service returning additional error information indicating that the filesystem is being deleted. All other operations, including operations on any files or directories within the filesystem, will fail with status code 404 (Not Found) while the filesystem is being deleted. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesystemOperationsApi(api_client)
    filesystem = 'filesystem_example' # str | The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
    resource = 'resource_example' # str | The value must be \"filesystem\" for all filesystem operations.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)
    if_modified_since = 'if_modified_since_example' # str | Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time. (optional)

    try:
        # Delete Filesystem
        api_instance.filesystem_delete(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling FilesystemOperationsApi->filesystem_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filesystem** | **str**| The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters. | 
 **resource** | **str**| The value must be \&quot;filesystem\&quot; for all filesystem operations. | 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 
 **if_modified_since** | **str**| Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time. | [optional] 
 **if_unmodified_since** | **str**| Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesystem_get_properties**
> filesystem_get_properties(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version)

Get Filesystem Properties.

All system and user-defined filesystem properties are specified in the response headers.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesystemOperationsApi(api_client)
    filesystem = 'filesystem_example' # str | The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
    resource = 'resource_example' # str | The value must be \"filesystem\" for all filesystem operations.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)

    try:
        # Get Filesystem Properties.
        api_instance.filesystem_get_properties(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version)
    except Exception as e:
        print("Exception when calling FilesystemOperationsApi->filesystem_get_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filesystem** | **str**| The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters. | 
 **resource** | **str**| The value must be \&quot;filesystem\&quot; for all filesystem operations. | 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  * x-ms-namespace-enabled - A bool string indicates whether the namespace feature is enabled. If \&quot;true\&quot;, the namespace is enabled for the filesystem.   <br>  * x-ms-version - The version of the REST protocol used to process the request. <br>  * ETag - An HTTP entity tag associated with the file or directory. <br>  * Last-Modified - The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. <br>  * x-ms-properties - User-defined properties associated with the file or directory, in the format of a comma-separated list of name and value pairs \&quot;n1&#x3D;v1, n2&#x3D;v2, ...\&quot;, where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesystem_set_properties**
> filesystem_set_properties(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, x_ms_properties=x_ms_properties, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Set Filesystem Properties

Set properties for the filesystem.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesystemOperationsApi(api_client)
    filesystem = 'filesystem_example' # str | The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
    resource = 'resource_example' # str | The value must be \"filesystem\" for all filesystem operations.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)
    x_ms_properties = 'x_ms_properties_example' # str | Optional. User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs \"n1=v1, n2=v2, ...\", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.  If the filesystem exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties. (optional)
    if_modified_since = 'if_modified_since_example' # str | Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time. (optional)

    try:
        # Set Filesystem Properties
        api_instance.filesystem_set_properties(filesystem, resource, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, x_ms_properties=x_ms_properties, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling FilesystemOperationsApi->filesystem_set_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filesystem** | **str**| The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters. | 
 **resource** | **str**| The value must be \&quot;filesystem\&quot; for all filesystem operations. | 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 
 **x_ms_properties** | **str**| Optional. User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs \&quot;n1&#x3D;v1, n2&#x3D;v2, ...\&quot;, where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.  If the filesystem exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties. | [optional] 
 **if_modified_since** | **str**| Optional. A date and time value. Specify this header to perform the operation only if the resource has been modified since the specified date and time. | [optional] 
 **if_unmodified_since** | **str**| Optional. A date and time value. Specify this header to perform the operation only if the resource has not been modified since the specified date and time. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * ETag - An HTTP entity tag associated with the file or directory. <br>  * Last-Modified - The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **path_list**
> PathList path_list(filesystem, resource, recursive, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, directory=directory, continuation=continuation, max_results=max_results, upn=upn)

List Paths

List filesystem paths and their properties.

### Example


```python
import openapi_client
from openapi_client.models.path_list import PathList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesystemOperationsApi(api_client)
    filesystem = 'filesystem_example' # str | The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters.
    resource = 'resource_example' # str | The value must be \"filesystem\" for all filesystem operations.
    recursive = True # bool | If \"true\", all paths are listed; otherwise, only paths at the root of the filesystem are listed.  If \"directory\" is specified, the list will only include paths that share the same root.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)
    directory = 'directory_example' # str | Filters results to paths within the specified directory. An error occurs if the directory does not exist. (optional)
    continuation = 'continuation_example' # str | The number of paths returned with each invocation is limited. If the number of paths to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the paths. (optional)
    max_results = 56 # int | An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items. (optional)
    upn = True # bool | Optional. Valid only when Hierarchical Namespace is enabled for the account. If \"true\", the user identity values returned in the owner and group fields of each list entry will be transformed from Azure Active Directory Object IDs to User Principal Names.  If \"false\", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names. (optional)

    try:
        # List Paths
        api_response = api_instance.path_list(filesystem, resource, recursive, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version, directory=directory, continuation=continuation, max_results=max_results, upn=upn)
        print("The response of FilesystemOperationsApi->path_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesystemOperationsApi->path_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filesystem** | **str**| The filesystem identifier.  The value must start and end with a letter or number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes are not permitted.  All letters must be lowercase.  The value must have between 3 and 63 characters. | 
 **resource** | **str**| The value must be \&quot;filesystem\&quot; for all filesystem operations. | 
 **recursive** | **bool**| If \&quot;true\&quot;, all paths are listed; otherwise, only paths at the root of the filesystem are listed.  If \&quot;directory\&quot; is specified, the list will only include paths that share the same root. | 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 
 **directory** | **str**| Filters results to paths within the specified directory. An error occurs if the directory does not exist. | [optional] 
 **continuation** | **str**| The number of paths returned with each invocation is limited. If the number of paths to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the paths. | [optional] 
 **max_results** | **int**| An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items. | [optional] 
 **upn** | **bool**| Optional. Valid only when Hierarchical Namespace is enabled for the account. If \&quot;true\&quot;, the user identity values returned in the owner and group fields of each list entry will be transformed from Azure Active Directory Object IDs to User Principal Names.  If \&quot;false\&quot;, the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names. | [optional] 

### Return type

[**PathList**](PathList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * ETag - An HTTP entity tag associated with the file or directory. <br>  * Last-Modified - The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. <br>  * x-ms-continuation - When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.AccountOperationsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesystem_list**](AccountOperationsApi.md#filesystem_list) | **GET** / | List Filesystems


# **filesystem_list**
> FilesystemList filesystem_list(resource, prefix=prefix, continuation=continuation, max_results=max_results, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version)

List Filesystems

List filesystems and their properties in given account.

### Example


```python
import openapi_client
from openapi_client.models.filesystem_list import FilesystemList
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
    api_instance = openapi_client.AccountOperationsApi(api_client)
    resource = 'resource_example' # str | The value must be \"account\" for all account operations.
    prefix = 'prefix_example' # str | Filters results to filesystems within the specified prefix. (optional)
    continuation = 'continuation_example' # str | The number of filesystems returned with each invocation is limited. If the number of filesystems to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the filesystems. (optional)
    max_results = 56 # int | An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items. (optional)
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | A UUID recorded in the analytics logs for troubleshooting and correlation. (optional)
    timeout = 56 # int | An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. (optional)
    x_ms_date = 'x_ms_date_example' # str | Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. (optional)
    x_ms_version = 'x_ms_version_example' # str | Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. (optional)

    try:
        # List Filesystems
        api_response = api_instance.filesystem_list(resource, prefix=prefix, continuation=continuation, max_results=max_results, x_ms_client_request_id=x_ms_client_request_id, timeout=timeout, x_ms_date=x_ms_date, x_ms_version=x_ms_version)
        print("The response of AccountOperationsApi->filesystem_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountOperationsApi->filesystem_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| The value must be \&quot;account\&quot; for all account operations. | 
 **prefix** | **str**| Filters results to filesystems within the specified prefix. | [optional] 
 **continuation** | **str**| The number of filesystems returned with each invocation is limited. If the number of filesystems to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the filesystems. | [optional] 
 **max_results** | **int**| An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items. | [optional] 
 **x_ms_client_request_id** | **str**| A UUID recorded in the analytics logs for troubleshooting and correlation. | [optional] 
 **timeout** | **int**| An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails. | [optional] 
 **x_ms_date** | **str**| Specifies the Coordinated Universal Time (UTC) for the request.  This is required when using shared key authorization. | [optional] 
 **x_ms_version** | **str**| Specifies the version of the REST protocol used for processing the request. This is required when using shared key authorization. | [optional] 

### Return type

[**FilesystemList**](FilesystemList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-continuation - When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  * Date - A UTC date/time value generated by the service that indicates the time at which the response was initiated. <br>  * Content-Type - The content type specified for the resource. If no content type was specified, the default content type is application/octet-stream. <br>  |
**0** | An error occurred. The possible HTTP status, code, and message strings are listed below: * 400 Bad Request, ContentLengthMustBeZero, \&quot;The Content-Length request header must be zero.\&quot; * 400 Bad Request, InvalidAuthenticationInfo, \&quot;Authentication information is not given in the correct format. Check the value of Authorization header.\&quot; * 400 Bad Request, InvalidFlushPosition, \&quot;The uploaded data is not contiguous or the position query parameter value is not equal to the length of the file after appending the uploaded data.\&quot; * 400 Bad Request, InvalidHeaderValue, \&quot;The value for one of the HTTP headers is not in the correct format.\&quot; * 400 Bad Request, InvalidHttpVerb, \&quot;The HTTP verb specified is invalid - it is not recognized by the server.\&quot; * 400 Bad Request, InvalidInput, \&quot;One of the request inputs is not valid.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;A property name cannot be empty.\&quot; * 400 Bad Request, InvalidPropertyName, \&quot;The property name contains invalid characters.\&quot; * 400 Bad Request, InvalidQueryParameterValue, \&quot;Value for one of the query parameters specified in the request URI is invalid.\&quot; * 400 Bad Request, InvalidResourceName, \&quot;The specified resource name contains invalid characters.\&quot; * 400 Bad Request, InvalidSourceUri, \&quot;The source URI is invalid.\&quot; * 400 Bad Request, InvalidUri, \&quot;The request URI is invalid.\&quot; * 400 Bad Request, MissingRequiredHeader, \&quot;An HTTP header that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MissingRequiredQueryParameter, \&quot;A query parameter that&#39;s mandatory for this request is not specified.\&quot; * 400 Bad Request, MultipleConditionHeadersNotSupported, \&quot;Multiple condition headers are not supported.\&quot; * 400 Bad Request, OutOfRangeInput, \&quot;One of the request inputs is out of range.\&quot; * 400 Bad Request, OutOfRangeQueryParameterValue, \&quot;One of the query parameters specified in the request URI is outside the permissible range.\&quot; * 400 Bad Request, UnsupportedHeader, \&quot;One of the headers specified in the request is not supported.\&quot; * 400 Bad Request, UnsupportedQueryParameter, \&quot;One of the query parameters specified in the request URI is not supported.\&quot; * 400 Bad Request, UnsupportedRestVersion, \&quot;The specified Rest Version is Unsupported.\&quot; * 403 Forbidden, AccountIsDisabled, \&quot;The specified account is disabled.\&quot; * 403 Forbidden, AuthorizationFailure, \&quot;This request is not authorized to perform this operation.\&quot; * 403 Forbidden, InsufficientAccountPermissions, \&quot;The account being accessed does not have sufficient permissions to execute this operation.\&quot; * 404 Not Found, FilesystemNotFound, \&quot;The specified filesystem does not exist.\&quot; * 404 Not Found, PathNotFound, \&quot;The specified path does not exist.\&quot; * 404 Not Found, RenameDestinationParentPathNotFound, \&quot;The parent directory of the destination path does not exist.\&quot; * 404 Not Found, ResourceNotFound, \&quot;The specified resource does not exist.\&quot; * 404 Not Found, SourcePathNotFound, \&quot;The source path for a rename operation does not exist.\&quot; * 405 Method Not Allowed, UnsupportedHttpVerb, \&quot;The resource doesn&#39;t support the specified HTTP verb.\&quot; * 409 Conflict, DestinationPathIsBeingDeleted, \&quot;The specified destination path is marked to be deleted.\&quot; * 409 Conflict, DirectoryNotEmpty, \&quot;The recursive query parameter value must be true to delete a non-empty directory.\&quot; * 409 Conflict, FilesystemAlreadyExists, \&quot;The specified filesystem already exists.\&quot; * 409 Conflict, FilesystemBeingDeleted, \&quot;The specified filesystem is being deleted.\&quot; * 409 Conflict, InvalidDestinationPath, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot;* 409 Conflict, InvalidFlushOperation, \&quot;The resource was created or modified by the Blob Service API and cannot be written to by the Data Lake Storage Service API.\&quot; * 409 Conflict, InvalidRenameSourcePath, \&quot;The source directory cannot be the same as the destination directory, nor can the destination be a subdirectory of the source directory.\&quot; * 409 Conflict, InvalidSourceOrDestinationResourceType, \&quot;The source and destination resource type must be identical.\&quot; * 409 Conflict, LeaseAlreadyPresent, \&quot;There is already a lease present.\&quot; * 409 Conflict, LeaseIdMismatchWithLeaseOperation, \&quot;The lease ID specified did not match the lease ID for the resource with the specified lease operation.\&quot; * 409 Conflict, LeaseIsAlreadyBroken, \&quot;The lease has already been broken and cannot be broken again.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeAcquired, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be acquired until it is broken.\&quot; * 409 Conflict, LeaseIsBreakingAndCannotBeChanged, \&quot;The lease ID matched, but the lease is currently in breaking state and cannot be changed.\&quot; * 409 Conflict, LeaseIsBrokenAndCannotBeRenewed, \&quot;The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\&quot; * 409 Conflict, LeaseNameMismatch, \&quot;The lease name specified did not match the existing lease name.\&quot; * 409 Conflict, LeaseNotPresentWithLeaseOperation, \&quot;The lease ID is not present with the specified lease operation.\&quot; * 409 Conflict, PathAlreadyExists, \&quot;The specified path already exists.\&quot; * 409 Conflict, PathConflict, \&quot;The specified path, or an element of the path, exists and its resource type is invalid for this operation.\&quot; * 409 Conflict, SourcePathIsBeingDeleted, \&quot;The specified source path is marked to be deleted.\&quot; * 409 Conflict, ResourceTypeMismatch, \&quot;The resource type specified in the request does not match the type of the resource.\&quot; * 412 Precondition Failed, ConditionNotMet, \&quot;The condition specified using HTTP conditional header(s) is not met.\&quot; * 412 Precondition Failed, LeaseIdMismatch, \&quot;The lease ID specified did not match the lease ID for the resource.\&quot; * 412 Precondition Failed, LeaseIdMissing, \&quot;There is currently a lease on the resource and no lease ID was specified in the request.\&quot; * 412 Precondition Failed, LeaseNotPresent, \&quot;There is currently no lease on the resource.\&quot; * 412 Precondition Failed, LeaseLost, \&quot;A lease ID was specified, but the lease for the resource has expired.\&quot; * 412 Precondition Failed, SourceConditionNotMet, \&quot;The source condition specified using HTTP conditional header(s) is not met.\&quot; * 413 Request Entity Too Large, RequestBodyTooLarge, \&quot;The request body is too large and exceeds the maximum permissible limit.\&quot; * 416 Requested Range Not Satisfiable, InvalidRange, \&quot;The range specified is invalid for the current size of the resource.\&quot; * 500 Internal Server Error, InternalError, \&quot;The server encountered an internal error. Please retry the request.\&quot; * 500 Internal Server Error, OperationTimedOut, \&quot;The operation could not be completed within the permitted time.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Egress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Ingress is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;Operations per second is over the account limit.\&quot; * 503 Service Unavailable, ServerBusy, \&quot;The server is currently unable to receive requests. Please retry your request.\&quot; |  * x-ms-version - The version of the REST protocol used to process the request. <br>  * x-ms-request-id - A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


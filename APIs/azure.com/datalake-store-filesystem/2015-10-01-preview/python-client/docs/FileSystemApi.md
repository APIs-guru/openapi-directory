# openapi_client.FileSystemApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_system_check_access**](FileSystemApi.md#file_system_check_access) | **GET** /webhdfs/v1/{path} | 
[**file_system_concurrent_append**](FileSystemApi.md#file_system_concurrent_append) | **POST** /WebHdfsExt/{filePath} | 
[**file_system_mkdirs**](FileSystemApi.md#file_system_mkdirs) | **PUT** /webhdfs/v1/{path} | 
[**file_system_set_file_expiry**](FileSystemApi.md#file_system_set_file_expiry) | **PUT** /WebHdfsExt/{filePath} | 


# **file_system_check_access**
> file_system_check_access(path, op, api_version, fsaction=fsaction)



Checks if the specified access is available at the given path.

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
    api_instance = openapi_client.FileSystemApi(api_client)
    path = 'path_example' # str | The Data Lake Store path (starting with '/') of the file or directory for which to check access.
    op = 'op_example' # str | The constant value for the operation.
    api_version = 'api_version_example' # str | Client Api Version.
    fsaction = 'fsaction_example' # str | File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}' (optional)

    try:
        api_instance.file_system_check_access(path, op, api_version, fsaction=fsaction)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_check_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file or directory for which to check access. | 
 **op** | **str**| The constant value for the operation. | 
 **api_version** | **str**| Client Api Version. | 
 **fsaction** | **str**| File system operation read/write/execute in string form, matching regex pattern &#39;[rwx-]{3}&#39; | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_system_concurrent_append**
> file_system_concurrent_append(file_path, op, transfer_encoding, api_version, stream_contents, append_mode=append_mode)



Appends to the specified file. This method supports multiple concurrent appends to the file. NOTE: ConcurrentAppend and normal (serial) Append CANNOT be used interchangeably; once a file has been appended to using either of these append options, it can only be appended to using that append option. ConcurrentAppend DOES NOT guarantee order and can result in duplicated data landing in the target file. In order to close a file after using ConcurrentAppend, call the Flush method.

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
    api_instance = openapi_client.FileSystemApi(api_client)
    file_path = 'file_path_example' # str | The Data Lake Store path (starting with '/') of the file to which to append using concurrent append.
    op = 'op_example' # str | The constant value for the operation.
    transfer_encoding = 'transfer_encoding_example' # str | Indicates the data being sent to the server is being streamed in chunks.
    api_version = 'api_version_example' # str | Client Api Version.
    stream_contents = None # object | The file contents to include when appending to the file.  The maximum content size is 4MB.  For content larger than 4MB you must append the content in 4MB chunks.
    append_mode = 'append_mode_example' # str | Indicates the concurrent append call should create the file if it doesn't exist or just open the existing file for append (optional)

    try:
        api_instance.file_system_concurrent_append(file_path, op, transfer_encoding, api_version, stream_contents, append_mode=append_mode)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_concurrent_append: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file to which to append using concurrent append. | 
 **op** | **str**| The constant value for the operation. | 
 **transfer_encoding** | **str**| Indicates the data being sent to the server is being streamed in chunks. | 
 **api_version** | **str**| Client Api Version. | 
 **stream_contents** | **object**| The file contents to include when appending to the file.  The maximum content size is 4MB.  For content larger than 4MB you must append the content in 4MB chunks. | 
 **append_mode** | **str**| Indicates the concurrent append call should create the file if it doesn&#39;t exist or just open the existing file for append | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_system_mkdirs**
> FileOperationResult file_system_mkdirs(path, op, api_version)



Creates a directory.

### Example


```python
import openapi_client
from openapi_client.models.file_operation_result import FileOperationResult
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
    api_instance = openapi_client.FileSystemApi(api_client)
    path = 'path_example' # str | The Data Lake Store path (starting with '/') of the directory to create.
    op = 'op_example' # str | The constant value for the operation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.file_system_mkdirs(path, op, api_version)
        print("The response of FileSystemApi->file_system_mkdirs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_mkdirs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the directory to create. | 
 **op** | **str**| The constant value for the operation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**FileOperationResult**](FileOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_system_set_file_expiry**
> file_system_set_file_expiry(file_path, expiry_option, op, api_version, expire_time=expire_time)



Sets or removes the expiration time on the specified file. This operation can only be executed against files. Folders are not supported.

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
    api_instance = openapi_client.FileSystemApi(api_client)
    file_path = 'file_path_example' # str | The Data Lake Store path (starting with '/') of the file on which to set or remove the expiration time.
    expiry_option = 'expiry_option_example' # str | Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
    op = 'op_example' # str | The constant value for the operation.
    api_version = 'api_version_example' # str | Client Api Version.
    expire_time = 56 # int | The time that the file will expire, corresponding to the ExpiryOption that was set. (optional)

    try:
        api_instance.file_system_set_file_expiry(file_path, expiry_option, op, api_version, expire_time=expire_time)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_set_file_expiry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file on which to set or remove the expiration time. | 
 **expiry_option** | **str**| Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. | 
 **op** | **str**| The constant value for the operation. | 
 **api_version** | **str**| Client Api Version. | 
 **expire_time** | **int**| The time that the file will expire, corresponding to the ExpiryOption that was set. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the expiration time on the specified file. |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


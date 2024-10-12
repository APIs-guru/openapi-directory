# openapi_client.FileSystemApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_system_check_access**](FileSystemApi.md#file_system_check_access) | **GET** /webhdfs/v1/{path} | 
[**file_system_concurrent_append**](FileSystemApi.md#file_system_concurrent_append) | **POST** /WebHdfsExt/{path} | 
[**file_system_set_file_expiry**](FileSystemApi.md#file_system_set_file_expiry) | **PUT** /WebHdfsExt/{path} | 


# **file_system_check_access**
> file_system_check_access(path, fsaction, op, api_version)



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
    fsaction = 'fsaction_example' # str | File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}'
    op = 'op_example' # str | The constant value for the operation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.file_system_check_access(path, fsaction, op, api_version)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_check_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file or directory for which to check access. | 
 **fsaction** | **str**| File system operation read/write/execute in string form, matching regex pattern &#39;[rwx-]{3}&#39; | 
 **op** | **str**| The constant value for the operation. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | OK |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_system_concurrent_append**
> file_system_concurrent_append(path, op, transfer_encoding, api_version, stream_contents, append_mode=append_mode, sync_flag=sync_flag)



Appends to the specified file, optionally first creating the file if it does not yet exist. This method supports multiple concurrent appends to the file. NOTE: The target must not contain data added by Create or normal (serial) Append. ConcurrentAppend and Append cannot be used interchangeably; once a target file has been modified using either of these append options, the other append option cannot be used on the target file. ConcurrentAppend does not guarantee order and can result in duplicated data landing in the target file.

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
    path = 'path_example' # str | The Data Lake Store path (starting with '/') of the file to which to append using concurrent append.
    op = 'op_example' # str | The constant value for the operation.
    transfer_encoding = 'transfer_encoding_example' # str | Indicates the data being sent to the server is being streamed in chunks.
    api_version = 'api_version_example' # str | Client Api Version.
    stream_contents = None # object | The file contents to include when appending to the file.  The maximum content size is 4MB.  For content larger than 4MB you must append the content in 4MB chunks.
    append_mode = 'append_mode_example' # str | Indicates the concurrent append call should create the file if it doesn't exist or just open the existing file for append (optional)
    sync_flag = DATA # str | Optionally indicates what to do after completion of the concurrent append. DATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata (including file length, last modified time) should NOT get updated. METADATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata should get updated. CLOSE indicates that the client is done sending data, the file handle should be closed/unlocked, and file metadata should get updated. (optional) (default to DATA)

    try:
        api_instance.file_system_concurrent_append(path, op, transfer_encoding, api_version, stream_contents, append_mode=append_mode, sync_flag=sync_flag)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_concurrent_append: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file to which to append using concurrent append. | 
 **op** | **str**| The constant value for the operation. | 
 **transfer_encoding** | **str**| Indicates the data being sent to the server is being streamed in chunks. | 
 **api_version** | **str**| Client Api Version. | 
 **stream_contents** | **object**| The file contents to include when appending to the file.  The maximum content size is 4MB.  For content larger than 4MB you must append the content in 4MB chunks. | 
 **append_mode** | **str**| Indicates the concurrent append call should create the file if it doesn&#39;t exist or just open the existing file for append | [optional] 
 **sync_flag** | **str**| Optionally indicates what to do after completion of the concurrent append. DATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata (including file length, last modified time) should NOT get updated. METADATA indicates that more data will be sent immediately by the client, the file handle should remain open/locked, and file metadata should get updated. CLOSE indicates that the client is done sending data, the file handle should be closed/unlocked, and file metadata should get updated. | [optional] [default to DATA]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_system_set_file_expiry**
> file_system_set_file_expiry(path, expiry_option, op, api_version, expire_time=expire_time)



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
    path = 'path_example' # str | The Data Lake Store path (starting with '/') of the file on which to set or remove the expiration time.
    expiry_option = 'expiry_option_example' # str | Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
    op = 'op_example' # str | The constant value for the operation.
    api_version = 'api_version_example' # str | Client Api Version.
    expire_time = 56 # int | The time that the file will expire, corresponding to the ExpiryOption that was set. (optional)

    try:
        api_instance.file_system_set_file_expiry(path, expiry_option, op, api_version, expire_time=expire_time)
    except Exception as e:
        print("Exception when calling FileSystemApi->file_system_set_file_expiry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The Data Lake Store path (starting with &#39;/&#39;) of the file on which to set or remove the expiration time. | 
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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the expiration time on the specified file. |  -  |
**0** | An unexpected error from the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


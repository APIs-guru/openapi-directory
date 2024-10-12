# openapi_client.CDDriveApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_cddrive_files_content_post**](CDDriveApi.md#api_v2_cddrive_files_content_post) | **POST** /api/v2/cddrive/files/content | Upload a file.
[**api_v2_cddrive_files_file_id_content_get**](CDDriveApi.md#api_v2_cddrive_files_file_id_content_get) | **GET** /api/v2/cddrive/files/{file-id}/content | UNDER DEVELOPMENT - Download a file.
[**api_v2_cddrive_files_file_id_delete**](CDDriveApi.md#api_v2_cddrive_files_file_id_delete) | **DELETE** /api/v2/cddrive/files/{file-id} | Delete a file.
[**api_v2_cddrive_files_file_id_get**](CDDriveApi.md#api_v2_cddrive_files_file_id_get) | **GET** /api/v2/cddrive/files/{file-id} | Get file information.
[**api_v2_cddrive_folders_folder_id_delete**](CDDriveApi.md#api_v2_cddrive_folders_folder_id_delete) | **DELETE** /api/v2/cddrive/folders/{folder-id} | UNDER DEVELOPMENT - Delete a folder.
[**api_v2_cddrive_folders_folder_id_get**](CDDriveApi.md#api_v2_cddrive_folders_folder_id_get) | **GET** /api/v2/cddrive/folders/{folder-id} | UNDER DEVELOPMENT - Get folder information.
[**api_v2_cddrive_folders_folder_id_items_get**](CDDriveApi.md#api_v2_cddrive_folders_folder_id_items_get) | **GET** /api/v2/cddrive/folders/{folder-id}/items | Get the items in the folder.
[**api_v2_cddrive_folders_post**](CDDriveApi.md#api_v2_cddrive_folders_post) | **POST** /api/v2/cddrive/folders | Create a folder.


# **api_v2_cddrive_files_content_post**
> CDDriveFile api_v2_cddrive_files_content_post(content_md5=content_md5, file=file, name=name, parent_id=parent_id)

Upload a file.

Upload a file to the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.cd_drive_file import CDDriveFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    content_md5 = 'content_md5_example' # str | If present, the MD5 will be compared against the file received as a message integrity check. (optional)
    file = None # bytearray | The file content being uploaded. (optional)
    name = 'name_example' # str | The name of the file, including extension. (optional)
    parent_id = 56 # int | The ID of the parent folder or 0 for the root folder. (optional)

    try:
        # Upload a file.
        api_response = api_instance.api_v2_cddrive_files_content_post(content_md5=content_md5, file=file, name=name, parent_id=parent_id)
        print("The response of CDDriveApi->api_v2_cddrive_files_content_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_files_content_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_md5** | **str**| If present, the MD5 will be compared against the file received as a message integrity check. | [optional] 
 **file** | **bytearray**| The file content being uploaded. | [optional] 
 **name** | **str**| The name of the file, including extension. | [optional] 
 **parent_id** | **int**| The ID of the parent folder or 0 for the root folder. | [optional] 

### Return type

[**CDDriveFile**](CDDriveFile.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The file was created successfully. The response contains the file metadata. |  -  |
**400** | The provided Content-MD5 header doesn&#39;t match the provided content |  -  |
**403** | Authorization failed, Username or password not found or incorrect. |  -  |
**404** | A parent id cannot be found. |  -  |
**409** | A name conflict because the file already exists. |  -  |
**413** | File is bigger than maximum size of 500 MB. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_files_file_id_content_get**
> bytearray api_v2_cddrive_files_file_id_content_get(file_id, range=range)

UNDER DEVELOPMENT - Download a file.

Download a file from the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    file_id = 56 # int | The ID of the file to download.
    range = 'range_example' # str | Can be used to limit the range of bytes retrieved. Only a single byte range in the format ```bytes={start-range}-{end-range}``` is supported. (optional)

    try:
        # UNDER DEVELOPMENT - Download a file.
        api_response = api_instance.api_v2_cddrive_files_file_id_content_get(file_id, range=range)
        print("The response of CDDriveApi->api_v2_cddrive_files_file_id_content_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_files_file_id_content_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**| The ID of the file to download. | 
 **range** | **str**| Can be used to limit the range of bytes retrieved. Only a single byte range in the format &#x60;&#x60;&#x60;bytes&#x3D;{start-range}-{end-range}&#x60;&#x60;&#x60; is supported. | [optional] 

### Return type

**bytearray**

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The file was found and will be returned in the body of the response. |  -  |
**302** | The file was found but should be downloaded at the URL presented in the Location header. This return code may be used when the file is available via a CDN or other optimized path. |  * Location - The location the file can be downloaded from <br>  |
**404** | The file cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_files_file_id_delete**
> api_v2_cddrive_files_file_id_delete(file_id)

Delete a file.

Delete a file from the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    file_id = 56 # int | The ID of the file to access.

    try:
        # Delete a file.
        api_instance.api_v2_cddrive_files_file_id_delete(file_id)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_files_file_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**| The ID of the file to access. | 

### Return type

void (empty response body)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The file was successfully deleted. |  -  |
**404** | The file cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_files_file_id_get**
> CDDriveFile api_v2_cddrive_files_file_id_get(file_id)

Get file information.

Get the information about a file in the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.cd_drive_file import CDDriveFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    file_id = 56 # int | The ID of the file to access.

    try:
        # Get file information.
        api_response = api_instance.api_v2_cddrive_files_file_id_get(file_id)
        print("The response of CDDriveApi->api_v2_cddrive_files_file_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_files_file_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**| The ID of the file to access. | 

### Return type

[**CDDriveFile**](CDDriveFile.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The file information. |  -  |
**404** | The file cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_folders_folder_id_delete**
> api_v2_cddrive_folders_folder_id_delete(folder_id, recursive=recursive)

UNDER DEVELOPMENT - Delete a folder.

Delete a file from the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    folder_id = 56 # int | The ID of the folder to get.
    recursive = True # bool | Flag to indicate if the folder should be deleted if it has items inside of it. (optional) (default to True)

    try:
        # UNDER DEVELOPMENT - Delete a folder.
        api_instance.api_v2_cddrive_folders_folder_id_delete(folder_id, recursive=recursive)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_folders_folder_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **int**| The ID of the folder to get. | 
 **recursive** | **bool**| Flag to indicate if the folder should be deleted if it has items inside of it. | [optional] [default to True]

### Return type

void (empty response body)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The file was successfully deleted. |  -  |
**404** | The file cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_folders_folder_id_get**
> CDDriveFolder api_v2_cddrive_folders_folder_id_get(folder_id)

UNDER DEVELOPMENT - Get folder information.

Get the information about a folder in the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.cd_drive_folder import CDDriveFolder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    folder_id = 56 # int | The ID of the folder to get.

    try:
        # UNDER DEVELOPMENT - Get folder information.
        api_response = api_instance.api_v2_cddrive_folders_folder_id_get(folder_id)
        print("The response of CDDriveApi->api_v2_cddrive_folders_folder_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_folders_folder_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **int**| The ID of the folder to get. | 

### Return type

[**CDDriveFolder**](CDDriveFolder.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The folder information. |  -  |
**404** | The folder cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_folders_folder_id_items_get**
> ApiV2CddriveFoldersFolderIdItemsGet200Response api_v2_cddrive_folders_folder_id_items_get(folder_id, offset=offset, limit=limit)

Get the items in the folder.

Get the information about a folder in the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.api_v2_cddrive_folders_folder_id_items_get200_response import ApiV2CddriveFoldersFolderIdItemsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    folder_id = 56 # int | The ID of the folder to get. Folder ID 0 represents the uppermost CD drive folder.
    offset = 0 # int | The offset into the items to begin the response. (optional) (default to 0)
    limit = 20 # int | The maximum number of items to return in the response. (optional) (default to 20)

    try:
        # Get the items in the folder.
        api_response = api_instance.api_v2_cddrive_folders_folder_id_items_get(folder_id, offset=offset, limit=limit)
        print("The response of CDDriveApi->api_v2_cddrive_folders_folder_id_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_folders_folder_id_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **int**| The ID of the folder to get. Folder ID 0 represents the uppermost CD drive folder. | 
 **offset** | **int**| The offset into the items to begin the response. | [optional] [default to 0]
 **limit** | **int**| The maximum number of items to return in the response. | [optional] [default to 20]

### Return type

[**ApiV2CddriveFoldersFolderIdItemsGet200Response**](ApiV2CddriveFoldersFolderIdItemsGet200Response.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The folder information. |  -  |
**404** | The folder cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_cddrive_folders_post**
> CDDriveFolder api_v2_cddrive_folders_post(name=name, parent_id=parent_id)

Create a folder.

Create a new folder in the customer's private CD Drive.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.cd_drive_folder import CDDriveFolder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CDDriveApi(api_client)
    name = 'name_example' # str | the name of the folder (optional)
    parent_id = 56 # int | The ID of the parent folder or 0 for the root folder. (optional)

    try:
        # Create a folder.
        api_response = api_instance.api_v2_cddrive_folders_post(name=name, parent_id=parent_id)
        print("The response of CDDriveApi->api_v2_cddrive_folders_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CDDriveApi->api_v2_cddrive_folders_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| the name of the folder | [optional] 
 **parent_id** | **int**| The ID of the parent folder or 0 for the root folder. | [optional] 

### Return type

[**CDDriveFolder**](CDDriveFolder.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The folder information. |  -  |
**403** | Authorization failed, username or password not found or incorrect. |  -  |
**404** | A parent id cannot be found. |  -  |
**409** | The folder already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


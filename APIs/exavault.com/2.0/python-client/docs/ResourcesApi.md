# openapi_client.ResourcesApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_folder**](ResourcesApi.md#add_folder) | **POST** /resources | Create a folder
[**compress_files**](ResourcesApi.md#compress_files) | **POST** /resources/compress | Compress resources
[**copy_resources**](ResourcesApi.md#copy_resources) | **POST** /resources/copy | Copy resources
[**delete_resource_by_id**](ResourcesApi.md#delete_resource_by_id) | **DELETE** /resources/{id} | Delete a Resource
[**delete_resources**](ResourcesApi.md#delete_resources) | **DELETE** /resources | Delete Resources
[**download**](ResourcesApi.md#download) | **GET** /resources/download | Download a file
[**extract_files**](ResourcesApi.md#extract_files) | **POST** /resources/extract | Extract resources
[**get_preview_image**](ResourcesApi.md#get_preview_image) | **GET** /resources/preview | Preview a file
[**get_resource_info**](ResourcesApi.md#get_resource_info) | **GET** /resources | Get Resource Properties
[**get_resource_info_by_id**](ResourcesApi.md#get_resource_info_by_id) | **GET** /resources/{id} | Get resource metadata
[**list_resource_contents**](ResourcesApi.md#list_resource_contents) | **GET** /resources/list/{id} | List contents of folder
[**list_resources**](ResourcesApi.md#list_resources) | **GET** /resources/list | Get a list of all resources
[**move_resources**](ResourcesApi.md#move_resources) | **POST** /resources/move | Move resources
[**update_resource_by_id**](ResourcesApi.md#update_resource_by_id) | **PATCH** /resources/{id} | Rename a resource.
[**upload_file**](ResourcesApi.md#upload_file) | **POST** /resources/upload | Upload a file


# **add_folder**
> ResourceResponse add_folder(ev_api_key, ev_access_token, add_folder_request_body=add_folder_request_body)

Create a folder

Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.  **Notes:** - Authenticated user should have modify permission. 

### Example


```python
import openapi_client
from openapi_client.models.add_folder_request_body import AddFolderRequestBody
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_folder_request_body = {"path":"/exavault/exampleFile.txt"} # AddFolderRequestBody |  (optional)

    try:
        # Create a folder
        api_response = api_instance.add_folder(ev_api_key, ev_access_token, add_folder_request_body=add_folder_request_body)
        print("The response of ResourcesApi->add_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->add_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_folder_request_body** | [**AddFolderRequestBody**](AddFolderRequestBody.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compress_files**
> ResourceResponse compress_files(ev_api_key, ev_access_token, compress_files_request_body=compress_files_request_body)

Compress resources

Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.  **Notes:** - Authenticated user should have modify permission. 

### Example


```python
import openapi_client
from openapi_client.models.compress_files_request_body import CompressFilesRequestBody
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    compress_files_request_body = {"archiveName":"exampleFiles.zip","parentResource":"/exavault","resources":["exampleFile1.txt","exampleFile2.txt","id:234222"]} # CompressFilesRequestBody |  (optional)

    try:
        # Compress resources
        api_response = api_instance.compress_files(ev_api_key, ev_access_token, compress_files_request_body=compress_files_request_body)
        print("The response of ResourcesApi->compress_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->compress_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **compress_files_request_body** | [**CompressFilesRequestBody**](CompressFilesRequestBody.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copy_resources**
> ResourceCopyMove copy_resources(ev_api_key, ev_access_token, copy_resources_request_body=copy_resources_request_body)

Copy resources

Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account. In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the  root of the `parentResource`.  **Notes:** - Authenticated user should have modify permission. 

### Example


```python
import openapi_client
from openapi_client.models.copy_resources_request_body import CopyResourcesRequestBody
from openapi_client.models.resource_copy_move import ResourceCopyMove
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    copy_resources_request_body = {"parentResource":"/exavault/exampleFileFolder","resources":["/exavault/exampleFile.txt","/exavault/otherFile.txt","id:28282828"]} # CopyResourcesRequestBody |  (optional)

    try:
        # Copy resources
        api_response = api_instance.copy_resources(ev_api_key, ev_access_token, copy_resources_request_body=copy_resources_request_body)
        print("The response of ResourcesApi->copy_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->copy_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **copy_resources_request_body** | [**CopyResourcesRequestBody**](CopyResourcesRequestBody.md)|  | [optional] 

### Return type

[**ResourceCopyMove**](ResourceCopyMove.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |
**207** | Multi Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_resource_by_id**
> EmptyResponse delete_resource_by_id(id, ev_api_key, ev_access_token)

Delete a Resource

Delete a single file or folder resource. Deleting a folder will also delete all of the contents.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - There is no way to un-delete a deleted resource. 

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    id = 56 # int | ID number of the resource
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Delete a Resource
        api_response = api_instance.delete_resource_by_id(id, ev_api_key, ev_access_token)
        print("The response of ResourcesApi->delete_resource_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->delete_resource_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID number of the resource | 
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_resources**
> EmptyResponse delete_resources(ev_api_key, ev_access_token, delete_resources_request_body=delete_resources_request_body)

Delete Resources

Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - It is not possible to un-delete a deleted resource. 

### Example


```python
import openapi_client
from openapi_client.models.delete_resources_request_body import DeleteResourcesRequestBody
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    delete_resources_request_body = {"resources":["exampleFile1.txt","exampleFile2.txt"]} # DeleteResourcesRequestBody |  (optional)

    try:
        # Delete Resources
        api_response = api_instance.delete_resources(ev_api_key, ev_access_token, delete_resources_request_body=delete_resources_request_body)
        print("The response of ResourcesApi->delete_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->delete_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **delete_resources_request_body** | [**DeleteResourcesRequestBody**](DeleteResourcesRequestBody.md)|  | [optional] 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |
**207** | Multi Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download**
> bytearray download(ev_api_key, ev_access_token, resources, download_archive_name=download_archive_name)

Download a file

Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.  **NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    resources = ['resources_example'] # List[str] | Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.
    download_archive_name = 'download_archive_name_example' # str | When downloading multiple files, this will be used as the name of the zip file that is created. (optional)

    try:
        # Download a file
        api_response = api_instance.download(ev_api_key, ev_access_token, resources, download_archive_name=download_archive_name)
        print("The response of ResourcesApi->download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **resources** | [**List[str]**](str.md)| Path of file or folder to be downloaded, starting from the root. Can also be an array of paths. | 
 **download_archive_name** | **str**| When downloading multiple files, this will be used as the name of the zip file that is created. | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/zip

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Content of the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extract_files**
> ResourceCollectionResponse extract_files(ev_api_key, ev_access_token, extract_files_request_body=extract_files_request_body)

Extract resources

Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.  **Notes:** - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this. 

### Example


```python
import openapi_client
from openapi_client.models.extract_files_request_body import ExtractFilesRequestBody
from openapi_client.models.resource_collection_response import ResourceCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    extract_files_request_body = {"parentResource":"/extractFolder","resource":"/exavault/exampleFiles.zip"} # ExtractFilesRequestBody |  (optional)

    try:
        # Extract resources
        api_response = api_instance.extract_files(ev_api_key, ev_access_token, extract_files_request_body=extract_files_request_body)
        print("The response of ResourcesApi->extract_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->extract_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **extract_files_request_body** | [**ExtractFilesRequestBody**](ExtractFilesRequestBody.md)|  | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_preview_image**
> PreviewFileResponse get_preview_image(ev_api_key, ev_access_token, resource, size, width=width, height=height, page=page)

Preview a file

Returns a resized image of the specified document for supported file types.  Image data returned is encoded in base64 format and can be viewed using the `<img>` element.   ```<img src='data:image/jpeg;base64' + meta.image/>```  **Notes:** - Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'` 

### Example


```python
import openapi_client
from openapi_client.models.preview_file_response import PreviewFileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    resource = 'resource_example' # str | Resource identifier for the image file.
    size = 'size_example' # str | The size of the image.
    width = 56 # int | Overrides sizes. Sets to a specific width. (optional)
    height = 56 # int | Overrides sizes. Sets to a specific height. (optional)
    page = 0 # int | Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files. (optional) (default to 0)

    try:
        # Preview a file
        api_response = api_instance.get_preview_image(ev_api_key, ev_access_token, resource, size, width=width, height=height, page=page)
        print("The response of ResourcesApi->get_preview_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->get_preview_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **resource** | **str**| Resource identifier for the image file. | 
 **size** | **str**| The size of the image. | 
 **width** | **int**| Overrides sizes. Sets to a specific width. | [optional] 
 **height** | **int**| Overrides sizes. Sets to a specific height. | [optional] 
 **page** | **int**| Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files. | [optional] [default to 0]

### Return type

[**PreviewFileResponse**](PreviewFileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_resource_info**
> ResourceResponse get_resource_info(ev_api_key, ev_access_token, resource, include=include)

Get Resource Properties

Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 

### Example


```python
import openapi_client
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    resource = 'resource_example' # str | Resource identifier of the file or folder to get metadata for.
    include = 'include_example' # str | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. (optional)

    try:
        # Get Resource Properties
        api_response = api_instance.get_resource_info(ev_api_key, ev_access_token, resource, include=include)
        print("The response of ResourcesApi->get_resource_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->get_resource_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **resource** | **str**| Resource identifier of the file or folder to get metadata for. | 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_resource_info_by_id**
> ResourceResponse get_resource_info_by_id(id, ev_api_key, ev_access_token, include=include)

Get resource metadata

Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 

### Example


```python
import openapi_client
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    id = 56 # int | ID number of the resource
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    include = 'include_example' # str | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. (optional)

    try:
        # Get resource metadata
        api_response = api_instance.get_resource_info_by_id(id, ev_api_key, ev_access_token, include=include)
        print("The response of ResourcesApi->get_resource_info_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->get_resource_info_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID number of the resource | 
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_resource_contents**
> ResourceCollectionResponse list_resource_contents(ev_api_key, ev_access_token, id, sort=sort, offset=offset, limit=limit, type=type, include=include)

List contents of folder

Returns a list of files/folders for the parent resource ID.   You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).  **Notes:** - Authenticated user should have list permission. 

### Example


```python
import openapi_client
from openapi_client.models.resource_collection_response import ResourceCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call. 
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 56 # int | ID of the parent resource to get a list of resources for.
    sort = 'name' # str | Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. (optional)
    offset = 0 # int | Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. (optional) (default to 0)
    limit = 56 # int | The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above. (optional)
    type = 'type_example' # str | Limit types of resources returned to \"file\" or \"dir\" only. (optional)
    include = 'include_example' # str | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. (optional)

    try:
        # List contents of folder
        api_response = api_instance.list_resource_contents(ev_api_key, ev_access_token, id, sort=sort, offset=offset, limit=limit, type=type, include=include)
        print("The response of ResourcesApi->list_resource_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->list_resource_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call.  | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the parent resource to get a list of resources for. | 
 **sort** | **str**| Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. | [optional] 
 **offset** | **int**| Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. | [optional] [default to 0]
 **limit** | **int**| The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the &#x60;offset parameter, above. | [optional] 
 **type** | **str**| Limit types of resources returned to \&quot;file\&quot; or \&quot;dir\&quot; only. | [optional] 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_resources**
> ResourceCollectionResponse list_resources(ev_api_key, ev_access_token, resource, sort=sort, offset=offset, limit=limit, type=type, name=name, include=include)

Get a list of all resources

Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /).   **Searching for Files and Folders**  Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:  - \\*Report\\* would find any files or folders with \"Report\" in the name. - Data\\_202?-09-30.xlsx would match items such as \"Data\\_2020-09-30.xlsx\", \"DATA\\_2021-09-30.xlsx\", \"data\\_2022-09-30.xlsx\" etc. - sales\\* would find any files or folders starting with the word \"Sales\" - \\*.csv would locate any files ending in \".csv\" - \\* matches everything within the directory tree starting at your given `resource`  The search is not case-sensitive. Searching for Clients\\* or clients\\* or CLIENTS\\*, etc. will provide identical results  If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.

### Example


```python
import openapi_client
from openapi_client.models.resource_collection_response import ResourceCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    resource = 'resource_example' # str | Resource identifier to get resources for. Can be path/id/name.
    sort = 'name' # str | Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. (optional)
    offset = 0 # int | Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting `offset=200` would trigger the server to skip the first 200 matching entries when returning the results. (optional) (default to 0)
    limit = 56 # int | The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the `offset` parameter, above. (optional)
    type = 'type_example' # str | Limit types of resources returned to \"file\" or \"dir\" only. This is ignored if you are using the `name` parameter to trigger a search. (optional)
    name = 'name_example' # str | Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in \"zip\" will be included in the list of results. (optional)
    include = 'include_example' # str | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. (optional)

    try:
        # Get a list of all resources
        api_response = api_instance.list_resources(ev_api_key, ev_access_token, resource, sort=sort, offset=offset, limit=limit, type=type, name=name, include=include)
        print("The response of ResourcesApi->list_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->list_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **resource** | **str**| Resource identifier to get resources for. Can be path/id/name. | 
 **sort** | **str**| Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. | [optional] 
 **offset** | **int**| Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting &#x60;offset&#x3D;200&#x60; would trigger the server to skip the first 200 matching entries when returning the results. | [optional] [default to 0]
 **limit** | **int**| The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the &#x60;offset&#x60; parameter, above. | [optional] 
 **type** | **str**| Limit types of resources returned to \&quot;file\&quot; or \&quot;dir\&quot; only. This is ignored if you are using the &#x60;name&#x60; parameter to trigger a search. | [optional] 
 **name** | **str**| Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter &#x60;*zip&#x60; and only resources ending in \&quot;zip\&quot; will be included in the list of results. | [optional] 
 **include** | **str**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_resources**
> ResourceCopyMove move_resources(ev_api_key, ev_access_token, move_resources_request_body=move_resources_request_body)

Move resources

Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account. In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.  **Notes:** - Authenticated user should have modify permission. 

### Example


```python
import openapi_client
from openapi_client.models.move_resources_request_body import MoveResourcesRequestBody
from openapi_client.models.resource_copy_move import ResourceCopyMove
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    move_resources_request_body = {"parentResource":"/copyhere","resources":["/testone.jpg","/folder"]} # MoveResourcesRequestBody |  (optional)

    try:
        # Move resources
        api_response = api_instance.move_resources(ev_api_key, ev_access_token, move_resources_request_body=move_resources_request_body)
        print("The response of ResourcesApi->move_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->move_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **move_resources_request_body** | [**MoveResourcesRequestBody**](MoveResourcesRequestBody.md)|  | [optional] 

### Return type

[**ResourceCopyMove**](ResourceCopyMove.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |
**207** | Multi Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_resource_by_id**
> ResourceResponse update_resource_by_id(id, ev_access_token, ev_api_key, update_resource_by_id_request_body=update_resource_by_id_request_body)

Rename a resource.

Update the specified file or folder resource record's \"name\" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI. 

### Example


```python
import openapi_client
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.models.update_resource_by_id_request_body import UpdateResourceByIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    id = 56 # int | ID number of the resource
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    update_resource_by_id_request_body = {"name":"my-renamed-file.txt"} # UpdateResourceByIdRequestBody |  (optional)

    try:
        # Rename a resource.
        api_response = api_instance.update_resource_by_id(id, ev_access_token, ev_api_key, update_resource_by_id_request_body=update_resource_by_id_request_body)
        print("The response of ResourcesApi->update_resource_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->update_resource_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID number of the resource | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **update_resource_by_id_request_body** | [**UpdateResourceByIdRequestBody**](UpdateResourceByIdRequestBody.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file**
> ResourceResponse upload_file(ev_api_key, ev_access_token, path, file_size, offset_bytes=offset_bytes, resume=resume, allow_overwrite=allow_overwrite, file=file)

Upload a file

Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file. 

### Example


```python
import openapi_client
from openapi_client.models.resource_response import ResourceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    path = 'path_example' # str | Destination path for the file being uploaded, including the file name.
    file_size = 2935 # int | File size, in bits, of the file being uploaded.
    offset_bytes = 4852 # int | Allows a file upload to resume at a certain number of bytes. (optional)
    resume = True # bool | True if upload resume is supported, false if it isn't.  (optional) (default to True)
    allow_overwrite = False # bool | True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated.  (optional) (default to False)
    file = None # bytearray |  (optional)

    try:
        # Upload a file
        api_response = api_instance.upload_file(ev_api_key, ev_access_token, path, file_size, offset_bytes=offset_bytes, resume=resume, allow_overwrite=allow_overwrite, file=file)
        print("The response of ResourcesApi->upload_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->upload_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **path** | **str**| Destination path for the file being uploaded, including the file name. | 
 **file_size** | **int**| File size, in bits, of the file being uploaded. | 
 **offset_bytes** | **int**| Allows a file upload to resume at a certain number of bytes. | [optional] 
 **resume** | **bool**| True if upload resume is supported, false if it isn&#39;t.  | [optional] [default to True]
 **allow_overwrite** | **bool**| True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated.  | [optional] [default to False]
 **file** | **bytearray**|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


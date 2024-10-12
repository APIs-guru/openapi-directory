# openapi_client.AssetMediaFileApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_media_files_code**](AssetMediaFileApi.md#get_asset_media_files_code) | **GET** /api/rest/v1/asset-media-files/{code} | Download the media file associated to an asset
[**post_asset_media_files**](AssetMediaFileApi.md#post_asset_media_files) | **POST** /api/rest/v1/asset-media-files | Create a new media file for an asset


# **get_asset_media_files_code**
> get_asset_media_files_code(code)

Download the media file associated to an asset

This endpoint allows you to download a given media file that is associated with an asset.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssetMediaFileApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Download the media file associated to an asset
        api_instance.get_asset_media_files_code(code)
    except Exception as e:
        print("Exception when calling AssetMediaFileApi->get_asset_media_files_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_asset_media_files**
> post_asset_media_files(content_type, body=body)

Create a new media file for an asset

This endpoint allows you to create a new media file and associate it to a media file attribute value of an asset.

### Example


```python
import openapi_client
from openapi_client.models.post_asset_media_files_request import PostAssetMediaFilesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssetMediaFileApi(api_client)
    content_type = 'content_type_example' # str | Equal to 'multipart/form-data', no other value allowed
    body = openapi_client.PostAssetMediaFilesRequest() # PostAssetMediaFilesRequest |  (optional)

    try:
        # Create a new media file for an asset
        api_instance.post_asset_media_files(content_type, body=body)
    except Exception as e:
        print("Exception when calling AssetMediaFileApi->post_asset_media_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Equal to &#39;multipart/form-data&#39;, no other value allowed | 
 **body** | [**PostAssetMediaFilesRequest**](PostAssetMediaFilesRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Asset-media-file-code - Code of the media file <br>  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


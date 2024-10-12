# openapi_client.GlobalImageCategoriesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_image_categories_get_file**](GlobalImageCategoriesApi.md#global_image_categories_get_file) | **GET** /api/v2/GlobalImageCategories/{ID} | Gets a file&#39;s metadata.
[**global_image_categories_get_files**](GlobalImageCategoriesApi.md#global_image_categories_get_files) | **GET** /api/v2/GlobalImageCategories | Get a paged response of file metadata.
[**global_image_categories_post_file**](GlobalImageCategoriesApi.md#global_image_categories_post_file) | **POST** /api/v2/GlobalImageCategories | Create the metadata for a file before uploading. The State should be &#39;Created&#39;.


# **global_image_categories_get_file**
> GlobalResourcesSharedModelsGlobalImageCategory global_image_categories_get_file(id)

Gets a file's metadata.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_global_image_category import GlobalResourcesSharedModelsGlobalImageCategory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalImageCategoriesApi(api_client)
    id = 'id_example' # str | The file's id.

    try:
        # Gets a file's metadata.
        api_response = api_instance.global_image_categories_get_file(id)
        print("The response of GlobalImageCategoriesApi->global_image_categories_get_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImageCategoriesApi->global_image_categories_get_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The file&#39;s id. | 

### Return type

[**GlobalResourcesSharedModelsGlobalImageCategory**](GlobalResourcesSharedModelsGlobalImageCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_image_categories_get_files**
> APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory global_image_categories_get_files(limit=limit, offset=offset)

Get a paged response of file metadata.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_global_image_category import APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalImageCategoriesApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a paged response of file metadata.
        api_response = api_instance.global_image_categories_get_files(limit=limit, offset=offset)
        print("The response of GlobalImageCategoriesApi->global_image_categories_get_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImageCategoriesApi->global_image_categories_get_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory**](APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_image_categories_post_file**
> str global_image_categories_post_file(global_resources_shared_models_global_image_category)

Create the metadata for a file before uploading. The State should be 'Created'.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_global_image_category import GlobalResourcesSharedModelsGlobalImageCategory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalImageCategoriesApi(api_client)
    global_resources_shared_models_global_image_category = openapi_client.GlobalResourcesSharedModelsGlobalImageCategory() # GlobalResourcesSharedModelsGlobalImageCategory | The file's metadata.

    try:
        # Create the metadata for a file before uploading. The State should be 'Created'.
        api_response = api_instance.global_image_categories_post_file(global_resources_shared_models_global_image_category)
        print("The response of GlobalImageCategoriesApi->global_image_categories_post_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImageCategoriesApi->global_image_categories_post_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_global_image_category** | [**GlobalResourcesSharedModelsGlobalImageCategory**](GlobalResourcesSharedModelsGlobalImageCategory.md)| The file&#39;s metadata. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


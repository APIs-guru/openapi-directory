# openapi_client.GlobalImagesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_images_delete_file**](GlobalImagesApi.md#global_images_delete_file) | **DELETE** /api/v2/GlobalImages/{ID} | Mark a file as &#39;Removed&#39;. Disables download of the image and hides metadata from GET all method
[**global_images_get_global_image**](GlobalImagesApi.md#global_images_get_global_image) | **GET** /api/v2/GlobalImages/{ID} | Gets a GlobalImage&#39;s metadata.
[**global_images_get_global_image_contents**](GlobalImagesApi.md#global_images_get_global_image_contents) | **GET** /api/v2/GlobalImages/{ID}/ImageContents | Download the contents of a GlobalImage. The current State of the GlobalImage should be &#39;Available&#39;.
[**global_images_get_global_images**](GlobalImagesApi.md#global_images_get_global_images) | **GET** /api/v2/GlobalImages | Get a paged response of GlobalImage.
[**global_images_post_global_image**](GlobalImagesApi.md#global_images_post_global_image) | **POST** /api/v2/GlobalImages | Create the metadata for a GlobalImage before uploading. The State should be &#39;Created&#39;.
[**global_images_put_global_image**](GlobalImagesApi.md#global_images_put_global_image) | **PUT** /api/v2/GlobalImages/{ID} | Update the metadata for an image.
[**global_images_put_global_image_contents**](GlobalImagesApi.md#global_images_put_global_image_contents) | **PUT** /api/v2/GlobalImages/{ID}/ImageContents | Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be &#39;Created&#39;.


# **global_images_delete_file**
> global_images_delete_file(id)

Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method

No Documentation Found.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    id = 'id_example' # str | The GlobalImage's id.

    try:
        # Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
        api_instance.global_images_delete_file(id)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_delete_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The GlobalImage&#39;s id. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_images_get_global_image**
> GlobalResourcesSharedModelsGlobalImage global_images_get_global_image(id)

Gets a GlobalImage's metadata.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_global_image import GlobalResourcesSharedModelsGlobalImage
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    id = 'id_example' # str | The GlobalImage's id.

    try:
        # Gets a GlobalImage's metadata.
        api_response = api_instance.global_images_get_global_image(id)
        print("The response of GlobalImagesApi->global_images_get_global_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_get_global_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The GlobalImage&#39;s id. | 

### Return type

[**GlobalResourcesSharedModelsGlobalImage**](GlobalResourcesSharedModelsGlobalImage.md)

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

# **global_images_get_global_image_contents**
> object global_images_get_global_image_contents(id, is_full_image=is_full_image)

Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.

No Documentation Found.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    id = 'id_example' # str | The global image metadata id.
    is_full_image = True # bool | Indicated whether to download the full image or the thumbnail. Defaults to 'true'. (optional)

    try:
        # Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
        api_response = api_instance.global_images_get_global_image_contents(id, is_full_image=is_full_image)
        print("The response of GlobalImagesApi->global_images_get_global_image_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_get_global_image_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The global image metadata id. | 
 **is_full_image** | **bool**| Indicated whether to download the full image or the thumbnail. Defaults to &#39;true&#39;. | [optional] 

### Return type

**object**

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

# **global_images_get_global_images**
> APIIPagedResponseGlobalResourcesSharedModelsGlobalImage global_images_get_global_images(search=search, category_id=category_id, publisher=publisher, include_deleted=include_deleted, limit=limit, offset=offset)

Get a paged response of GlobalImage.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_global_image import APIIPagedResponseGlobalResourcesSharedModelsGlobalImage
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    search = 'search_example' # str | Optional. Searches for matching global images with the matching Category Name, Publisher or Description (optional)
    category_id = 'category_id_example' # str |  (optional)
    publisher = 'publisher_example' # str |  (optional)
    include_deleted = True # bool | Indicates whether to include GlobalImages marked as removed. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a paged response of GlobalImage.
        api_response = api_instance.global_images_get_global_images(search=search, category_id=category_id, publisher=publisher, include_deleted=include_deleted, limit=limit, offset=offset)
        print("The response of GlobalImagesApi->global_images_get_global_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_get_global_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Optional. Searches for matching global images with the matching Category Name, Publisher or Description | [optional] 
 **category_id** | **str**|  | [optional] 
 **publisher** | **str**|  | [optional] 
 **include_deleted** | **bool**| Indicates whether to include GlobalImages marked as removed. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsGlobalImage**](APIIPagedResponseGlobalResourcesSharedModelsGlobalImage.md)

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

# **global_images_post_global_image**
> str global_images_post_global_image(global_resources_shared_models_global_image, override_publisher_or_date=override_publisher_or_date)

Create the metadata for a GlobalImage before uploading. The State should be 'Created'.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_global_image import GlobalResourcesSharedModelsGlobalImage
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    global_resources_shared_models_global_image = openapi_client.GlobalResourcesSharedModelsGlobalImage() # GlobalResourcesSharedModelsGlobalImage | The file's metadata.
    override_publisher_or_date = True # bool | Whether to set the publisher and date to the provided values. (optional)

    try:
        # Create the metadata for a GlobalImage before uploading. The State should be 'Created'.
        api_response = api_instance.global_images_post_global_image(global_resources_shared_models_global_image, override_publisher_or_date=override_publisher_or_date)
        print("The response of GlobalImagesApi->global_images_post_global_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_post_global_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_global_image** | [**GlobalResourcesSharedModelsGlobalImage**](GlobalResourcesSharedModelsGlobalImage.md)| The file&#39;s metadata. | 
 **override_publisher_or_date** | **bool**| Whether to set the publisher and date to the provided values. | [optional] 

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

# **global_images_put_global_image**
> global_images_put_global_image(id, global_resources_shared_models_global_image, override_publisher_or_date=override_publisher_or_date)

Update the metadata for an image.

Update the metadata for an image. Size may not be modified by the client.                   Set status to 'Available' to publish an image. Both the image and thumbnail must be uploaded.                  Set status to 'Created' to reset an image's contents and re-upload.                   A file may only be 'Removed' by the DELETE method.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_global_image import GlobalResourcesSharedModelsGlobalImage
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    id = 'id_example' # str | The GlobalImage's id.
    global_resources_shared_models_global_image = openapi_client.GlobalResourcesSharedModelsGlobalImage() # GlobalResourcesSharedModelsGlobalImage | The GlobalImage's metadata
    override_publisher_or_date = True # bool | Whether to set the publisher and date to the provided values. (optional)

    try:
        # Update the metadata for an image.
        api_instance.global_images_put_global_image(id, global_resources_shared_models_global_image, override_publisher_or_date=override_publisher_or_date)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_put_global_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The GlobalImage&#39;s id. | 
 **global_resources_shared_models_global_image** | [**GlobalResourcesSharedModelsGlobalImage**](GlobalResourcesSharedModelsGlobalImage.md)| The GlobalImage&#39;s metadata | 
 **override_publisher_or_date** | **bool**| Whether to set the publisher and date to the provided values. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_images_put_global_image_contents**
> object global_images_put_global_image_contents(id, is_full_image=is_full_image)

Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.

Both the image and thumbnail must be uploaded.                  Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail

### Example


```python
import openapi_client
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
    api_instance = openapi_client.GlobalImagesApi(api_client)
    id = 'id_example' # str | The global image metadata id.
    is_full_image = True # bool | Indicated whether this is the full image or the thumbnail. Defaults to 'true'. (optional)

    try:
        # Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
        api_response = api_instance.global_images_put_global_image_contents(id, is_full_image=is_full_image)
        print("The response of GlobalImagesApi->global_images_put_global_image_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalImagesApi->global_images_put_global_image_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The global image metadata id. | 
 **is_full_image** | **bool**| Indicated whether this is the full image or the thumbnail. Defaults to &#39;true&#39;. | [optional] 

### Return type

**object**

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


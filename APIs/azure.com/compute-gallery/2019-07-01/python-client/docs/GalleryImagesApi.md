# openapi_client.GalleryImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_images_create_or_update**](GalleryImagesApi.md#gallery_images_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName} | 
[**gallery_images_delete**](GalleryImagesApi.md#gallery_images_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName} | 
[**gallery_images_get**](GalleryImagesApi.md#gallery_images_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName} | 
[**gallery_images_list_by_gallery**](GalleryImagesApi.md#gallery_images_list_by_gallery) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images | 
[**gallery_images_update**](GalleryImagesApi.md#gallery_images_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName} | 


# **gallery_images_create_or_update**
> GalleryImage gallery_images_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version, gallery_image)



Create or update a gallery Image Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image import GalleryImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition is to be created.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_image = openapi_client.GalleryImage() # GalleryImage | Parameters supplied to the create or update gallery image operation.

    try:
        api_response = api_instance.gallery_images_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version, gallery_image)
        print("The response of GalleryImagesApi->gallery_images_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition is to be created. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_image** | [**GalleryImage**](GalleryImage.md)| Parameters supplied to the create or update gallery image operation. | 

### Return type

[**GalleryImage**](GalleryImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_delete**
> gallery_images_delete(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)



Delete a gallery image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition is to be deleted.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.gallery_images_delete(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition is to be deleted. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition to be deleted. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_get**
> GalleryImage gallery_images_get(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)



Retrieves information about a gallery Image Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image import GalleryImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition to be retrieved.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_images_get(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)
        print("The response of GalleryImagesApi->gallery_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery from which the Image Definitions are to be retrieved. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition to be retrieved. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryImage**](GalleryImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_list_by_gallery**
> GalleryImageList gallery_images_list_by_gallery(subscription_id, resource_group_name, gallery_name, api_version)



List gallery Image Definitions in a gallery.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image_list import GalleryImageList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery from which Image Definitions are to be listed.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_images_list_by_gallery(subscription_id, resource_group_name, gallery_name, api_version)
        print("The response of GalleryImagesApi->gallery_images_list_by_gallery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_list_by_gallery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery from which Image Definitions are to be listed. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryImageList**](GalleryImageList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_update**
> GalleryImage gallery_images_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version, gallery_image)



Update a gallery Image Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image import GalleryImage
from openapi_client.models.gallery_image_update import GalleryImageUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition is to be updated.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_image = openapi_client.GalleryImageUpdate() # GalleryImageUpdate | Parameters supplied to the update gallery image operation.

    try:
        api_response = api_instance.gallery_images_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version, gallery_image)
        print("The response of GalleryImagesApi->gallery_images_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition is to be updated. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_image** | [**GalleryImageUpdate**](GalleryImageUpdate.md)| Parameters supplied to the update gallery image operation. | 

### Return type

[**GalleryImage**](GalleryImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


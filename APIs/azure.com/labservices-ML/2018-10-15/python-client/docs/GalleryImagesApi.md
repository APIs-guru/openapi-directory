# openapi_client.GalleryImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_images_create_or_update**](GalleryImagesApi.md#gallery_images_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName} | 
[**gallery_images_delete**](GalleryImagesApi.md#gallery_images_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName} | 
[**gallery_images_get**](GalleryImagesApi.md#gallery_images_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName} | 
[**gallery_images_list**](GalleryImagesApi.md#gallery_images_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages | 
[**gallery_images_update**](GalleryImagesApi.md#gallery_images_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName} | 


# **gallery_images_create_or_update**
> GalleryImage gallery_images_create_or_update(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, gallery_image)



Create or replace an existing Gallery Image.

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
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    gallery_image = openapi_client.GalleryImage() # GalleryImage | Represents an image from the Azure Marketplace

    try:
        api_response = api_instance.gallery_images_create_or_update(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, gallery_image)
        print("The response of GalleryImagesApi->gallery_images_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **gallery_image_name** | **str**| The name of the gallery Image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **gallery_image** | [**GalleryImage**](GalleryImage.md)| Represents an image from the Azure Marketplace | 

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_delete**
> gallery_images_delete(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version)



Delete gallery image.

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
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.gallery_images_delete(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **gallery_image_name** | **str**| The name of the gallery Image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_get**
> GalleryImage gallery_images_get(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, expand=expand)



Get gallery image

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
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=author)' (optional)

    try:
        api_response = api_instance.gallery_images_get(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, expand=expand)
        print("The response of GalleryImagesApi->gallery_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **gallery_image_name** | **str**| The name of the gallery Image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;author)&#39; | [optional] 

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_list**
> ResponseWithContinuationGalleryImage gallery_images_list(subscription_id, resource_group_name, lab_account_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List gallery images in a given lab account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_gallery_image import ResponseWithContinuationGalleryImage
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
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=author)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.gallery_images_list(subscription_id, resource_group_name, lab_account_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of GalleryImagesApi->gallery_images_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;author)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationGalleryImage**](ResponseWithContinuationGalleryImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_images_update**
> GalleryImage gallery_images_update(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, gallery_image)



Modify properties of gallery images.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image import GalleryImage
from openapi_client.models.gallery_image_fragment import GalleryImageFragment
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
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    gallery_image = openapi_client.GalleryImageFragment() # GalleryImageFragment | Represents an image from the Azure Marketplace

    try:
        api_response = api_instance.gallery_images_update(subscription_id, resource_group_name, lab_account_name, gallery_image_name, api_version, gallery_image)
        print("The response of GalleryImagesApi->gallery_images_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImagesApi->gallery_images_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **gallery_image_name** | **str**| The name of the gallery Image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **gallery_image** | [**GalleryImageFragment**](GalleryImageFragment.md)| Represents an image from the Azure Marketplace | 

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


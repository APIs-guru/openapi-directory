# openapi_client.GalleryItemsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_items_create**](GalleryItemsApi.md#gallery_items_create) | **POST** /subscriptions/{subscriptionId}/providers/microsoft.gallery.admin/galleryItems | Uploads a provider gallery item to the storage.
[**gallery_items_delete**](GalleryItemsApi.md#gallery_items_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/microsoft.gallery.admin/galleryItems/{galleryItemName} | Delete a specific gallery item.
[**gallery_items_get**](GalleryItemsApi.md#gallery_items_get) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.gallery.admin/galleryItems/{galleryItemName} | Get a specific gallery item.
[**gallery_items_list**](GalleryItemsApi.md#gallery_items_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.gallery.admin/galleryItems | Lists gallery items.


# **gallery_items_create**
> GalleryItem gallery_items_create(subscription_id, api_version, gallery_item_uri_payload)

Uploads a provider gallery item to the storage.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_item import GalleryItem
from openapi_client.models.gallery_item_uri_payload import GalleryItemUriPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryItemsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    gallery_item_uri_payload = openapi_client.GalleryItemUriPayload() # GalleryItemUriPayload | The URI to the gallery item JSON file.

    try:
        # Uploads a provider gallery item to the storage.
        api_response = api_instance.gallery_items_create(subscription_id, api_version, gallery_item_uri_payload)
        print("The response of GalleryItemsApi->gallery_items_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryItemsApi->gallery_items_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **gallery_item_uri_payload** | [**GalleryItemUriPayload**](GalleryItemUriPayload.md)| The URI to the gallery item JSON file. | 

### Return type

[**GalleryItem**](GalleryItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | CREATED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_items_delete**
> gallery_items_delete(subscription_id, gallery_item_name, api_version)

Delete a specific gallery item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryItemsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    gallery_item_name = 'gallery_item_name_example' # str | Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        # Delete a specific gallery item.
        api_instance.gallery_items_delete(subscription_id, gallery_item_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryItemsApi->gallery_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **gallery_item_name** | **str**| Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NO CONTENT. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_items_get**
> GalleryItem gallery_items_get(subscription_id, gallery_item_name, api_version)

Get a specific gallery item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_item import GalleryItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryItemsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    gallery_item_name = 'gallery_item_name_example' # str | Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        # Get a specific gallery item.
        api_response = api_instance.gallery_items_get(subscription_id, gallery_item_name, api_version)
        print("The response of GalleryItemsApi->gallery_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryItemsApi->gallery_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **gallery_item_name** | **str**| Identity of the gallery item. Includes publisher name, item name, and may include version separated by period character. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**GalleryItem**](GalleryItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_items_list**
> GalleryItemList gallery_items_list(subscription_id, api_version)

Lists gallery items.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_item_list import GalleryItemList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GalleryItemsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        # Lists gallery items.
        api_response = api_instance.gallery_items_list(subscription_id, api_version)
        print("The response of GalleryItemsApi->gallery_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryItemsApi->gallery_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**GalleryItemList**](GalleryItemList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


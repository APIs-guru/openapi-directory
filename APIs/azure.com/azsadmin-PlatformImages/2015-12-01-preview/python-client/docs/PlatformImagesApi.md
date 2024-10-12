# openapi_client.PlatformImagesApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**platform_images_create**](PlatformImagesApi.md#platform_images_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/platformImage/publishers/{publisher}/offers/{offer}/skus/{sku}/versions/{version} | Creates a platform image.
[**platform_images_delete**](PlatformImagesApi.md#platform_images_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/platformImage/publishers/{publisher}/offers/{offer}/skus/{sku}/versions/{version} | Deletes a platform image matching publisher, offer, skus and version
[**platform_images_get**](PlatformImagesApi.md#platform_images_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/platformImage/publishers/{publisher}/offers/{offer}/skus/{sku}/versions/{version} | Returns the requested platform image.
[**platform_images_list**](PlatformImagesApi.md#platform_images_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/platformImage | Returns all platform images.


# **platform_images_create**
> PlatformImage platform_images_create(subscription_id, location, publisher, offer, sku, version, api_version, new_image)

Creates a platform image.

Creates a new platform image with given publisher, offer, skus and version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.platform_image import PlatformImage
from openapi_client.models.platform_image_parameters import PlatformImageParameters
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
    api_instance = openapi_client.PlatformImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    offer = 'offer_example' # str | Name of the offer.
    sku = 'sku_example' # str | Name of the SKU.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')
    new_image = openapi_client.PlatformImageParameters() # PlatformImageParameters | New platform image.

    try:
        # Creates a platform image.
        api_response = api_instance.platform_images_create(subscription_id, location, publisher, offer, sku, version, api_version, new_image)
        print("The response of PlatformImagesApi->platform_images_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformImagesApi->platform_images_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **offer** | **str**| Name of the offer. | 
 **sku** | **str**| Name of the SKU. | 
 **version** | **str**| The version of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]
 **new_image** | [**PlatformImageParameters**](PlatformImageParameters.md)| New platform image. | 

### Return type

[**PlatformImage**](PlatformImage.md)

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
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platform_images_delete**
> platform_images_delete(subscription_id, location, publisher, offer, sku, version, api_version)

Deletes a platform image matching publisher, offer, skus and version

Delete a platform image

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
    api_instance = openapi_client.PlatformImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    offer = 'offer_example' # str | Name of the offer.
    sku = 'sku_example' # str | Name of the SKU.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Deletes a platform image matching publisher, offer, skus and version
        api_instance.platform_images_delete(subscription_id, location, publisher, offer, sku, version, api_version)
    except Exception as e:
        print("Exception when calling PlatformImagesApi->platform_images_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **offer** | **str**| Name of the offer. | 
 **sku** | **str**| Name of the SKU. | 
 **version** | **str**| The version of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platform_images_get**
> PlatformImage platform_images_get(subscription_id, location, publisher, offer, sku, version, api_version)

Returns the requested platform image.

Returns the specific platform image matching publisher, offer, skus and version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.platform_image import PlatformImage
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
    api_instance = openapi_client.PlatformImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    offer = 'offer_example' # str | Name of the offer.
    sku = 'sku_example' # str | Name of the SKU.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Returns the requested platform image.
        api_response = api_instance.platform_images_get(subscription_id, location, publisher, offer, sku, version, api_version)
        print("The response of PlatformImagesApi->platform_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformImagesApi->platform_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **offer** | **str**| Name of the offer. | 
 **sku** | **str**| Name of the SKU. | 
 **version** | **str**| The version of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

### Return type

[**PlatformImage**](PlatformImage.md)

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

# **platform_images_list**
> List[PlatformImage] platform_images_list(subscription_id, location, api_version)

Returns all platform images.

Returns a list of all platform images.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.platform_image import PlatformImage
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
    api_instance = openapi_client.PlatformImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Returns all platform images.
        api_response = api_instance.platform_images_list(subscription_id, location, api_version)
        print("The response of PlatformImagesApi->platform_images_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformImagesApi->platform_images_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

### Return type

[**List[PlatformImage]**](PlatformImage.md)

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


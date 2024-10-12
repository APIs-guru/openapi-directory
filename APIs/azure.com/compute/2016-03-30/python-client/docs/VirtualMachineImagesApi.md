# openapi_client.VirtualMachineImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_images_get**](VirtualMachineImagesApi.md#virtual_machine_images_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version} | 
[**virtual_machine_images_list**](VirtualMachineImagesApi.md#virtual_machine_images_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions | 
[**virtual_machine_images_list_offers**](VirtualMachineImagesApi.md#virtual_machine_images_list_offers) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers | 
[**virtual_machine_images_list_publishers**](VirtualMachineImagesApi.md#virtual_machine_images_list_publishers) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers | 
[**virtual_machine_images_list_skus**](VirtualMachineImagesApi.md#virtual_machine_images_list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus | 


# **virtual_machine_images_get**
> VirtualMachineImage virtual_machine_images_get(location, publisher_name, offer, skus, version, api_version, subscription_id)



Gets a virtual machine image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_image import VirtualMachineImage
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
    api_instance = openapi_client.VirtualMachineImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | A valid image publisher.
    offer = 'offer_example' # str | A valid image publisher offer.
    skus = 'skus_example' # str | A valid image SKU.
    version = 'version_example' # str | A valid image SKU version.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_images_get(location, publisher_name, offer, skus, version, api_version, subscription_id)
        print("The response of VirtualMachineImagesApi->virtual_machine_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImagesApi->virtual_machine_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**| A valid image publisher. | 
 **offer** | **str**| A valid image publisher offer. | 
 **skus** | **str**| A valid image SKU. | 
 **version** | **str**| A valid image SKU version. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineImage**](VirtualMachineImage.md)

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

# **virtual_machine_images_list**
> List[VirtualMachineImageResource] virtual_machine_images_list(location, publisher_name, offer, skus, api_version, subscription_id, filter=filter, top=top, orderby=orderby)



Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_image_resource import VirtualMachineImageResource
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
    api_instance = openapi_client.VirtualMachineImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | A valid image publisher.
    offer = 'offer_example' # str | A valid image publisher offer.
    skus = 'skus_example' # str | A valid image SKU.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    orderby = 'orderby_example' # str |  (optional)

    try:
        api_response = api_instance.virtual_machine_images_list(location, publisher_name, offer, skus, api_version, subscription_id, filter=filter, top=top, orderby=orderby)
        print("The response of VirtualMachineImagesApi->virtual_machine_images_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImagesApi->virtual_machine_images_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**| A valid image publisher. | 
 **offer** | **str**| A valid image publisher offer. | 
 **skus** | **str**| A valid image SKU. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **orderby** | **str**|  | [optional] 

### Return type

[**List[VirtualMachineImageResource]**](VirtualMachineImageResource.md)

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

# **virtual_machine_images_list_offers**
> List[VirtualMachineImageResource] virtual_machine_images_list_offers(location, publisher_name, api_version, subscription_id)



Gets a list of virtual machine image offers for the specified location and publisher.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_image_resource import VirtualMachineImageResource
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
    api_instance = openapi_client.VirtualMachineImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | A valid image publisher.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_images_list_offers(location, publisher_name, api_version, subscription_id)
        print("The response of VirtualMachineImagesApi->virtual_machine_images_list_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImagesApi->virtual_machine_images_list_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**| A valid image publisher. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[VirtualMachineImageResource]**](VirtualMachineImageResource.md)

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

# **virtual_machine_images_list_publishers**
> List[VirtualMachineImageResource] virtual_machine_images_list_publishers(location, api_version, subscription_id)



Gets a list of virtual machine image publishers for the specified Azure location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_image_resource import VirtualMachineImageResource
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
    api_instance = openapi_client.VirtualMachineImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_images_list_publishers(location, api_version, subscription_id)
        print("The response of VirtualMachineImagesApi->virtual_machine_images_list_publishers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImagesApi->virtual_machine_images_list_publishers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[VirtualMachineImageResource]**](VirtualMachineImageResource.md)

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

# **virtual_machine_images_list_skus**
> List[VirtualMachineImageResource] virtual_machine_images_list_skus(location, publisher_name, offer, api_version, subscription_id)



Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_image_resource import VirtualMachineImageResource
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
    api_instance = openapi_client.VirtualMachineImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | A valid image publisher.
    offer = 'offer_example' # str | A valid image publisher offer.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_images_list_skus(location, publisher_name, offer, api_version, subscription_id)
        print("The response of VirtualMachineImagesApi->virtual_machine_images_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImagesApi->virtual_machine_images_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**| A valid image publisher. | 
 **offer** | **str**| A valid image publisher offer. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[VirtualMachineImageResource]**](VirtualMachineImageResource.md)

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


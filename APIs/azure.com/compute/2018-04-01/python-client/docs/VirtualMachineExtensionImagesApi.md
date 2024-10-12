# openapi_client.VirtualMachineExtensionImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_extension_images_get**](VirtualMachineExtensionImagesApi.md#virtual_machine_extension_images_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions/{version} | 
[**virtual_machine_extension_images_list_types**](VirtualMachineExtensionImagesApi.md#virtual_machine_extension_images_list_types) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types | 
[**virtual_machine_extension_images_list_versions**](VirtualMachineExtensionImagesApi.md#virtual_machine_extension_images_list_versions) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions | 


# **virtual_machine_extension_images_get**
> VirtualMachineExtensionImage virtual_machine_extension_images_get(location, publisher_name, type, version, api_version, subscription_id)



Gets a virtual machine extension image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_extension_image import VirtualMachineExtensionImage
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
    api_instance = openapi_client.VirtualMachineExtensionImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | 
    type = 'type_example' # str | 
    version = 'version_example' # str | 
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_extension_images_get(location, publisher_name, type, version, api_version, subscription_id)
        print("The response of VirtualMachineExtensionImagesApi->virtual_machine_extension_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineExtensionImagesApi->virtual_machine_extension_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**|  | 
 **type** | **str**|  | 
 **version** | **str**|  | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineExtensionImage**](VirtualMachineExtensionImage.md)

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

# **virtual_machine_extension_images_list_types**
> List[VirtualMachineExtensionImage] virtual_machine_extension_images_list_types(location, publisher_name, api_version, subscription_id)



Gets a list of virtual machine extension image types.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_extension_image import VirtualMachineExtensionImage
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
    api_instance = openapi_client.VirtualMachineExtensionImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | 
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_extension_images_list_types(location, publisher_name, api_version, subscription_id)
        print("The response of VirtualMachineExtensionImagesApi->virtual_machine_extension_images_list_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineExtensionImagesApi->virtual_machine_extension_images_list_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**|  | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[VirtualMachineExtensionImage]**](VirtualMachineExtensionImage.md)

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

# **virtual_machine_extension_images_list_versions**
> List[VirtualMachineExtensionImage] virtual_machine_extension_images_list_versions(location, publisher_name, type, api_version, subscription_id, filter=filter, top=top, orderby=orderby)



Gets a list of virtual machine extension image versions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_extension_image import VirtualMachineExtensionImage
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
    api_instance = openapi_client.VirtualMachineExtensionImagesApi(api_client)
    location = 'location_example' # str | The name of a supported Azure region.
    publisher_name = 'publisher_name_example' # str | 
    type = 'type_example' # str | 
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    orderby = 'orderby_example' # str |  (optional)

    try:
        api_response = api_instance.virtual_machine_extension_images_list_versions(location, publisher_name, type, api_version, subscription_id, filter=filter, top=top, orderby=orderby)
        print("The response of VirtualMachineExtensionImagesApi->virtual_machine_extension_images_list_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineExtensionImagesApi->virtual_machine_extension_images_list_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The name of a supported Azure region. | 
 **publisher_name** | **str**|  | 
 **type** | **str**|  | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **orderby** | **str**|  | [optional] 

### Return type

[**List[VirtualMachineExtensionImage]**](VirtualMachineExtensionImage.md)

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


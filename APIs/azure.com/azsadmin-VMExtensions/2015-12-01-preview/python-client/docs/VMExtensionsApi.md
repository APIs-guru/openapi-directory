# openapi_client.VMExtensionsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v_m_extensions_create**](VMExtensionsApi.md#v_m_extensions_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/VMExtension/publishers/{publisher}/types/{type}/versions/{version} | Create a Virtual Machine Extension Image.
[**v_m_extensions_delete**](VMExtensionsApi.md#v_m_extensions_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/VMExtension/publishers/{publisher}/types/{type}/versions/{version} | Deletes a Virtual Machine Extension Image.
[**v_m_extensions_get**](VMExtensionsApi.md#v_m_extensions_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/VMExtension/publishers/{publisher}/types/{type}/versions/{version} | Returns requested Virtual Machine Extension Image.
[**v_m_extensions_list**](VMExtensionsApi.md#v_m_extensions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/artifactTypes/VMExtension | Returns a list of all Virtual Machine Extension Images.


# **v_m_extensions_create**
> VMExtension v_m_extensions_create(subscription_id, location, publisher, type, version, api_version, extension)

Create a Virtual Machine Extension Image.

Create a Virtual Machine Extension Image with publisher, version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vm_extension import VMExtension
from openapi_client.models.vm_extension_parameters import VMExtensionParameters
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
    api_instance = openapi_client.VMExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    type = 'type_example' # str | Type of extension.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')
    extension = openapi_client.VMExtensionParameters() # VMExtensionParameters | Virtual Machine Extension Image creation properties.

    try:
        # Create a Virtual Machine Extension Image.
        api_response = api_instance.v_m_extensions_create(subscription_id, location, publisher, type, version, api_version, extension)
        print("The response of VMExtensionsApi->v_m_extensions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VMExtensionsApi->v_m_extensions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **type** | **str**| Type of extension. | 
 **version** | **str**| The version of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]
 **extension** | [**VMExtensionParameters**](VMExtensionParameters.md)| Virtual Machine Extension Image creation properties. | 

### Return type

[**VMExtension**](VMExtension.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v_m_extensions_delete**
> v_m_extensions_delete(subscription_id, location, publisher, type, version, api_version)

Deletes a Virtual Machine Extension Image.

Deletes specified Virtual Machine Extension Image.

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
    api_instance = openapi_client.VMExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    type = 'type_example' # str | Type of extension.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Deletes a Virtual Machine Extension Image.
        api_instance.v_m_extensions_delete(subscription_id, location, publisher, type, version, api_version)
    except Exception as e:
        print("Exception when calling VMExtensionsApi->v_m_extensions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **type** | **str**| Type of extension. | 
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

# **v_m_extensions_get**
> VMExtension v_m_extensions_get(subscription_id, location, publisher, type, version, api_version)

Returns requested Virtual Machine Extension Image.

Returns requested Virtual Machine Extension Image matching publisher, type, version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vm_extension import VMExtension
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
    api_instance = openapi_client.VMExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    publisher = 'publisher_example' # str | Name of the publisher.
    type = 'type_example' # str | Type of extension.
    version = 'version_example' # str | The version of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Returns requested Virtual Machine Extension Image.
        api_response = api_instance.v_m_extensions_get(subscription_id, location, publisher, type, version, api_version)
        print("The response of VMExtensionsApi->v_m_extensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VMExtensionsApi->v_m_extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **publisher** | **str**| Name of the publisher. | 
 **type** | **str**| Type of extension. | 
 **version** | **str**| The version of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

### Return type

[**VMExtension**](VMExtension.md)

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

# **v_m_extensions_list**
> List[VMExtension] v_m_extensions_list(subscription_id, location, api_version)

Returns a list of all Virtual Machine Extension Images.

List of all Virtual Machine Extension Images for the current location are returned.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vm_extension import VMExtension
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
    api_instance = openapi_client.VMExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Returns a list of all Virtual Machine Extension Images.
        api_response = api_instance.v_m_extensions_list(subscription_id, location, api_version)
        print("The response of VMExtensionsApi->v_m_extensions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VMExtensionsApi->v_m_extensions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

### Return type

[**List[VMExtension]**](VMExtension.md)

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


# openapi_client.ProvidersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**providers_get**](ProvidersApi.md#providers_get) | **GET** /subscriptions/{subscriptionId}/providers/{resourceProviderNamespace} | 
[**providers_list**](ProvidersApi.md#providers_list) | **GET** /subscriptions/{subscriptionId}/providers | 
[**providers_register**](ProvidersApi.md#providers_register) | **POST** /subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/register | 
[**providers_unregister**](ProvidersApi.md#providers_unregister) | **POST** /subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/unregister | 


# **providers_get**
> Provider providers_get(resource_provider_namespace, api_version, subscription_id, expand=expand)



Gets the specified resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider import Provider
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
    api_instance = openapi_client.ProvidersApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    expand = 'expand_example' # str | The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. (optional)

    try:
        api_response = api_instance.providers_get(resource_provider_namespace, api_version, subscription_id, expand=expand)
        print("The response of ProvidersApi->providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **expand** | **str**| The $expand query parameter. For example, to include property aliases in response, use $expand&#x3D;resourceTypes/aliases. | [optional] 

### Return type

[**Provider**](Provider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providers_list**
> ProviderListResult providers_list(api_version, subscription_id, top=top, expand=expand)



Gets all resource providers for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_list_result import ProviderListResult
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
    api_instance = openapi_client.ProvidersApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 56 # int | The number of results to return. If null is passed returns all deployments. (optional)
    expand = 'expand_example' # str | The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. (optional)

    try:
        api_response = api_instance.providers_list(api_version, subscription_id, top=top, expand=expand)
        print("The response of ProvidersApi->providers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->providers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **int**| The number of results to return. If null is passed returns all deployments. | [optional] 
 **expand** | **str**| The properties to include in the results. For example, use &amp;$expand&#x3D;metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand&#x3D;resourceTypes/aliases. | [optional] 

### Return type

[**ProviderListResult**](ProviderListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource providers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providers_register**
> Provider providers_register(resource_provider_namespace, api_version, subscription_id)



Registers a subscription with a resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider import Provider
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
    api_instance = openapi_client.ProvidersApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider to register.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.providers_register(resource_provider_namespace, api_version, subscription_id)
        print("The response of ProvidersApi->providers_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->providers_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider to register. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**Provider**](Provider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providers_unregister**
> Provider providers_unregister(resource_provider_namespace, api_version, subscription_id)



Unregisters a subscription from a resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider import Provider
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
    api_instance = openapi_client.ProvidersApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider to unregister.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.providers_unregister(resource_provider_namespace, api_version, subscription_id)
        print("The response of ProvidersApi->providers_unregister:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->providers_unregister: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider to unregister. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**Provider**](Provider.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


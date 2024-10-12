# openapi_client.DelegatedProvidersApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delegated_providers_get**](DelegatedProvidersApi.md#delegated_providers_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProvider} | 
[**delegated_providers_list**](DelegatedProvidersApi.md#delegated_providers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders | 


# **delegated_providers_get**
> DelegatedProvidersList200ResponseValueInner delegated_providers_get(subscription_id, delegated_provider, api_version)



Get the specified delegated provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delegated_providers_list200_response_value_inner import DelegatedProvidersList200ResponseValueInner
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
    api_instance = openapi_client.DelegatedProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    delegated_provider = 'delegated_provider_example' # str | DelegatedProvider identifier.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_providers_get(subscription_id, delegated_provider, api_version)
        print("The response of DelegatedProvidersApi->delegated_providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProvidersApi->delegated_providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **delegated_provider** | **str**| DelegatedProvider identifier. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DelegatedProvidersList200ResponseValueInner**](DelegatedProvidersList200ResponseValueInner.md)

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

# **delegated_providers_list**
> DelegatedProvidersList200Response delegated_providers_list(subscription_id, api_version)



Get the list of delegatedProviders.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delegated_providers_list200_response import DelegatedProvidersList200Response
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
    api_instance = openapi_client.DelegatedProvidersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_providers_list(subscription_id, api_version)
        print("The response of DelegatedProvidersApi->delegated_providers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProvidersApi->delegated_providers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DelegatedProvidersList200Response**](DelegatedProvidersList200Response.md)

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


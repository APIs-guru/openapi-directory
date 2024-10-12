# openapi_client.DelegatedProviderOffersApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delegated_provider_offers_get**](DelegatedProviderOffersApi.md#delegated_provider_offers_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProviderSubscriptionId}/offers/{offer} | 
[**delegated_provider_offers_list**](DelegatedProviderOffersApi.md#delegated_provider_offers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProviderSubscriptionId}/offers | 


# **delegated_provider_offers_get**
> DelegatedProviderOffer delegated_provider_offers_get(subscription_id, delegated_provider_subscription_id, offer, api_version)



Get the specified delegated provider offer.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delegated_provider_offer import DelegatedProviderOffer
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
    api_instance = openapi_client.DelegatedProviderOffersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    delegated_provider_subscription_id = 'delegated_provider_subscription_id_example' # str | Delegated provider subscription identifier.
    offer = 'offer_example' # str | Name of an offer.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_provider_offers_get(subscription_id, delegated_provider_subscription_id, offer, api_version)
        print("The response of DelegatedProviderOffersApi->delegated_provider_offers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProviderOffersApi->delegated_provider_offers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **delegated_provider_subscription_id** | **str**| Delegated provider subscription identifier. | 
 **offer** | **str**| Name of an offer. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DelegatedProviderOffer**](DelegatedProviderOffer.md)

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

# **delegated_provider_offers_list**
> DelegatedProviderOfferList delegated_provider_offers_list(subscription_id, delegated_provider_subscription_id, api_version)



Get the list of delegated provider offers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delegated_provider_offer_list import DelegatedProviderOfferList
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
    api_instance = openapi_client.DelegatedProviderOffersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    delegated_provider_subscription_id = 'delegated_provider_subscription_id_example' # str | Delegated provider subscription identifier.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_provider_offers_list(subscription_id, delegated_provider_subscription_id, api_version)
        print("The response of DelegatedProviderOffersApi->delegated_provider_offers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProviderOffersApi->delegated_provider_offers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **delegated_provider_subscription_id** | **str**| Delegated provider subscription identifier. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DelegatedProviderOfferList**](DelegatedProviderOfferList.md)

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


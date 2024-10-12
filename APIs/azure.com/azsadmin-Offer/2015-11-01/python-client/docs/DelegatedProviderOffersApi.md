# openapi_client.DelegatedProviderOffersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delegated_provider_offers_get**](DelegatedProviderOffersApi.md#delegated_provider_offers_get) | **GET** /delegatedProviders/{delegatedProviderId}/offers/{offerName} | 
[**delegated_provider_offers_list**](DelegatedProviderOffersApi.md#delegated_provider_offers_list) | **GET** /delegatedProviders/{delegatedProviderId}/offers | 


# **delegated_provider_offers_get**
> Offer delegated_provider_offers_get(delegated_provider_id, offer_name, api_version)



Get the specified offer for the delegated provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.offer import Offer
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
    api_instance = openapi_client.DelegatedProviderOffersApi(api_client)
    delegated_provider_id = 'delegated_provider_id_example' # str | Id of the delegated provider.
    offer_name = 'offer_name_example' # str | Name of the offer.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_provider_offers_get(delegated_provider_id, offer_name, api_version)
        print("The response of DelegatedProviderOffersApi->delegated_provider_offers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProviderOffersApi->delegated_provider_offers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegated_provider_id** | **str**| Id of the delegated provider. | 
 **offer_name** | **str**| Name of the offer. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**Offer**](Offer.md)

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
> OfferList delegated_provider_offers_list(delegated_provider_id, api_version)



Get the list of offers for the specified delegated provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.offer_list import OfferList
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
    api_instance = openapi_client.DelegatedProviderOffersApi(api_client)
    delegated_provider_id = 'delegated_provider_id_example' # str | Id of the delegated provider.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.delegated_provider_offers_list(delegated_provider_id, api_version)
        print("The response of DelegatedProviderOffersApi->delegated_provider_offers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedProviderOffersApi->delegated_provider_offers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegated_provider_id** | **str**| Id of the delegated provider. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**OfferList**](OfferList.md)

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


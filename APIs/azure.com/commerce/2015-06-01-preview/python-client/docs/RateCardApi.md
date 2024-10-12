# openapi_client.RateCardApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rate_card_get**](RateCardApi.md#rate_card_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Commerce/RateCard | 


# **rate_card_get**
> ResourceRateCardInfo rate_card_get(filter, api_version, subscription_id)



Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change. 

### Example


```python
import openapi_client
from openapi_client.models.resource_rate_card_info import ResourceRateCardInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RateCardApi(api_client)
    filter = 'filter_example' # str | The filter to apply on the operation. It ONLY supports the 'eq' and 'and' logical operators at this time. All the 4 query parameters 'OfferDurableId',  'Currency', 'Locale', 'Region' are required to be a part of the $filter.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.rate_card_get(filter, api_version, subscription_id)
        print("The response of RateCardApi->rate_card_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateCardApi->rate_card_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| The filter to apply on the operation. It ONLY supports the &#39;eq&#39; and &#39;and&#39; logical operators at this time. All the 4 query parameters &#39;OfferDurableId&#39;,  &#39;Currency&#39;, &#39;Locale&#39;, &#39;Region&#39; are required to be a part of the $filter. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ResourceRateCardInfo**](ResourceRateCardInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


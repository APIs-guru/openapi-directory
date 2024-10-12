# openapi_client.EventItemApi

All URIs are relative to *https://api.ebay.com/buy/deal/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_event_items**](EventItemApi.md#get_event_items) | **GET** /event_item | 


# **get_event_items**
> EventItemSearchResponse get_event_items(event_ids, x_ebay_c_marketplace_id, category_ids=category_ids, delivery_country=delivery_country, limit=limit, offset=offset)



This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.event_item_search_response import EventItemSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/deal/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/deal/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventItemApi(api_client)
    event_ids = 'event_ids_example' # str | The unique identifiers for the eBay events. Maximum Value: 1
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | A header used to specify the eBay marketplace ID.
    category_ids = 'category_ids_example' # str | The unique identifier of the eBay category for the search. Maximum Value: 1 (optional)
    delivery_country = 'delivery_country_example' # str | A filter for items that can be shipped to the specified country. (optional)
    limit = 'limit_example' # str | The maximum number of items, from the current result set, returned on a single page. Default: 20 (optional)
    offset = 'offset_example' # str | The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 (optional)

    try:
        api_response = api_instance.get_event_items(event_ids, x_ebay_c_marketplace_id, category_ids=category_ids, delivery_country=delivery_country, limit=limit, offset=offset)
        print("The response of EventItemApi->get_event_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventItemApi->get_event_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_ids** | **str**| The unique identifiers for the eBay events. Maximum Value: 1 | 
 **x_ebay_c_marketplace_id** | **str**| A header used to specify the eBay marketplace ID. | 
 **category_ids** | **str**| The unique identifier of the eBay category for the search. Maximum Value: 1 | [optional] 
 **delivery_country** | **str**| A filter for items that can be shipped to the specified country. | [optional] 
 **limit** | **str**| The maximum number of items, from the current result set, returned on a single page. Default: 20 | [optional] 
 **offset** | **str**| The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 | [optional] 

### Return type

[**EventItemSearchResponse**](EventItemSearchResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


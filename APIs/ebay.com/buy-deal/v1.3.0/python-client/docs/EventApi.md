# openapi_client.EventApi

All URIs are relative to *https://api.ebay.com/buy/deal/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_event**](EventApi.md#get_event) | **GET** /event/{event_id} | 
[**get_events**](EventApi.md#get_events) | **GET** /event | 


# **get_event**
> Event get_event(x_ebay_c_marketplace_id, event_id)



This method retrieves the details for an eBay event. The result set contains detailed information associated with the specified event ID, such as applicable coupons, start and end dates, and event terms. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.event import Event
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
    api_instance = openapi_client.EventApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | A header used to specify the eBay marketplace ID.
    event_id = 'event_id_example' # str | The unique identifier for the eBay event.

    try:
        api_response = api_instance.get_event(x_ebay_c_marketplace_id, event_id)
        print("The response of EventApi->get_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventApi->get_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| A header used to specify the eBay marketplace ID. | 
 **event_id** | **str**| The unique identifier for the eBay event. | 

### Return type

[**Event**](Event.md)

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_events**
> EventSearchResponse get_events(x_ebay_c_marketplace_id, limit=limit, offset=offset)



This method returns paginated results containing all eBay events for the specified marketplace. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.event_search_response import EventSearchResponse
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
    api_instance = openapi_client.EventApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | A header used to specify the eBay marketplace ID.
    limit = 'limit_example' # str | The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100 (optional)
    offset = 'offset_example' # str | The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 (optional)

    try:
        api_response = api_instance.get_events(x_ebay_c_marketplace_id, limit=limit, offset=offset)
        print("The response of EventApi->get_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventApi->get_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| A header used to specify the eBay marketplace ID. | 
 **limit** | **str**| The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100 | [optional] 
 **offset** | **str**| The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 | [optional] 

### Return type

[**EventSearchResponse**](EventSearchResponse.md)

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


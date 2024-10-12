# openapi_client.PromotionsApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**price_offers**](PromotionsApi.md#price_offers) | **GET** /promotions/priceoffers/flights/ond/{origin}/{destination} | Price Offers


# **price_offers**
> str price_offers(origin, destination, departure_date, return_date, service=service)

Price Offers

Retrieve a best price offer given an origin and destination.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionsApi(api_client)
    origin = 'origin_example' # str | Departure city. 3-letter IATA city code
    destination = 'destination_example' # str | Destination city. 3-letter IATA city code
    departure_date = 'departure_date_example' # str | Departure date in local time (YYYY-MM-DD)
    return_date = 'return_date_example' # str | Return date in local time (YYYY-MM-DD)
    service = 'amadeusBestPrice' # str | Optional parameter. (optional) (default to 'amadeusBestPrice')

    try:
        # Price Offers
        api_response = api_instance.price_offers(origin, destination, departure_date, return_date, service=service)
        print("The response of PromotionsApi->price_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->price_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| Departure city. 3-letter IATA city code | 
 **destination** | **str**| Destination city. 3-letter IATA city code | 
 **departure_date** | **str**| Departure date in local time (YYYY-MM-DD) | 
 **return_date** | **str**| Return date in local time (YYYY-MM-DD) | 
 **service** | **str**| Optional parameter. | [optional] [default to &#39;amadeusBestPrice&#39;]

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


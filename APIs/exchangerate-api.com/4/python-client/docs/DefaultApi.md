# openapi_client.DefaultApi

All URIs are relative to *https://api.exchangerate-api.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**latest_base_currency_get**](DefaultApi.md#latest_base_currency_get) | **GET** /latest/{base_currency} | Returns latest exchange rates in parameter-supplied base currency.


# **latest_base_currency_get**
> LatestBaseCurrencyGet200Response latest_base_currency_get(base_currency)

Returns latest exchange rates in parameter-supplied base currency.

### Example


```python
import openapi_client
from openapi_client.models.latest_base_currency_get200_response import LatestBaseCurrencyGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.exchangerate-api.com/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.exchangerate-api.com/v4"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    base_currency = 'base_currency_example' # str | **Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies

    try:
        # Returns latest exchange rates in parameter-supplied base currency.
        api_response = api_instance.latest_base_currency_get(base_currency)
        print("The response of DefaultApi->latest_base_currency_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->latest_base_currency_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **base_currency** | **str**| **Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies | 

### Return type

[**LatestBaseCurrencyGet200Response**](LatestBaseCurrencyGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Currency code not supported |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


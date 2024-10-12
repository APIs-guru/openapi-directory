# openapi_client.CurrenciesApi

All URIs are relative to *http://api.mastercard.com/mcapi/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_currency_rate_data_using_get**](CurrenciesApi.md#get_currency_rate_data_using_get) | **GET** /settlement-currencies | getCurrencyRateData


# **get_currency_rate_data_using_get**
> SettlementCurrencyRequest get_currency_rate_data_using_get()

getCurrencyRateData

List of supported currencies.

### Example


```python
import openapi_client
from openapi_client.models.settlement_currency_request import SettlementCurrencyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.mastercard.com/mcapi/settlement/currencyrate
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.mastercard.com/mcapi/settlement/currencyrate"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)

    try:
        # getCurrencyRateData
        api_response = api_instance.get_currency_rate_data_using_get()
        print("The response of CurrenciesApi->get_currency_rate_data_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->get_currency_rate_data_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SettlementCurrencyRequest**](SettlementCurrencyRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.CurrencyRatesApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getcurrencyrate**](CurrencyRatesApi.md#getcurrencyrate) | **GET** /getcurrencyrate | Gets a foreign currency rate for one US Dollar


# **getcurrencyrate**
> Getcurrencyrate200Response getcurrencyrate(license, symbol)

Gets a foreign currency rate for one US Dollar

Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.

### Example


```python
import openapi_client
from openapi_client.models.getcurrencyrate200_response import Getcurrencyrate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.interzoid.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.interzoid.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrencyRatesApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    symbol = 'symbol_example' # str | Currency symbol to retrieve current rate for

    try:
        # Gets a foreign currency rate for one US Dollar
        api_response = api_instance.getcurrencyrate(license, symbol)
        print("The response of CurrencyRatesApi->getcurrencyrate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrencyRatesApi->getcurrencyrate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **symbol** | **str**| Currency symbol to retrieve current rate for | 

### Return type

[**Getcurrencyrate200Response**](Getcurrencyrate200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Currency rate data to one US Dollar |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | currency symbol not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


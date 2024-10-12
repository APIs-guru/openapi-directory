# openapi_client.LiveCurrencyRateConversionApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertcurrency**](LiveCurrencyRateConversionApi.md#convertcurrency) | **GET** /convertcurrency | Converts amount in one currency to that of another


# **convertcurrency**
> Convertcurrency200Response convertcurrency(license, var_from, to, amount)

Converts amount in one currency to that of another

Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.

### Example


```python
import openapi_client
from openapi_client.models.convertcurrency200_response import Convertcurrency200Response
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
    api_instance = openapi_client.LiveCurrencyRateConversionApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    var_from = 'var_from_example' # str | Currency symbol for the converted from amount
    to = 'to_example' # str | Currency symbol for the converted to amount
    amount = 'amount_example' # str | The amount of currency to be converted

    try:
        # Converts amount in one currency to that of another
        api_response = api_instance.convertcurrency(license, var_from, to, amount)
        print("The response of LiveCurrencyRateConversionApi->convertcurrency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveCurrencyRateConversionApi->convertcurrency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **var_from** | **str**| Currency symbol for the converted from amount | 
 **to** | **str**| Currency symbol for the converted to amount | 
 **amount** | **str**| The amount of currency to be converted | 

### Return type

[**Convertcurrency200Response**](Convertcurrency200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Currency rate data to one US DOllar |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | currency symbol not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


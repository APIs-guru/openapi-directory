# openapi_client.FinanceApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_currency**](FinanceApi.md#convert_currency) | **POST** /ConvertCurrency | Currency - Convert currency
[**format_currency**](FinanceApi.md#format_currency) | **POST** /FormatCurrency | Currency - Format currency
[**market_index**](FinanceApi.md#market_index) | **POST** /MarketIndex | Finance - Market index
[**stock_prices**](FinanceApi.md#stock_prices) | **POST** /StockPrices | Finance - Stock prices


# **convert_currency**
> OutputNumber convert_currency(currency_conversion=currency_conversion)

Currency - Convert currency

Calculate monetary value in a different currency

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_currency_conversion import InputCurrencyConversion
from openapi_client.models.output_number import OutputNumber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FinanceApi(api_client)
    currency_conversion = openapi_client.InputCurrencyConversion() # InputCurrencyConversion |  (optional)

    try:
        # Currency - Convert currency
        api_response = api_instance.convert_currency(currency_conversion=currency_conversion)
        print("The response of FinanceApi->convert_currency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FinanceApi->convert_currency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency_conversion** | [**InputCurrencyConversion**](InputCurrencyConversion.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **format_currency**
> OutputString format_currency(currency_format=currency_format)

Currency - Format currency

Apply currency symbol to a numeric value

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_currency_format import InputCurrencyFormat
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FinanceApi(api_client)
    currency_format = openapi_client.InputCurrencyFormat() # InputCurrencyFormat |  (optional)

    try:
        # Currency - Format currency
        api_response = api_instance.format_currency(currency_format=currency_format)
        print("The response of FinanceApi->format_currency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FinanceApi->format_currency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency_format** | [**InputCurrencyFormat**](InputCurrencyFormat.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **market_index**
> OutputMarketIndex market_index(market_index=market_index)

Finance - Market index

Get current and historical market index information

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_market_index import InputMarketIndex
from openapi_client.models.output_market_index import OutputMarketIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FinanceApi(api_client)
    market_index = openapi_client.InputMarketIndex() # InputMarketIndex |  (optional)

    try:
        # Finance - Market index
        api_response = api_instance.market_index(market_index=market_index)
        print("The response of FinanceApi->market_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FinanceApi->market_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market_index** | [**InputMarketIndex**](InputMarketIndex.md)|  | [optional] 

### Return type

[**OutputMarketIndex**](OutputMarketIndex.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stock_prices**
> OutputStockPrice stock_prices(stock_prices=stock_prices)

Finance - Stock prices

Get current and historical stock price information

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_stock_prices import InputStockPrices
from openapi_client.models.output_stock_price import OutputStockPrice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FinanceApi(api_client)
    stock_prices = openapi_client.InputStockPrices() # InputStockPrices |  (optional)

    try:
        # Finance - Stock prices
        api_response = api_instance.stock_prices(stock_prices=stock_prices)
        print("The response of FinanceApi->stock_prices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FinanceApi->stock_prices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stock_prices** | [**InputStockPrices**](InputStockPrices.md)|  | [optional] 

### Return type

[**OutputStockPrice**](OutputStockPrice.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


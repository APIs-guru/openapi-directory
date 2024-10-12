# openapi_client.StocksApi

All URIs are relative to *https://api.polygon.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_companies_get**](StocksApi.md#v1_companies_get) | **GET** /v1/companies | Available Companies
[**v1_historic_agg_size_symbol_date_get**](StocksApi.md#v1_historic_agg_size_symbol_date_get) | **GET** /v1/historic/agg/{size}/{symbol}/{date} | Historic Aggregates
[**v1_historic_quotes_symbol_date_get**](StocksApi.md#v1_historic_quotes_symbol_date_get) | **GET** /v1/historic/quotes/{symbol}/{date} | Historic Quotes
[**v1_historic_trades_symbol_date_get**](StocksApi.md#v1_historic_trades_symbol_date_get) | **GET** /v1/historic/trades/{symbol}/{date} | Historic Trades
[**v1_last_quote_stocks_symbol_get**](StocksApi.md#v1_last_quote_stocks_symbol_get) | **GET** /v1/last_quote/stocks/{symbol} | Last Quote for a Symbol
[**v1_last_stocks_symbol_get**](StocksApi.md#v1_last_stocks_symbol_get) | **GET** /v1/last/stocks/{symbol} | Last Trade for a Symbol


# **v1_companies_get**
> List[Company] v1_companies_get(sort=sort, perpage=perpage, page=page)

Available Companies

Get a list of the traded companies that polygon.io streams. Company includes some details about the company which we hope to add more to soon. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.company import Company
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    sort = 'sort_example' # str | Which field to sort by. For desc place a `-` in front of the field name. eg `?sort=-marketcap` (optional)
    perpage = 3.4 # float | How many items to be on each page during pagination (optional)
    page = 1.0 # float | Which page of results to return (optional) (default to 1.0)

    try:
        # Available Companies
        api_response = api_instance.v1_companies_get(sort=sort, perpage=perpage, page=page)
        print("The response of StocksApi->v1_companies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_companies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **str**| Which field to sort by. For desc place a &#x60;-&#x60; in front of the field name. eg &#x60;?sort&#x3D;-marketcap&#x60; | [optional] 
 **perpage** | **float**| How many items to be on each page during pagination | [optional] 
 **page** | **float**| Which page of results to return | [optional] [default to 1.0]

### Return type

[**List[Company]**](Company.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of companies |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_historic_agg_size_symbol_date_get**
> V1HistoricAggSizeSymbolDateGet200Response v1_historic_agg_size_symbol_date_get(size, symbol, var_date, offset=offset, limit=limit)

Historic Aggregates

Get historic aggregations for a symbol. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_historic_agg_size_symbol_date_get200_response import V1HistoricAggSizeSymbolDateGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    size = 'size_example' # str | Size of the aggregation. `second` or `minute`
    symbol = 'symbol_example' # str | Symbol of the company to retrieve
    var_date = '2013-10-20' # date | Date/Day of the historic ticks to retreive
    offset = 56 # int | Timestamp offset, used for pagination (optional)
    limit = 100 # int | Limit the size of response, max: 10000 (optional) (default to 100)

    try:
        # Historic Aggregates
        api_response = api_instance.v1_historic_agg_size_symbol_date_get(size, symbol, var_date, offset=offset, limit=limit)
        print("The response of StocksApi->v1_historic_agg_size_symbol_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_historic_agg_size_symbol_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **str**| Size of the aggregation. &#x60;second&#x60; or &#x60;minute&#x60; | 
 **symbol** | **str**| Symbol of the company to retrieve | 
 **var_date** | **date**| Date/Day of the historic ticks to retreive | 
 **offset** | **int**| Timestamp offset, used for pagination | [optional] 
 **limit** | **int**| Limit the size of response, max: 10000 | [optional] [default to 100]

### Return type

[**V1HistoricAggSizeSymbolDateGet200Response**](V1HistoricAggSizeSymbolDateGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of aggregates |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_historic_quotes_symbol_date_get**
> V1HistoricQuotesSymbolDateGet200Response v1_historic_quotes_symbol_date_get(symbol, var_date, offset=offset, limit=limit)

Historic Quotes

Get historic quotes for a symbol. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_historic_quotes_symbol_date_get200_response import V1HistoricQuotesSymbolDateGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    symbol = 'symbol_example' # str | Symbol of the company to retrieve
    var_date = '2013-10-20' # date | Date/Day of the historic ticks to retreive
    offset = 56 # int | Timestamp offset, used for pagination (optional)
    limit = 100 # int | Limit the size of response, max: 10000 (optional) (default to 100)

    try:
        # Historic Quotes
        api_response = api_instance.v1_historic_quotes_symbol_date_get(symbol, var_date, offset=offset, limit=limit)
        print("The response of StocksApi->v1_historic_quotes_symbol_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_historic_quotes_symbol_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Symbol of the company to retrieve | 
 **var_date** | **date**| Date/Day of the historic ticks to retreive | 
 **offset** | **int**| Timestamp offset, used for pagination | [optional] 
 **limit** | **int**| Limit the size of response, max: 10000 | [optional] [default to 100]

### Return type

[**V1HistoricQuotesSymbolDateGet200Response**](V1HistoricQuotesSymbolDateGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of quotes |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_historic_trades_symbol_date_get**
> V1HistoricTradesSymbolDateGet200Response v1_historic_trades_symbol_date_get(symbol, var_date, offset=offset, limit=limit)

Historic Trades

Get historic trades for a symbol. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_historic_trades_symbol_date_get200_response import V1HistoricTradesSymbolDateGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    symbol = 'symbol_example' # str | Symbol of the company to retrieve
    var_date = '2013-10-20' # date | Date/Day of the historic ticks to retreive
    offset = 56 # int | Timestamp offset, used for pagination (optional)
    limit = 100 # int | Limit the size of response, max: 10000 (optional) (default to 100)

    try:
        # Historic Trades
        api_response = api_instance.v1_historic_trades_symbol_date_get(symbol, var_date, offset=offset, limit=limit)
        print("The response of StocksApi->v1_historic_trades_symbol_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_historic_trades_symbol_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Symbol of the company to retrieve | 
 **var_date** | **date**| Date/Day of the historic ticks to retreive | 
 **offset** | **int**| Timestamp offset, used for pagination | [optional] 
 **limit** | **int**| Limit the size of response, max: 10000 | [optional] [default to 100]

### Return type

[**V1HistoricTradesSymbolDateGet200Response**](V1HistoricTradesSymbolDateGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of trades |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_last_quote_stocks_symbol_get**
> V1LastQuoteStocksSymbolGet200Response v1_last_quote_stocks_symbol_get(symbol)

Last Quote for a Symbol

Get the last quote tick for a given stock. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_last_quote_stocks_symbol_get200_response import V1LastQuoteStocksSymbolGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    symbol = 'symbol_example' # str | Symbol of the stock to get

    try:
        # Last Quote for a Symbol
        api_response = api_instance.v1_last_quote_stocks_symbol_get(symbol)
        print("The response of StocksApi->v1_last_quote_stocks_symbol_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_last_quote_stocks_symbol_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Symbol of the stock to get | 

### Return type

[**V1LastQuoteStocksSymbolGet200Response**](V1LastQuoteStocksSymbolGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Last quote tick for this stock |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_last_stocks_symbol_get**
> V1LastStocksSymbolGet200Response v1_last_stocks_symbol_get(symbol)

Last Trade for a Symbol

Get the last trade for a given stock. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_last_stocks_symbol_get200_response import V1LastStocksSymbolGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.polygon.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.polygon.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StocksApi(api_client)
    symbol = 'symbol_example' # str | Symbol of the stock to get

    try:
        # Last Trade for a Symbol
        api_response = api_instance.v1_last_stocks_symbol_get(symbol)
        print("The response of StocksApi->v1_last_stocks_symbol_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StocksApi->v1_last_stocks_symbol_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Symbol of the stock to get | 

### Return type

[**V1LastStocksSymbolGet200Response**](V1LastStocksSymbolGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Last trade for this stock |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


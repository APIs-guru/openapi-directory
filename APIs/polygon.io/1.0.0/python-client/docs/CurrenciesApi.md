# openapi_client.CurrenciesApi

All URIs are relative to *https://api.polygon.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_currencies_get**](CurrenciesApi.md#v1_currencies_get) | **GET** /v1/currencies | Available Currencies
[**v1_historic_forex_from_to_date_get**](CurrenciesApi.md#v1_historic_forex_from_to_date_get) | **GET** /v1/historic/forex/{from}/{to}/{date} | Historic Forex Ticks
[**v1_last_currencies_from_to_get**](CurrenciesApi.md#v1_last_currencies_from_to_get) | **GET** /v1/last/currencies/{from}/{to} | Last Trade for a Currency Pair
[**v1_last_quote_currencies_from_to_get**](CurrenciesApi.md#v1_last_quote_currencies_from_to_get) | **GET** /v1/last_quote/currencies/{from}/{to} | Last Quote for a Currency Pair


# **v1_currencies_get**
> List[str] v1_currencies_get()

Available Currencies

Get a list of the currencies that polygon.io streams. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
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
    api_instance = openapi_client.CurrenciesApi(api_client)

    try:
        # Available Currencies
        api_response = api_instance.v1_currencies_get()
        print("The response of CurrenciesApi->v1_currencies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->v1_currencies_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of currencies |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_historic_forex_from_to_date_get**
> V1HistoricForexFromToDateGet200Response v1_historic_forex_from_to_date_get(var_from, to, var_date, offset=offset, limit=limit)

Historic Forex Ticks

Get historic ticks for a currency pair. Example for **USD/JPY** the from would be **USD** and to would be **JPY**. The date formatted like **2017-6-22** 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_historic_forex_from_to_date_get200_response import V1HistoricForexFromToDateGet200Response
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
    api_instance = openapi_client.CurrenciesApi(api_client)
    var_from = 'var_from_example' # str | From Symbol of the currency pair
    to = 'to_example' # str | To Symbol of the currency pair
    var_date = '2013-10-20' # date | Date/Day of the historic ticks to retreive
    offset = 56 # int | Timestamp offset, used for pagination (optional)
    limit = 100 # int | Limit the size of response, max: 10000 (optional) (default to 100)

    try:
        # Historic Forex Ticks
        api_response = api_instance.v1_historic_forex_from_to_date_get(var_from, to, var_date, offset=offset, limit=limit)
        print("The response of CurrenciesApi->v1_historic_forex_from_to_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->v1_historic_forex_from_to_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| From Symbol of the currency pair | 
 **to** | **str**| To Symbol of the currency pair | 
 **var_date** | **date**| Date/Day of the historic ticks to retreive | 
 **offset** | **int**| Timestamp offset, used for pagination | [optional] 
 **limit** | **int**| Limit the size of response, max: 10000 | [optional] [default to 100]

### Return type

[**V1HistoricForexFromToDateGet200Response**](V1HistoricForexFromToDateGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of forex ticks |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_last_currencies_from_to_get**
> V1LastCurrenciesFromToGet200Response v1_last_currencies_from_to_get(var_from, to)

Last Trade for a Currency Pair

Get Last Trade Tick for a Currency Pair. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_last_currencies_from_to_get200_response import V1LastCurrenciesFromToGet200Response
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
    api_instance = openapi_client.CurrenciesApi(api_client)
    var_from = 'var_from_example' # str | From Symbol of the pair
    to = 'to_example' # str | To Symbol of the pair

    try:
        # Last Trade for a Currency Pair
        api_response = api_instance.v1_last_currencies_from_to_get(var_from, to)
        print("The response of CurrenciesApi->v1_last_currencies_from_to_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->v1_last_currencies_from_to_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| From Symbol of the pair | 
 **to** | **str**| To Symbol of the pair | 

### Return type

[**V1LastCurrenciesFromToGet200Response**](V1LastCurrenciesFromToGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Last tick for this currency pair |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_last_quote_currencies_from_to_get**
> V1LastQuoteCurrenciesFromToGet200Response v1_last_quote_currencies_from_to_get(var_from, to)

Last Quote for a Currency Pair

Get Last Quote Tick for a Currency Pair. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.v1_last_quote_currencies_from_to_get200_response import V1LastQuoteCurrenciesFromToGet200Response
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
    api_instance = openapi_client.CurrenciesApi(api_client)
    var_from = 'var_from_example' # str | From Symbol of the pair
    to = 'to_example' # str | To Symbol of the pair

    try:
        # Last Quote for a Currency Pair
        api_response = api_instance.v1_last_quote_currencies_from_to_get(var_from, to)
        print("The response of CurrenciesApi->v1_last_quote_currencies_from_to_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->v1_last_quote_currencies_from_to_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| From Symbol of the pair | 
 **to** | **str**| To Symbol of the pair | 

### Return type

[**V1LastQuoteCurrenciesFromToGet200Response**](V1LastQuoteCurrenciesFromToGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Last quote tick for this currency pair |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.EndpointsApi

All URIs are relative to *https://api.currencytick.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthcheck**](EndpointsApi.md#healthcheck) | **GET** /healthcheck | Healthcheck
[**historical_exchange_rate**](EndpointsApi.md#historical_exchange_rate) | **GET** /historical | Historical Exchange Rate
[**list_of_supported_currencies**](EndpointsApi.md#list_of_supported_currencies) | **GET** /supported_currencies | List of supported currencies
[**live_currency_exchange_rate**](EndpointsApi.md#live_currency_exchange_rate) | **GET** /live | Live currency exchange rate


# **healthcheck**
> Healthcheck200Response healthcheck()

Healthcheck

Check that the service is up. If everything is okay, you'll get a 200 OK response.  Otherwise, the request will fail with a 400 error, and a response listing the failed services.

### Example


```python
import openapi_client
from openapi_client.models.healthcheck200_response import Healthcheck200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.currencytick.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.currencytick.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)

    try:
        # Healthcheck
        api_response = api_instance.healthcheck()
        print("The response of EndpointsApi->healthcheck:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->healthcheck: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Healthcheck200Response**](Healthcheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Service is unhealthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **historical_exchange_rate**
> HistoricalExchangeRate200Response historical_exchange_rate(apikey, base, target, var_date)

Historical Exchange Rate

Get the exchange rate on a specific date

### Example

* Api Key Authentication (default):

```python
import openapi_client
from openapi_client.models.historical_exchange_rate200_response import HistoricalExchangeRate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.currencytick.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.currencytick.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: default
configuration.api_key['default'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['default'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    apikey = 'YOUR_API_KEY' # str | Authentication key.
    base = 'USD' # str | The source currency.
    target = 'EUR' # str | The target currency.
    var_date = '2023-04-18' # str | The date to get the exchange rate.

    try:
        # Historical Exchange Rate
        api_response = api_instance.historical_exchange_rate(apikey, base, target, var_date)
        print("The response of EndpointsApi->historical_exchange_rate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->historical_exchange_rate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **str**| Authentication key. | 
 **base** | **str**| The source currency. | 
 **target** | **str**| The target currency. | 
 **var_date** | **str**| The date to get the exchange rate. | 

### Return type

[**HistoricalExchangeRate200Response**](HistoricalExchangeRate200Response.md)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_of_supported_currencies**
> str list_of_supported_currencies(apikey)

List of supported currencies

Get the list of supported currencies, currently 220 currencies are supported.

### Example

* Api Key Authentication (default):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.currencytick.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.currencytick.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: default
configuration.api_key['default'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['default'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    apikey = 'YOUR_API_KEY' # str | Authentication key.

    try:
        # List of supported currencies
        api_response = api_instance.list_of_supported_currencies(apikey)
        print("The response of EndpointsApi->list_of_supported_currencies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->list_of_supported_currencies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **str**| Authentication key. | 

### Return type

**str**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_currency_exchange_rate**
> HistoricalExchangeRate200Response live_currency_exchange_rate(apikey, base, target, amount=amount)

Live currency exchange rate

Get the exchange rate between two currencies.

### Example

* Api Key Authentication (default):

```python
import openapi_client
from openapi_client.models.historical_exchange_rate200_response import HistoricalExchangeRate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.currencytick.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.currencytick.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: default
configuration.api_key['default'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['default'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    apikey = 'YOUR_API_KEY' # str | Authentication key.
    base = 'USD' # str | The source currency.
    target = 'EUR' # str | The target currency.
    amount = 1 # float | optional The amount to convert. (optional)

    try:
        # Live currency exchange rate
        api_response = api_instance.live_currency_exchange_rate(apikey, base, target, amount=amount)
        print("The response of EndpointsApi->live_currency_exchange_rate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->live_currency_exchange_rate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **str**| Authentication key. | 
 **base** | **str**| The source currency. | 
 **target** | **str**| The target currency. | 
 **amount** | **float**| optional The amount to convert. | [optional] 

### Return type

[**HistoricalExchangeRate200Response**](HistoricalExchangeRate200Response.md)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.CurrenciesApi

All URIs are relative to *https://sonar.trading/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_get**](CurrenciesApi.md#convert_get) | **GET** /convert | Convert a currency amount to multiple other currencies
[**country_currencies_get**](CurrenciesApi.md#country_currencies_get) | **GET** /country/currencies | Return a list of all currencies of countries, available via service
[**digital_currencies_get**](CurrenciesApi.md#digital_currencies_get) | **GET** /digital/currencies | Return a list of all digital currencies, available via service
[**history_get**](CurrenciesApi.md#history_get) | **GET** /history | Return a historic rate for a currencies


# **convert_get**
> convert_get(var_from, to, amount=amount, decimal_places=decimal_places)

Convert a currency amount to multiple other currencies

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sonar.trading/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sonar.trading/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    var_from = 'var_from_example' # str | Currency you want to convert. For example, EUR
    to = 'to_example' # str | Comma separated list of currencies codes. For example, USD
    amount = 'amount_example' # str | This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed. (optional)
    decimal_places = 'decimal_places_example' # str | This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 12 is assumed. (optional)

    try:
        # Convert a currency amount to multiple other currencies
        api_instance.convert_get(var_from, to, amount=amount, decimal_places=decimal_places)
    except Exception as e:
        print("Exception when calling CurrenciesApi->convert_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| Currency you want to convert. For example, EUR | 
 **to** | **str**| Comma separated list of currencies codes. For example, USD | 
 **amount** | **str**| This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed. | [optional] 
 **decimal_places** | **str**| This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 12 is assumed. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Command completed successfully |  -  |
**422** | Parameter value syntax error / Parameter value range error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **country_currencies_get**
> country_currencies_get(language=language)

Return a list of all currencies of countries, available via service

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sonar.trading/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sonar.trading/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    language = 'language_example' # str | Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language. (optional)

    try:
        # Return a list of all currencies of countries, available via service
        api_instance.country_currencies_get(language=language)
    except Exception as e:
        print("Exception when calling CurrenciesApi->country_currencies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Command completed successfully |  -  |
**422** | Parameter value syntax error / Parameter value range error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_currencies_get**
> digital_currencies_get(language=language)

Return a list of all digital currencies, available via service

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sonar.trading/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sonar.trading/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    language = 'language_example' # str | Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language. (optional)

    try:
        # Return a list of all digital currencies, available via service
        api_instance.digital_currencies_get(language=language)
    except Exception as e:
        print("Exception when calling CurrenciesApi->digital_currencies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Command completed successfully |  -  |
**422** | Parameter value syntax error / Parameter value range error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_get**
> history_get(var_from, to, var_date, amount=amount, decimal_places=decimal_places)

Return a historic rate for a currencies

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sonar.trading/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sonar.trading/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    var_from = 'var_from_example' # str | Currency you want to convert. For example, EUR
    to = 'to_example' # str | Comma separated list of currencies codes. For example, USD
    var_date = 'var_date_example' # str | UTC date should be in the form of YYYY-MM-DD, for example, 2018-06-20. Data available from 2018-06-19 only.
    amount = 'amount_example' # str | This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed. (optional)
    decimal_places = 'decimal_places_example' # str | This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 4 is assumed. (optional)

    try:
        # Return a historic rate for a currencies
        api_instance.history_get(var_from, to, var_date, amount=amount, decimal_places=decimal_places)
    except Exception as e:
        print("Exception when calling CurrenciesApi->history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| Currency you want to convert. For example, EUR | 
 **to** | **str**| Comma separated list of currencies codes. For example, USD | 
 **var_date** | **str**| UTC date should be in the form of YYYY-MM-DD, for example, 2018-06-20. Data available from 2018-06-19 only. | 
 **amount** | **str**| This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed. | [optional] 
 **decimal_places** | **str**| This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 4 is assumed. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Command completed successfully |  -  |
**422** | Parameter value syntax error / Parameter value range error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


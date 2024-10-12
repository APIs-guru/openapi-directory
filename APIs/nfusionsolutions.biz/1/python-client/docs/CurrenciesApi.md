# openapi_client.CurrenciesApi

All URIs are relative to *https://api.nfusionsolutions.biz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencies_history_get**](CurrenciesApi.md#currencies_history_get) | **GET** /api/v1/Currencies/history | Get historical prices for requested currency pairs
[**currencies_rate_get**](CurrenciesApi.md#currencies_rate_get) | **GET** /api/v1/Currencies/rate | Get latest mid rate for requested currency pairs
[**currencies_summary_get**](CurrenciesApi.md#currencies_summary_get) | **GET** /api/v1/Currencies/summary | Get latest Summary for requested currency pairs
[**currencies_supported_currencies_history_get**](CurrenciesApi.md#currencies_supported_currencies_history_get) | **GET** /api/v1/Currencies/history/supported | Get list of currency pairs supported by the history endpoint
[**currencies_supported_currencies_rate_get**](CurrenciesApi.md#currencies_supported_currencies_rate_get) | **GET** /api/v1/Currencies/rate/supported | Get list of currencies supported by the rate endpoint
[**currencies_supported_currencies_summary_get**](CurrenciesApi.md#currencies_supported_currencies_summary_get) | **GET** /api/v1/Currencies/summary/supported | Get list of currency pairs supported by the Summary endpoint


# **currencies_history_get**
> List[IntervalCollectionResponse] currencies_history_get(pairs, start, end=end, interval=interval, format=format)

Get historical prices for requested currency pairs

Historical OHLC data for the specified period and interval size    The combination of the interval parameter and start and end dates can result in results  being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.models.interval_collection_response import IntervalCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    pairs = 'pairs_example' # str | comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
    start = '2013-10-20T19:20:30+01:00' # datetime | start date of time period. format is <i>yyyy-mm-dd</i>
    end = '2013-10-20T19:20:30+01:00' # datetime | end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date. (optional)
    interval = 'interval_example' # str | aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y=year,  m=month,  w=week,  d=day,  h=hour,  mi=minute    For example, a yearly interval can be specified as \"y\" and 6 month interval as \"6m\".     If not specified the interval parameter default is 1 Day. (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get historical prices for requested currency pairs
        api_response = api_instance.currencies_history_get(pairs, start, end=end, interval=interval, format=format)
        print("The response of CurrenciesApi->currencies_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairs** | **str**| comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD | 
 **start** | **datetime**| start date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt; | 
 **end** | **datetime**| end date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt;. Default is current date. | [optional] 
 **interval** | **str**| aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y&#x3D;year,  m&#x3D;month,  w&#x3D;week,  d&#x3D;day,  h&#x3D;hour,  mi&#x3D;minute    For example, a yearly interval can be specified as \&quot;y\&quot; and 6 month interval as \&quot;6m\&quot;.     If not specified the interval parameter default is 1 Day. | [optional] 
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

[**List[IntervalCollectionResponse]**](IntervalCollectionResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_rate_get**
> List[RateResponse] currencies_rate_get(pairs, format=format)

Get latest mid rate for requested currency pairs

Current Mid Rate

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.models.rate_response import RateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    pairs = 'pairs_example' # str | comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get latest mid rate for requested currency pairs
        api_response = api_instance.currencies_rate_get(pairs, format=format)
        print("The response of CurrenciesApi->currencies_rate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_rate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairs** | **str**| comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD | 
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

[**List[RateResponse]**](RateResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_summary_get**
> List[SummaryResponse] currencies_summary_get(pairs, format=format)

Get latest Summary for requested currency pairs

Current and daily summary information combined into a single quote

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.models.summary_response import SummaryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    pairs = 'pairs_example' # str | comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get latest Summary for requested currency pairs
        api_response = api_instance.currencies_summary_get(pairs, format=format)
        print("The response of CurrenciesApi->currencies_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairs** | **str**| comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD | 
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

[**List[SummaryResponse]**](SummaryResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_supported_currencies_history_get**
> List[str] currencies_supported_currencies_history_get(format=format)

Get list of currency pairs supported by the history endpoint

Only the currency pairs in the direction noted can be used with the history endpoint.  For example: USD/CAD is not the same as CAD/USD

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of currency pairs supported by the history endpoint
        api_response = api_instance.currencies_supported_currencies_history_get(format=format)
        print("The response of CurrenciesApi->currencies_supported_currencies_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_supported_currencies_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

**List[str]**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_supported_currencies_rate_get**
> List[str] currencies_supported_currencies_rate_get(format=format)

Get list of currencies supported by the rate endpoint

Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.  For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of currencies supported by the rate endpoint
        api_response = api_instance.currencies_supported_currencies_rate_get(format=format)
        print("The response of CurrenciesApi->currencies_supported_currencies_rate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_supported_currencies_rate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

**List[str]**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_supported_currencies_summary_get**
> List[str] currencies_supported_currencies_summary_get(format=format)

Get list of currency pairs supported by the Summary endpoint

Only the currency pairs in the direction noted can be used with the Summary endpoint.  For example: USD/CAD is not the same as CAD/USD

### Example

* Api Key Authentication (token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nfusionsolutions.biz
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nfusionsolutions.biz"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: token
configuration.api_key['token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['token'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CurrenciesApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of currency pairs supported by the Summary endpoint
        api_response = api_instance.currencies_supported_currencies_summary_get(format=format)
        print("The response of CurrenciesApi->currencies_supported_currencies_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_supported_currencies_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 

### Return type

**List[str]**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


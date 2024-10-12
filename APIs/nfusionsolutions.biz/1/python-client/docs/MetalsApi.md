# openapi_client.MetalsApi

All URIs are relative to *https://api.nfusionsolutions.biz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metals_benchmark_history_get**](MetalsApi.md#metals_benchmark_history_get) | **GET** /api/v1/Metals/benchmark/history | Get historical benchmark prices for requested metals
[**metals_benchmark_summary_get**](MetalsApi.md#metals_benchmark_summary_get) | **GET** /api/v1/Metals/benchmark/summary | Get latest Benchmark prices for requested metals
[**metals_benchmark_supported_metals_get**](MetalsApi.md#metals_benchmark_supported_metals_get) | **GET** /api/v1/Metals/benchmark/supported | Get list of symbols supported by the benchmark endpoints
[**metals_spot_annual_historical_performance_get**](MetalsApi.md#metals_spot_annual_historical_performance_get) | **GET** /api/v1/Metals/spot/performance/annual | Get Historical Annual Performance for requested metals
[**metals_spot_historical_performance_get**](MetalsApi.md#metals_spot_historical_performance_get) | **GET** /api/v1/Metals/spot/performance | Get Historical Performance for requested metals
[**metals_spot_history_get**](MetalsApi.md#metals_spot_history_get) | **GET** /api/v1/Metals/spot/history | Get historical Spot prices for requested metals
[**metals_spot_ratio_history_get**](MetalsApi.md#metals_spot_ratio_history_get) | **GET** /api/v1/Metals/spot/ratio/history | Get historical Spot Ratio prices for requested metals
[**metals_spot_ratio_summary_get**](MetalsApi.md#metals_spot_ratio_summary_get) | **GET** /api/v1/Metals/spot/ratio/summary | Get latest Spot Summary for requested metal ratios
[**metals_spot_summary_get**](MetalsApi.md#metals_spot_summary_get) | **GET** /api/v1/Metals/spot/summary | Get latest Spot Summary for requested metals
[**metals_spot_supported_metals_get**](MetalsApi.md#metals_spot_supported_metals_get) | **GET** /api/v1/Metals/spot/supported | Get list of symbols supported by the spot endpoints
[**metals_supported_currencies_metals_get**](MetalsApi.md#metals_supported_currencies_metals_get) | **GET** /api/v1/Metals/supported/currency | Get list of currencies supported by metals endpoints for currency conversion


# **metals_benchmark_history_get**
> List[IntervalCollectionResponse] metals_benchmark_history_get(metals, start, end=end, interval=interval, historicalfx=historicalfx, currency=currency, unitofmeasure=unitofmeasure, format=format)

Get historical benchmark prices for requested metals

Historical OHLC data for the specified period and interval size    The combination of the interval parameter and start and end dates can result in results  being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.    The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    start = '2013-10-20T19:20:30+01:00' # datetime | start date of time period. format is <i>yyyy-mm-dd</i>
    end = '2013-10-20T19:20:30+01:00' # datetime | end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date. (optional)
    interval = 'interval_example' # str | aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y=year,  m=month,  w=week,  d=day,  h=hour,  mi=minute    For example, a yearly interval can be specified as \"y\" and 6 month interval as \"6m\".     If not specified the interval parameter default is 1 Day. (optional)
    historicalfx = True # bool | if true use historical currency rates otherwise current currency rates. Defaults to true. (optional)
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get historical benchmark prices for requested metals
        api_response = api_instance.metals_benchmark_history_get(metals, start, end=end, interval=interval, historicalfx=historicalfx, currency=currency, unitofmeasure=unitofmeasure, format=format)
        print("The response of MetalsApi->metals_benchmark_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_benchmark_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **start** | **datetime**| start date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt; | 
 **end** | **datetime**| end date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt;. Default is current date. | [optional] 
 **interval** | **str**| aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y&#x3D;year,  m&#x3D;month,  w&#x3D;week,  d&#x3D;day,  h&#x3D;hour,  mi&#x3D;minute    For example, a yearly interval can be specified as \&quot;y\&quot; and 6 month interval as \&quot;6m\&quot;.     If not specified the interval parameter default is 1 Day. | [optional] 
 **historicalfx** | **bool**| if true use historical currency rates otherwise current currency rates. Defaults to true. | [optional] 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
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

# **metals_benchmark_summary_get**
> List[SummaryResponse] metals_benchmark_summary_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)

Get latest Benchmark prices for requested metals

Benchmark price information

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get latest Benchmark prices for requested metals
        api_response = api_instance.metals_benchmark_summary_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)
        print("The response of MetalsApi->metals_benchmark_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_benchmark_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
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

# **metals_benchmark_supported_metals_get**
> List[str] metals_benchmark_supported_metals_get(format=format)

Get list of symbols supported by the benchmark endpoints



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
    api_instance = openapi_client.MetalsApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of symbols supported by the benchmark endpoints
        api_response = api_instance.metals_benchmark_supported_metals_get(format=format)
        print("The response of MetalsApi->metals_benchmark_supported_metals_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_benchmark_supported_metals_get: %s\n" % e)
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

# **metals_spot_annual_historical_performance_get**
> List[IntervalCollectionResponse] metals_spot_annual_historical_performance_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format, years=years)

Get Historical Annual Performance for requested metals

Annual Historical Performance information

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)
    years = 56 # int | Number of years of history to return. Defaults to 10. (optional)

    try:
        # Get Historical Annual Performance for requested metals
        api_response = api_instance.metals_spot_annual_historical_performance_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format, years=years)
        print("The response of MetalsApi->metals_spot_annual_historical_performance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_annual_historical_performance_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
 **format** | **str**| to override content negotiation specify a value of json or xml | [optional] 
 **years** | **int**| Number of years of history to return. Defaults to 10. | [optional] 

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

# **metals_spot_historical_performance_get**
> List[IntervalCollectionResponse] metals_spot_historical_performance_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)

Get Historical Performance for requested metals

Historical Performance information

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get Historical Performance for requested metals
        api_response = api_instance.metals_spot_historical_performance_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)
        print("The response of MetalsApi->metals_spot_historical_performance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_historical_performance_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
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

# **metals_spot_history_get**
> List[IntervalCollectionResponse] metals_spot_history_get(metals, start, end=end, interval=interval, historicalfx=historicalfx, currency=currency, unitofmeasure=unitofmeasure, format=format)

Get historical Spot prices for requested metals

Historical OHLC data for the specified period and interval size    The combination of the interval parameter and start and end dates can result in results  being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.    The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    start = '2013-10-20T19:20:30+01:00' # datetime | start date of time period. format is <i>yyyy-mm-dd</i>
    end = '2013-10-20T19:20:30+01:00' # datetime | end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date. (optional)
    interval = 'interval_example' # str | aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y=year,  m=month,  w=week,  d=day,  h=hour,  mi=minute    For example, a yearly interval can be specified as \"y\" and 6 month interval as \"6m\".     If not specified the interval parameter default is 1 Day. (optional)
    historicalfx = True # bool | if true use historical currency rates otherwise current currency rates. Defaults to true. (optional)
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get historical Spot prices for requested metals
        api_response = api_instance.metals_spot_history_get(metals, start, end=end, interval=interval, historicalfx=historicalfx, currency=currency, unitofmeasure=unitofmeasure, format=format)
        print("The response of MetalsApi->metals_spot_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **start** | **datetime**| start date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt; | 
 **end** | **datetime**| end date of time period. format is &lt;i&gt;yyyy-mm-dd&lt;/i&gt;. Default is current date. | [optional] 
 **interval** | **str**| aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y&#x3D;year,  m&#x3D;month,  w&#x3D;week,  d&#x3D;day,  h&#x3D;hour,  mi&#x3D;minute    For example, a yearly interval can be specified as \&quot;y\&quot; and 6 month interval as \&quot;6m\&quot;.     If not specified the interval parameter default is 1 Day. | [optional] 
 **historicalfx** | **bool**| if true use historical currency rates otherwise current currency rates. Defaults to true. | [optional] 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
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

# **metals_spot_ratio_history_get**
> List[IntervalCollectionResponse] metals_spot_ratio_history_get(pairs, start, end=end, interval=interval, format=format)

Get historical Spot Ratio prices for requested metals

Historical data for the specified period and interval size    The combination of the interval parameter and start and end dates can result in results  being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

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
    api_instance = openapi_client.MetalsApi(api_client)
    pairs = 'pairs_example' # str | comma separated list of metals
    start = '2013-10-20T19:20:30+01:00' # datetime | start date of time period. format is <i>yyyy-mm-dd</i>
    end = '2013-10-20T19:20:30+01:00' # datetime | end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date. (optional)
    interval = 'interval_example' # str | aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),   followed by a type string which must be one of the following values:  y=year,  m=month,  w=week,  d=day,  h=hour,  mi=minute    For example, a yearly interval can be specified as \"y\" and 6 month interval as \"6m\".     If not specified the interval parameter default is 1 Day. (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get historical Spot Ratio prices for requested metals
        api_response = api_instance.metals_spot_ratio_history_get(pairs, start, end=end, interval=interval, format=format)
        print("The response of MetalsApi->metals_spot_ratio_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_ratio_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairs** | **str**| comma separated list of metals | 
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

# **metals_spot_ratio_summary_get**
> List[SummaryResponse] metals_spot_ratio_summary_get(pairs, format=format)

Get latest Spot Summary for requested metal ratios

Ratios between prices of two metals

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
    api_instance = openapi_client.MetalsApi(api_client)
    pairs = 'pairs_example' # str | comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get latest Spot Summary for requested metal ratios
        api_response = api_instance.metals_spot_ratio_summary_get(pairs, format=format)
        print("The response of MetalsApi->metals_spot_ratio_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_ratio_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairs** | **str**| comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium | 
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

# **metals_spot_summary_get**
> List[SummaryResponse] metals_spot_summary_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)

Get latest Spot Summary for requested metals

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
    api_instance = openapi_client.MetalsApi(api_client)
    metals = 'metals_example' # str | comma separated list of metals
    currency = 'currency_example' # str | comma separated list of conversion currencies, defaults to USD (optional)
    unitofmeasure = 'unitofmeasure_example' # str | unit of meaure, defaults to troy ounces. allowed values are:  mg=milligram  g=gram  kg=kilogram  gr=grain  oz=ounce  toz=troy ounce  ct=carat  dwt=pennyweight (optional)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get latest Spot Summary for requested metals
        api_response = api_instance.metals_spot_summary_get(metals, currency=currency, unitofmeasure=unitofmeasure, format=format)
        print("The response of MetalsApi->metals_spot_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metals** | **str**| comma separated list of metals | 
 **currency** | **str**| comma separated list of conversion currencies, defaults to USD | [optional] 
 **unitofmeasure** | **str**| unit of meaure, defaults to troy ounces. allowed values are:  mg&#x3D;milligram  g&#x3D;gram  kg&#x3D;kilogram  gr&#x3D;grain  oz&#x3D;ounce  toz&#x3D;troy ounce  ct&#x3D;carat  dwt&#x3D;pennyweight | [optional] 
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

# **metals_spot_supported_metals_get**
> List[str] metals_spot_supported_metals_get(format=format)

Get list of symbols supported by the spot endpoints



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
    api_instance = openapi_client.MetalsApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of symbols supported by the spot endpoints
        api_response = api_instance.metals_spot_supported_metals_get(format=format)
        print("The response of MetalsApi->metals_spot_supported_metals_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_spot_supported_metals_get: %s\n" % e)
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

# **metals_supported_currencies_metals_get**
> List[str] metals_supported_currencies_metals_get(format=format)

Get list of currencies supported by metals endpoints for currency conversion



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
    api_instance = openapi_client.MetalsApi(api_client)
    format = 'format_example' # str | to override content negotiation specify a value of json or xml (optional)

    try:
        # Get list of currencies supported by metals endpoints for currency conversion
        api_response = api_instance.metals_supported_currencies_metals_get(format=format)
        print("The response of MetalsApi->metals_supported_currencies_metals_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetalsApi->metals_supported_currencies_metals_get: %s\n" % e)
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


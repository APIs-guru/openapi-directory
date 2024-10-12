# openapi_client.240HourHourlyForecastApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forecast_hourlycity_idcity_id_get**](240HourHourlyForecastApi.md#forecast_hourlycity_idcity_id_get) | **GET** /forecast/hourly?city_id&#x3D;{city_id} | Returns an hourly forecast - Given a City ID.
[**forecast_hourlycitycitycountrycountry_get**](240HourHourlyForecastApi.md#forecast_hourlycitycitycountrycountry_get) | **GET** /forecast/hourly?city&#x3D;{city}&amp;country&#x3D;{country} | Returns an hourly forecast - Given City and/or State, Country.
[**forecast_hourlylatlatlonlon_get**](240HourHourlyForecastApi.md#forecast_hourlylatlatlonlon_get) | **GET** /forecast/hourly?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns an hourly forecast - Given a lat/lon.
[**forecast_hourlypostal_codepostal_code_get**](240HourHourlyForecastApi.md#forecast_hourlypostal_codepostal_code_get) | **GET** /forecast/hourly?postal_code&#x3D;{postal_code} | Returns an hourly forecast - Given a Postal Code.


# **forecast_hourlycity_idcity_id_get**
> ForecastHourly forecast_hourlycity_idcity_id_get(city_id, key, units=units, lang=lang, param_callback=param_callback, hours=hours)

Returns an hourly forecast - Given a City ID.

 Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.  

### Example


```python
import openapi_client
from openapi_client.models.forecast_hourly import ForecastHourly
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.weatherbit.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.weatherbit.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.240HourHourlyForecastApi(api_client)
    city_id = 56 # int | City ID. Example: 4487042
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)
    hours = 56 # int | Number of hours to return. (optional)

    try:
        # Returns an hourly forecast - Given a City ID.
        api_response = api_instance.forecast_hourlycity_idcity_id_get(city_id, key, units=units, lang=lang, param_callback=param_callback, hours=hours)
        print("The response of 240HourHourlyForecastApi->forecast_hourlycity_idcity_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 240HourHourlyForecastApi->forecast_hourlycity_idcity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city_id** | **int**| City ID. Example: 4487042 | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 
 **hours** | **int**| Number of hours to return. | [optional] 

### Return type

[**ForecastHourly**](ForecastHourly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A forecast object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_hourlycitycitycountrycountry_get**
> ForecastHourly forecast_hourlycitycitycountrycountry_get(city, country, key, state=state, units=units, lang=lang, param_callback=param_callback, hours=hours)

Returns an hourly forecast - Given City and/or State, Country.

 Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. 

### Example


```python
import openapi_client
from openapi_client.models.forecast_hourly import ForecastHourly
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.weatherbit.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.weatherbit.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.240HourHourlyForecastApi(api_client)
    city = 'city_example' # str | City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
    country = 'country_example' # str | Country Code (2 letter).
    key = 'key_example' # str | Your registered API key.
    state = 'state_example' # str | Full name of state. (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)
    hours = 56 # int | Number of hours to return. (optional)

    try:
        # Returns an hourly forecast - Given City and/or State, Country.
        api_response = api_instance.forecast_hourlycitycitycountrycountry_get(city, country, key, state=state, units=units, lang=lang, param_callback=param_callback, hours=hours)
        print("The response of 240HourHourlyForecastApi->forecast_hourlycitycitycountrycountry_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 240HourHourlyForecastApi->forecast_hourlycitycitycountrycountry_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **str**| City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR | 
 **country** | **str**| Country Code (2 letter). | 
 **key** | **str**| Your registered API key. | 
 **state** | **str**| Full name of state. | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 
 **hours** | **int**| Number of hours to return. | [optional] 

### Return type

[**ForecastHourly**](ForecastHourly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A forecast object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_hourlylatlatlonlon_get**
> ForecastHourly forecast_hourlylatlatlonlon_get(lat, lon, key, units=units, lang=lang, param_callback=param_callback, hours=hours)

Returns an hourly forecast - Given a lat/lon.

Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.  

### Example


```python
import openapi_client
from openapi_client.models.forecast_hourly import ForecastHourly
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.weatherbit.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.weatherbit.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.240HourHourlyForecastApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)
    hours = 56 # int | Number of hours to return. (optional)

    try:
        # Returns an hourly forecast - Given a lat/lon.
        api_response = api_instance.forecast_hourlylatlatlonlon_get(lat, lon, key, units=units, lang=lang, param_callback=param_callback, hours=hours)
        print("The response of 240HourHourlyForecastApi->forecast_hourlylatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 240HourHourlyForecastApi->forecast_hourlylatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 
 **hours** | **int**| Number of hours to return. | [optional] 

### Return type

[**ForecastHourly**](ForecastHourly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A forecast object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_hourlypostal_codepostal_code_get**
> ForecastHourly forecast_hourlypostal_codepostal_code_get(postal_code, key, country=country, units=units, lang=lang, param_callback=param_callback, hours=hours)

Returns an hourly forecast - Given a Postal Code.

 Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.  

### Example


```python
import openapi_client
from openapi_client.models.forecast_hourly import ForecastHourly
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.weatherbit.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.weatherbit.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.240HourHourlyForecastApi(api_client)
    postal_code = 56 # int | Postal Code. Example: 28546
    key = 'key_example' # str | Your registered API key.
    country = 'country_example' # str | Country Code (2 letter). (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)
    hours = 56 # int | Number of hours to return. (optional)

    try:
        # Returns an hourly forecast - Given a Postal Code.
        api_response = api_instance.forecast_hourlypostal_codepostal_code_get(postal_code, key, country=country, units=units, lang=lang, param_callback=param_callback, hours=hours)
        print("The response of 240HourHourlyForecastApi->forecast_hourlypostal_codepostal_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 240HourHourlyForecastApi->forecast_hourlypostal_codepostal_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **int**| Postal Code. Example: 28546 | 
 **key** | **str**| Your registered API key. | 
 **country** | **str**| Country Code (2 letter). | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 
 **hours** | **int**| Number of hours to return. | [optional] 

### Return type

[**ForecastHourly**](ForecastHourly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A forecast object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


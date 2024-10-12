# openapi_client.DailyHistoricalWeatherDataApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history_dailycity_idcity_id_get**](DailyHistoricalWeatherDataApi.md#history_dailycity_idcity_id_get) | **GET** /history/daily?city_id&#x3D;{city_id} | Returns Historical Observations - Given a City ID
[**history_dailycitycitycountrycountry_get**](DailyHistoricalWeatherDataApi.md#history_dailycitycitycountrycountry_get) | **GET** /history/daily?city&#x3D;{city}&amp;country&#x3D;{country} | Returns Historical Observations - Given City and/or State, Country.
[**history_dailylatlatlonlon_get**](DailyHistoricalWeatherDataApi.md#history_dailylatlatlonlon_get) | **GET** /history/daily?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns Historical Observations - Given a lat/lon.
[**history_dailypostal_codepostal_code_get**](DailyHistoricalWeatherDataApi.md#history_dailypostal_codepostal_code_get) | **GET** /history/daily?postal_code&#x3D;{postal_code} | Returns Historical Observations - Given a Postal Code
[**history_dailystationstation_get**](DailyHistoricalWeatherDataApi.md#history_dailystationstation_get) | **GET** /history/daily?station&#x3D;{station} | Returns Historical Observations - Given a station ID.


# **history_dailycity_idcity_id_get**
> HistoryDay history_dailycity_idcity_id_get(city_id, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)

Returns Historical Observations - Given a City ID

Returns Historical Observations - Given a City ID. **(LIMIT 1 year per request)**

### Example


```python
import openapi_client
from openapi_client.models.history_day import HistoryDay
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
    api_instance = openapi_client.DailyHistoricalWeatherDataApi(api_client)
    city_id = 'city_id_example' # str | City ID. Example: 4487042
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Historical Observations - Given a City ID
        api_response = api_instance.history_dailycity_idcity_id_get(city_id, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)
        print("The response of DailyHistoricalWeatherDataApi->history_dailycity_idcity_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DailyHistoricalWeatherDataApi->history_dailycity_idcity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city_id** | **str**| City ID. Example: 4487042 | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH) | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH) | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**HistoryDay**](HistoryDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Historical Day Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_dailycitycitycountrycountry_get**
> HistoryDay history_dailycitycitycountrycountry_get(city, country, start_date, end_date, key, state=state, units=units, lang=lang, param_callback=param_callback)

Returns Historical Observations - Given City and/or State, Country.

Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 year per request)**

### Example


```python
import openapi_client
from openapi_client.models.history_day import HistoryDay
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
    api_instance = openapi_client.DailyHistoricalWeatherDataApi(api_client)
    city = 'city_example' # str | City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
    country = 'country_example' # str | Country Code (2 letter).
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    key = 'key_example' # str | Your registered API key.
    state = 'state_example' # str | Full name of state. (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Historical Observations - Given City and/or State, Country.
        api_response = api_instance.history_dailycitycitycountrycountry_get(city, country, start_date, end_date, key, state=state, units=units, lang=lang, param_callback=param_callback)
        print("The response of DailyHistoricalWeatherDataApi->history_dailycitycitycountrycountry_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DailyHistoricalWeatherDataApi->history_dailycitycitycountrycountry_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **str**| City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR | 
 **country** | **str**| Country Code (2 letter). | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **key** | **str**| Your registered API key. | 
 **state** | **str**| Full name of state. | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**HistoryDay**](HistoryDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Historical Day Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_dailylatlatlonlon_get**
> HistoryDay history_dailylatlatlonlon_get(lat, lon, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)

Returns Historical Observations - Given a lat/lon.

Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 year per request)**

### Example


```python
import openapi_client
from openapi_client.models.history_day import HistoryDay
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
    api_instance = openapi_client.DailyHistoricalWeatherDataApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Historical Observations - Given a lat/lon.
        api_response = api_instance.history_dailylatlatlonlon_get(lat, lon, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)
        print("The response of DailyHistoricalWeatherDataApi->history_dailylatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DailyHistoricalWeatherDataApi->history_dailylatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**HistoryDay**](HistoryDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Historical Day Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_dailypostal_codepostal_code_get**
> HistoryDay history_dailypostal_codepostal_code_get(postal_code, start_date, end_date, key, country=country, units=units, lang=lang, param_callback=param_callback)

Returns Historical Observations - Given a Postal Code

Returns Historical Observations - Given a Postal Code. **(LIMIT 1 year per request)**

### Example


```python
import openapi_client
from openapi_client.models.history_day import HistoryDay
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
    api_instance = openapi_client.DailyHistoricalWeatherDataApi(api_client)
    postal_code = 'postal_code_example' # str | Postal Code. Example: 28546
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
    key = 'key_example' # str | Your registered API key.
    country = 'country_example' # str | Country Code (2 letter). (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Historical Observations - Given a Postal Code
        api_response = api_instance.history_dailypostal_codepostal_code_get(postal_code, start_date, end_date, key, country=country, units=units, lang=lang, param_callback=param_callback)
        print("The response of DailyHistoricalWeatherDataApi->history_dailypostal_codepostal_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DailyHistoricalWeatherDataApi->history_dailypostal_codepostal_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **str**| Postal Code. Example: 28546 | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH) | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH) | 
 **key** | **str**| Your registered API key. | 
 **country** | **str**| Country Code (2 letter). | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**HistoryDay**](HistoryDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Historical Day Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_dailystationstation_get**
> HistoryDay history_dailystationstation_get(station, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)

Returns Historical Observations - Given a station ID.

Returns Historical Observations - Given a station ID. **(LIMIT 1 year per request)**

### Example


```python
import openapi_client
from openapi_client.models.history_day import HistoryDay
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
    api_instance = openapi_client.DailyHistoricalWeatherDataApi(api_client)
    station = 'station_example' # str | Station ID.
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Historical Observations - Given a station ID.
        api_response = api_instance.history_dailystationstation_get(station, start_date, end_date, key, units=units, lang=lang, param_callback=param_callback)
        print("The response of DailyHistoricalWeatherDataApi->history_dailystationstation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DailyHistoricalWeatherDataApi->history_dailystationstation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station** | **str**| Station ID. | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**HistoryDay**](HistoryDay.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Historical Day Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


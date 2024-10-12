# openapi_client.CurrentWeatherDataApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currentcitiescities_get**](CurrentWeatherDataApi.md#currentcitiescities_get) | **GET** /current?cities&#x3D;{cities} | Returns a group of observations given a list of cities
[**currentcity_idcity_id_get**](CurrentWeatherDataApi.md#currentcity_idcity_id_get) | **GET** /current?city_id&#x3D;{city_id} | Returns a current observation by city id.
[**currentcitycitycountrycountry_get**](CurrentWeatherDataApi.md#currentcitycitycountrycountry_get) | **GET** /current?city&#x3D;{city}&amp;country&#x3D;{country} | Returns a Current Observation - Given City and/or State, Country.
[**currentlatlatlonlon_get**](CurrentWeatherDataApi.md#currentlatlatlonlon_get) | **GET** /current?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns a Current Observation - Given a lat/lon.
[**currentpointspoints_get**](CurrentWeatherDataApi.md#currentpointspoints_get) | **GET** /current?points&#x3D;{points} | Returns a group of observations given a list of points in the format (lat1, lon1), (lat2, lon2), (latN, lonN), ...
[**currentpostal_codepostal_code_get**](CurrentWeatherDataApi.md#currentpostal_codepostal_code_get) | **GET** /current?postal_code&#x3D;{postal_code} | Returns a current observation by postal code.
[**currentstationsstations_get**](CurrentWeatherDataApi.md#currentstationsstations_get) | **GET** /current?stations&#x3D;{stations} | Returns a group of observations given a list of stations
[**currentstationstation_get**](CurrentWeatherDataApi.md#currentstationstation_get) | **GET** /current?station&#x3D;{station} | Returns a Current Observation. - Given a station ID.


# **currentcitiescities_get**
> CurrentObsGroup currentcitiescities_get(cities, key, units=units, marine=marine, lang=lang, param_callback=param_callback)

Returns a group of observations given a list of cities

Returns a group of Current Observations - Given a list of City IDs. 

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    cities = 'cities_example' # str | Comma separated list of City ID's. Example: 4487042, 4494942, 4504871
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    marine = 'marine_example' # str | Marine stations only (buoys, oil platforms, etc) (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns a group of observations given a list of cities
        api_response = api_instance.currentcitiescities_get(cities, key, units=units, marine=marine, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentcitiescities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentcitiescities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cities** | **str**| Comma separated list of City ID&#39;s. Example: 4487042, 4494942, 4504871 | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **marine** | **str**| Marine stations only (buoys, oil platforms, etc) | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentcity_idcity_id_get**
> CurrentObsGroup currentcity_idcity_id_get(city_id, key, units=units, include=include, marine=marine, lang=lang, param_callback=param_callback)

Returns a current observation by city id.

Returns current weather observation - Given a City ID. 

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    city_id = 'city_id_example' # str | City ID. Example: 4487042
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    include = 'include_example' # str | Include 1 hour - minutely forecast in the response (optional)
    marine = 'marine_example' # str | Marine stations only (buoys, oil platforms, etc) (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns a current observation by city id.
        api_response = api_instance.currentcity_idcity_id_get(city_id, key, units=units, include=include, marine=marine, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentcity_idcity_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentcity_idcity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city_id** | **str**| City ID. Example: 4487042 | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **include** | **str**| Include 1 hour - minutely forecast in the response | [optional] 
 **marine** | **str**| Marine stations only (buoys, oil platforms, etc) | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentcitycitycountrycountry_get**
> CurrentObsGroup currentcitycitycountrycountry_get(city, country, key, include=include, state=state, marine=marine, units=units, lang=lang, param_callback=param_callback)

Returns a Current Observation - Given City and/or State, Country.

Returns a Current Observation - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    city = 'city_example' # str | City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
    country = 'country_example' # str | Country Code (2 letter).
    key = 'key_example' # str | Your registered API key.
    include = 'include_example' # str | Include 1 hour - minutely forecast in the response (optional)
    state = 'state_example' # str | Full name of state. (optional)
    marine = 'marine_example' # str | Marine stations only (buoys, oil platforms, etc) (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns a Current Observation - Given City and/or State, Country.
        api_response = api_instance.currentcitycitycountrycountry_get(city, country, key, include=include, state=state, marine=marine, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentcitycitycountrycountry_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentcitycitycountrycountry_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **str**| City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR | 
 **country** | **str**| Country Code (2 letter). | 
 **key** | **str**| Your registered API key. | 
 **include** | **str**| Include 1 hour - minutely forecast in the response | [optional] 
 **state** | **str**| Full name of state. | [optional] 
 **marine** | **str**| Marine stations only (buoys, oil platforms, etc) | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentlatlatlonlon_get**
> CurrentObsGroup currentlatlatlonlon_get(lat, lon, key, include=include, marine=marine, units=units, lang=lang, param_callback=param_callback)

Returns a Current Observation - Given a lat/lon.

Returns a Current Observation - given a lat, and a lon.

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    key = 'key_example' # str | Your registered API key.
    include = 'include_example' # str | Include 1 hour - minutely forecast in the response (optional)
    marine = 'marine_example' # str | Marine stations only (buoys, oil platforms, etc) (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns a Current Observation - Given a lat/lon.
        api_response = api_instance.currentlatlatlonlon_get(lat, lon, key, include=include, marine=marine, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentlatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentlatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **key** | **str**| Your registered API key. | 
 **include** | **str**| Include 1 hour - minutely forecast in the response | [optional] 
 **marine** | **str**| Marine stations only (buoys, oil platforms, etc) | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentpointspoints_get**
> CurrentObsGroup currentpointspoints_get(points, key, units=units, lang=lang, param_callback=param_callback)

Returns a group of observations given a list of points in the format (lat1, lon1), (lat2, lon2), (latN, lonN), ...

Returns a group of Current Observations - Given a list of points (lat1, lon1), (lat2, lon2), (latN, lonN), ...

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    points = 'points_example' # str | Comma separated list of points. Example: (35.5, -75.5),(45, 65),(45.12, -130.5)
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns a group of observations given a list of points in the format (lat1, lon1), (lat2, lon2), (latN, lonN), ...
        api_response = api_instance.currentpointspoints_get(points, key, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentpointspoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentpointspoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **points** | **str**| Comma separated list of points. Example: (35.5, -75.5),(45, 65),(45.12, -130.5) | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentpostal_codepostal_code_get**
> CurrentObsGroup currentpostal_codepostal_code_get(postal_code, key, country=country, include=include, marine=marine, units=units, lang=lang, param_callback=param_callback)

Returns a current observation by postal code.

Returns current weather observation - Given a Postal Code. 

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    postal_code = 'postal_code_example' # str | Postal Code. Example: 28546
    key = 'key_example' # str | Your registered API key.
    country = 'country_example' # str | Country Code (2 letter). (optional)
    include = 'include_example' # str | Include 1 hour - minutely forecast in the response (optional)
    marine = 'marine_example' # str | Marine stations only (buoys, oil platforms, etc) (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns a current observation by postal code.
        api_response = api_instance.currentpostal_codepostal_code_get(postal_code, key, country=country, include=include, marine=marine, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentpostal_codepostal_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentpostal_codepostal_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **str**| Postal Code. Example: 28546 | 
 **key** | **str**| Your registered API key. | 
 **country** | **str**| Country Code (2 letter). | [optional] 
 **include** | **str**| Include 1 hour - minutely forecast in the response | [optional] 
 **marine** | **str**| Marine stations only (buoys, oil platforms, etc) | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentstationsstations_get**
> CurrentObsGroup currentstationsstations_get(stations, key, units=units, lang=lang, param_callback=param_callback)

Returns a group of observations given a list of stations

Returns a group of Current Observations - Given a list of Station Call IDs. 

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    stations = 'stations_example' # str | Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY
    key = 'key_example' # str | Your registered API key.
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns a group of observations given a list of stations
        api_response = api_instance.currentstationsstations_get(stations, key, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentstationsstations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentstationsstations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stations** | **str**| Comma separated list of Station Call ID&#39;s. Example: KRDU,KBFI,KVNY | 
 **key** | **str**| Your registered API key. | 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currentstationstation_get**
> CurrentObsGroup currentstationstation_get(station, key, include=include, units=units, lang=lang, param_callback=param_callback)

Returns a Current Observation. - Given a station ID.

Returns a Current Observation - Given a station ID.

### Example


```python
import openapi_client
from openapi_client.models.current_obs_group import CurrentObsGroup
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
    api_instance = openapi_client.CurrentWeatherDataApi(api_client)
    station = 'station_example' # str | Station Call ID.
    key = 'key_example' # str | Your registered API key.
    include = 'include_example' # str | Include 1 hour - minutely forecast in the response (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    lang = 'lang_example' # str | Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns a Current Observation. - Given a station ID.
        api_response = api_instance.currentstationstation_get(station, key, include=include, units=units, lang=lang, param_callback=param_callback)
        print("The response of CurrentWeatherDataApi->currentstationstation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentWeatherDataApi->currentstationstation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station** | **str**| Station Call ID. | 
 **key** | **str**| Your registered API key. | 
 **include** | **str**| Include 1 hour - minutely forecast in the response | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **lang** | **str**| Language (Default: English) See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;language field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**CurrentObsGroup**](CurrentObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Observation Group object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


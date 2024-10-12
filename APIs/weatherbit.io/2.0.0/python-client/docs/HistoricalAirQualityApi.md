# openapi_client.HistoricalAirQualityApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history_airqualitycity_idcity_id_get**](HistoricalAirQualityApi.md#history_airqualitycity_idcity_id_get) | **GET** /history/airquality?city_id&#x3D;{city_id} | Returns 72 hours of historical air quality conditions - Given a City ID.
[**history_airqualitycitycitycountrycountry_get**](HistoricalAirQualityApi.md#history_airqualitycitycitycountrycountry_get) | **GET** /history/airquality?city&#x3D;{city}&amp;country&#x3D;{country} | Returns 72 hours of historical quality conditions - Given City and/or State, Country.
[**history_airqualitylatlatlonlon_get**](HistoricalAirQualityApi.md#history_airqualitylatlatlonlon_get) | **GET** /history/airquality?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns 72 hours of historical air quality conditions - Given a lat/lon.
[**history_airqualitypostal_codepostal_code_get**](HistoricalAirQualityApi.md#history_airqualitypostal_codepostal_code_get) | **GET** /history/airquality?postal_code&#x3D;{postal_code} | Returns 72 hours of historical air quality conditions - Given a Postal Code.


# **history_airqualitycity_idcity_id_get**
> AQCurrentGroup history_airqualitycity_idcity_id_get(city_id, key, param_callback=param_callback)

Returns 72 hours of historical air quality conditions - Given a City ID.

Returns historical air quality conditions.

### Example


```python
import openapi_client
from openapi_client.models.aq_current_group import AQCurrentGroup
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
    api_instance = openapi_client.HistoricalAirQualityApi(api_client)
    city_id = 3.4 # float | City ID.
    key = 'key_example' # str | Your registered API key.
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)

    try:
        # Returns 72 hours of historical air quality conditions - Given a City ID.
        api_response = api_instance.history_airqualitycity_idcity_id_get(city_id, key, param_callback=param_callback)
        print("The response of HistoricalAirQualityApi->history_airqualitycity_idcity_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HistoricalAirQualityApi->history_airqualitycity_idcity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city_id** | **float**| City ID. | 
 **key** | **str**| Your registered API key. | 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 

### Return type

[**AQCurrentGroup**](AQCurrentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Historical air quality conditions |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_airqualitycitycitycountrycountry_get**
> AQCurrentGroup history_airqualitycitycitycountrycountry_get(city, country, key, state=state, param_callback=param_callback)

Returns 72 hours of historical quality conditions - Given City and/or State, Country.

Returns historical air quality conditions.

### Example


```python
import openapi_client
from openapi_client.models.aq_current_group import AQCurrentGroup
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
    api_instance = openapi_client.HistoricalAirQualityApi(api_client)
    city = 'city_example' # str | City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
    country = 'country_example' # str | Country Code (2 letter).
    key = 'key_example' # str | Your registered API key.
    state = 'state_example' # str | Full name of state. (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns 72 hours of historical quality conditions - Given City and/or State, Country.
        api_response = api_instance.history_airqualitycitycitycountrycountry_get(city, country, key, state=state, param_callback=param_callback)
        print("The response of HistoricalAirQualityApi->history_airqualitycitycitycountrycountry_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HistoricalAirQualityApi->history_airqualitycitycitycountrycountry_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **str**| City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR | 
 **country** | **str**| Country Code (2 letter). | 
 **key** | **str**| Your registered API key. | 
 **state** | **str**| Full name of state. | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**AQCurrentGroup**](AQCurrentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Historical air quality conditions |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_airqualitylatlatlonlon_get**
> AQCurrentGroup history_airqualitylatlatlonlon_get(lat, lon, key, param_callback=param_callback)

Returns 72 hours of historical air quality conditions - Given a lat/lon.

Returns historical air quality conditions.

### Example


```python
import openapi_client
from openapi_client.models.aq_current_group import AQCurrentGroup
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
    api_instance = openapi_client.HistoricalAirQualityApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    key = 'key_example' # str | Your registered API key.
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)

    try:
        # Returns 72 hours of historical air quality conditions - Given a lat/lon.
        api_response = api_instance.history_airqualitylatlatlonlon_get(lat, lon, key, param_callback=param_callback)
        print("The response of HistoricalAirQualityApi->history_airqualitylatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HistoricalAirQualityApi->history_airqualitylatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **key** | **str**| Your registered API key. | 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 

### Return type

[**AQCurrentGroup**](AQCurrentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Historical air quality conditions |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **history_airqualitypostal_codepostal_code_get**
> AQCurrentGroup history_airqualitypostal_codepostal_code_get(postal_code, key, country=country, param_callback=param_callback)

Returns 72 hours of historical air quality conditions - Given a Postal Code.

Returns historical air quality conditions.

### Example


```python
import openapi_client
from openapi_client.models.aq_current_group import AQCurrentGroup
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
    api_instance = openapi_client.HistoricalAirQualityApi(api_client)
    postal_code = 56 # int | Postal Code. Example: 28546
    key = 'key_example' # str | Your registered API key.
    country = 'country_example' # str | Country Code (2 letter). (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example - callback=func (optional)

    try:
        # Returns 72 hours of historical air quality conditions - Given a Postal Code.
        api_response = api_instance.history_airqualitypostal_codepostal_code_get(postal_code, key, country=country, param_callback=param_callback)
        print("The response of HistoricalAirQualityApi->history_airqualitypostal_codepostal_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HistoricalAirQualityApi->history_airqualitypostal_codepostal_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **int**| Postal Code. Example: 28546 | 
 **key** | **str**| Your registered API key. | 
 **country** | **str**| Country Code (2 letter). | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example - callback&#x3D;func | [optional] 

### Return type

[**AQCurrentGroup**](AQCurrentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Historical air quality conditions |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


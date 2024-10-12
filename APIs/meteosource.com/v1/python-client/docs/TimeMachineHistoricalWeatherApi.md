# openapi_client.TimeMachineHistoricalWeatherApi

All URIs are relative to */api/v1/premium*

Method | HTTP request | Description
------------- | ------------- | -------------
[**time_machine_time_machine_get**](TimeMachineHistoricalWeatherApi.md#time_machine_time_machine_get) | **GET** /time_machine | Returns weather data for a single location and given day in the past


# **time_machine_time_machine_get**
> TimeMachineTimeMachine time_machine_time_machine_get(var_date, place_id=place_id, lat=lat, lon=lon, timezone=timezone, units=units, key=key)

Returns weather data for a single location and given day in the past

## Actual weather data for a single location and day in the past  The output contains actual weather data for each day up to 20 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.  ### Location specification The location of the weather data must be specified. There are two ways to do this: 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`. 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).  *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.time_machine_time_machine import TimeMachineTimeMachine
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1/premium
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1/premium"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeMachineHistoricalWeatherApi(api_client)
    var_date = '2013-10-20' # date | The day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`. 
    place_id = 'place_id_example' # str | Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name). (optional)
    lat = 'lat_example' # str | Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 (optional)
    lon = 'lon_example' # str | Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 (optional)
    timezone = 'timezone_example' # str | Timezone to be used for the date fields. If not specified, local timezone of the location will be used. The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used. Alternatively you may use the value ``auto`` in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  (optional)
    units = openapi_client.Units() # Units | Unit system to be used. The available values are:  * `auto`: Select the system automatically, based on the forecast location. * `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`). * `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`). * `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`. * `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Returns weather data for a single location and given day in the past
        api_response = api_instance.time_machine_time_machine_get(var_date, place_id=place_id, lat=lat, lon=lon, timezone=timezone, units=units, key=key)
        print("The response of TimeMachineHistoricalWeatherApi->time_machine_time_machine_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeMachineHistoricalWeatherApi->time_machine_time_machine_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| The day of the data in the past. Specify in &#x60;YYYY-MM-DD&#x60; format, e.g. &#x60;2021-08-24&#x60;.  | 
 **place_id** | **str**| Identifier of a place. To obtain the &#x60;place_id&#x60; for the location you want, please use endpoints &#x60;/find_places_prefix&#x60; (search by prefix) or &#x60;/find_places&#x60; (search by full name). | [optional] 
 **lat** | **str**| Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 | [optional] 
 **lon** | **str**| Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 | [optional] 
 **timezone** | **str**| Timezone to be used for the date fields. If not specified, local timezone of the location will be used. The format is according to the tzinfo database, so values like &#x60;Europe/Prague&#x60; or &#x60;UTC&#x60; can be used. Alternatively you may use the value &#x60;&#x60;auto&#x60;&#x60; in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  | [optional] 
 **units** | [**Units**](.md)| Unit system to be used. The available values are:  * &#x60;auto&#x60;: Select the system automatically, based on the forecast location. * &#x60;metric&#x60;: Metric (SI) units (&#x60;°C&#x60;, &#x60;mm/h&#x60;, &#x60;m/s&#x60;, &#x60;cm&#x60;, &#x60;km&#x60;, &#x60;hPa&#x60;). * &#x60;us&#x60;: Imperial units (&#x60;°F&#x60;, &#x60;in/h&#x60;, &#x60;mph&#x60;, &#x60;in&#x60;, &#x60;mi&#x60;, &#x60;Hg&#x60;). * &#x60;uk&#x60;: Same as &#x60;&#x60;metric&#x60;&#x60;, except that visibility is in &#x60;miles&#x60; and wind speeds are in &#x60;mph&#x60;. * &#x60;ca&#x60;: Same as &#x60;&#x60;metric&#x60;&#x60;, except that wind speeds are in &#x60;km/h&#x60; and pressure is in &#x60;kPa&#x60;.  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**TimeMachineTimeMachine**](TimeMachineTimeMachine.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Error in passed parameter. |  -  |
**402** | Maximum requests per day limit exceeded. |  -  |
**403** | API key not not specified or invalid. |  -  |
**422** | Validation Error |  -  |
**429** | Maximum requests per minute limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


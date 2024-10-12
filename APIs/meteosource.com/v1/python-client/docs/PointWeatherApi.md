# openapi_client.PointWeatherApi

All URIs are relative to */api/v1/premium*

Method | HTTP request | Description
------------- | ------------- | -------------
[**air_quality_air_quality_get**](PointWeatherApi.md#air_quality_air_quality_get) | **GET** /air_quality | Returns air quality data for a single point (geographic name or GPS)
[**point_point_get**](PointWeatherApi.md#point_point_get) | **GET** /point | Returns weather data for a single point (geographic name or GPS)


# **air_quality_air_quality_get**
> AirQualityPointData air_quality_air_quality_get(place_id=place_id, lat=lat, lon=lon, timezone=timezone, key=key)

Returns air quality data for a single point (geographic name or GPS)

## Air quality forecast for a single location  ### Location specification The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this: 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`. 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).  ### Notes * **For a detailed description of variables, please consult ⚠️ <a href=\"https://www.meteosource.com/documentation#description_aq\" target=\"_blank\">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).** * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them. * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**. * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request. * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.air_quality_point_data import AirQualityPointData
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
    api_instance = openapi_client.PointWeatherApi(api_client)
    place_id = 'place_id_example' # str | Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name). (optional)
    lat = 'lat_example' # str | Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 (optional)
    lon = 'lon_example' # str | Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 (optional)
    timezone = 'timezone_example' # str | Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used. The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used. Alternatively you may use the value ``auto`` in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Returns air quality data for a single point (geographic name or GPS)
        api_response = api_instance.air_quality_air_quality_get(place_id=place_id, lat=lat, lon=lon, timezone=timezone, key=key)
        print("The response of PointWeatherApi->air_quality_air_quality_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointWeatherApi->air_quality_air_quality_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **place_id** | **str**| Identifier of a place. To obtain the &#x60;place_id&#x60; for the location you want, please use endpoints &#x60;/find_places_prefix&#x60; (search by prefix) or &#x60;/find_places&#x60; (search by full name). | [optional] 
 **lat** | **str**| Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 | [optional] 
 **lon** | **str**| Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 | [optional] 
 **timezone** | **str**| Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used. The format is according to the tzinfo database, so values like &#x60;Europe/Prague&#x60; or &#x60;UTC&#x60; can be used. Alternatively you may use the value &#x60;&#x60;auto&#x60;&#x60; in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**AirQualityPointData**](AirQualityPointData.md)

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

# **point_point_get**
> PointPointData point_point_get(place_id=place_id, lat=lat, lon=lon, sections=sections, timezone=timezone, language=language, units=units, key=key)

Returns weather data for a single point (geographic name or GPS)

## Current weather and forecast for single location  ### Location specification The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this: 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`. 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).  *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive forecasts for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*  ### Sections The endpoint can return multiple sections of data. To obtain the best performance, we advise only requesting the sections you actually need. The available sections are as follows:  * Current weather situation * Hourly forecast (for 24/48/96/168 hours, depending on the tier) * Daily forecast (for 7/10/30 days, depending on the tier) * Minutely precipitation forecast (for 60 minutes in the following hour, only for higher tiers) * Weather alerts (only for higher tiers)  By default, only the current and hourly sections are returned. The division into daily parts (morning, afternoon and evening) is only available for the first 7 days of the forecast. For details regarding available parameters, see the parameter description below.  ### Notes * **For a detailed description of variables (e.g. icons), please consult ⚠️ <a href=\"https://www.meteosource.com/documentation#description\" target=\"_blank\">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).** * Variables can be instantaneous, averaged, or accumulated over certain time. For example, `precipitation` forecast provides the precipitation accumulated until the next hour (data with timestamp as `12:00:00` is rain accumulated from `12:00:00` to `13:00:00`). * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them. * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**. * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request. * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`). * The detailed description of weather alerts is only available in English. The alert category is translated into selected language.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.point_point_data import PointPointData
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
    api_instance = openapi_client.PointWeatherApi(api_client)
    place_id = 'place_id_example' # str | Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name). (optional)
    lat = 'lat_example' # str | Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 (optional)
    lon = 'lon_example' # str | Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 (optional)
    sections = 'current,hourly' # str | Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:  * ``current``: Current weather situation * ``daily``: Forecasts for each whole day, without the daily parts * ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening     * Important: forecast for the morning, afternoon and evening is available only for the first       7 days in the forecast * ``hourly``: Forecasts with hourly resolution * ``minutely``: Precipitation forecast with 1 minute resolution * ``alerts``: The weather alerts * ``all``: All sections  (optional) (default to 'current,hourly')
    timezone = 'timezone_example' # str | Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used. The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used. Alternatively you may use the value ``auto`` in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  (optional)
    language = openapi_client.Language() # Language | The language of text summaries and place names (variable names are never translated). Available languages are:     * ``en``: English    * ``es``: Spanish    * ``fr``: French    * ``de``: German    * ``pl``: Polish    * ``pt``: Portuguese    * ``cs``: Czech  (optional)
    units = openapi_client.Units() # Units | Unit system to be used. The available values are:  * `auto`: Select the system automatically, based on the forecast location. * `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`). * `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`). * `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`. * `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Returns weather data for a single point (geographic name or GPS)
        api_response = api_instance.point_point_get(place_id=place_id, lat=lat, lon=lon, sections=sections, timezone=timezone, language=language, units=units, key=key)
        print("The response of PointWeatherApi->point_point_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointWeatherApi->point_point_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **place_id** | **str**| Identifier of a place. To obtain the &#x60;place_id&#x60; for the location you want, please use endpoints &#x60;/find_places_prefix&#x60; (search by prefix) or &#x60;/find_places&#x60; (search by full name). | [optional] 
 **lat** | **str**| Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 | [optional] 
 **lon** | **str**| Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 | [optional] 
 **sections** | **str**| Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:  * &#x60;&#x60;current&#x60;&#x60;: Current weather situation * &#x60;&#x60;daily&#x60;&#x60;: Forecasts for each whole day, without the daily parts * &#x60;&#x60;daily-parts&#x60;&#x60;: Forecasts for each whole day, morning, afternoon and evening     * Important: forecast for the morning, afternoon and evening is available only for the first       7 days in the forecast * &#x60;&#x60;hourly&#x60;&#x60;: Forecasts with hourly resolution * &#x60;&#x60;minutely&#x60;&#x60;: Precipitation forecast with 1 minute resolution * &#x60;&#x60;alerts&#x60;&#x60;: The weather alerts * &#x60;&#x60;all&#x60;&#x60;: All sections  | [optional] [default to &#39;current,hourly&#39;]
 **timezone** | **str**| Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used. The format is according to the tzinfo database, so values like &#x60;Europe/Prague&#x60; or &#x60;UTC&#x60; can be used. Alternatively you may use the value &#x60;&#x60;auto&#x60;&#x60; in which case the local timezone of the location is used. The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).  | [optional] 
 **language** | [**Language**](.md)| The language of text summaries and place names (variable names are never translated). Available languages are:     * &#x60;&#x60;en&#x60;&#x60;: English    * &#x60;&#x60;es&#x60;&#x60;: Spanish    * &#x60;&#x60;fr&#x60;&#x60;: French    * &#x60;&#x60;de&#x60;&#x60;: German    * &#x60;&#x60;pl&#x60;&#x60;: Polish    * &#x60;&#x60;pt&#x60;&#x60;: Portuguese    * &#x60;&#x60;cs&#x60;&#x60;: Czech  | [optional] 
 **units** | [**Units**](.md)| Unit system to be used. The available values are:  * &#x60;auto&#x60;: Select the system automatically, based on the forecast location. * &#x60;metric&#x60;: Metric (SI) units (&#x60;°C&#x60;, &#x60;mm/h&#x60;, &#x60;m/s&#x60;, &#x60;cm&#x60;, &#x60;km&#x60;, &#x60;hPa&#x60;). * &#x60;us&#x60;: Imperial units (&#x60;°F&#x60;, &#x60;in/h&#x60;, &#x60;mph&#x60;, &#x60;in&#x60;, &#x60;mi&#x60;, &#x60;Hg&#x60;). * &#x60;uk&#x60;: Same as &#x60;&#x60;metric&#x60;&#x60;, except that visibility is in &#x60;miles&#x60; and wind speeds are in &#x60;mph&#x60;. * &#x60;ca&#x60;: Same as &#x60;&#x60;metric&#x60;&#x60;, except that wind speeds are in &#x60;km/h&#x60; and pressure is in &#x60;kPa&#x60;.  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**PointPointData**](PointPointData.md)

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


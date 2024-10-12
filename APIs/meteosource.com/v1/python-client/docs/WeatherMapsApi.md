# openapi_client.WeatherMapsApi

All URIs are relative to */api/v1/premium*

Method | HTTP request | Description
------------- | ------------- | -------------
[**map_map_get**](WeatherMapsApi.md#map_map_get) | **GET** /map | Returns PNG weather map for given area and variable


# **map_map_get**
> str map_map_get(variable, datetime, tile_x=tile_x, tile_y=tile_y, tile_zoom=tile_zoom, min_lat=min_lat, min_lon=min_lon, max_lat=max_lat, max_lon=max_lon, key=key)

Returns PNG weather map for given area and variable

## PNG weather forecast maps for given area and variable  ### Area specification There are two ways to specify geographical area you need for your map: 1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href=\"https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/\" rel=\"nofollow\" target=\"_blank\">Google Maps Tile notation</a>. 2. Specify latitude and longitude bounds of the area you want to cover.  ### Notes * The resulting PNG maps are **always** in <a href=\"https://epsg.io/3857\" rel=\"nofollow\" target=\"_blank\">Google Mercator projection (EPSG:3857)</a>. * As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent. * The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses. * Weather maps are only supported for forecasts, not for archive data.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
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
    api_instance = openapi_client.WeatherMapsApi(api_client)
    variable = 'variable_example' # str | Name of the variable for your map. Available values are:  * `temperature`: Temperature 2 metres above ground * `feels_like_temperature`: Feels like temperature * `clouds`: Percentage of sky covered by clouds * `precipitation`: Total precipitation amount accumulated since last hour * `wind_speed`: Wind speed 10 metres above the ground * `wind_gust`: Wind gust speed * `pressure`: Atmospheric pressure at mean sea level * `humidity`: Relative humidity * `wave_height`: Wave height * `wave_period`: Wave period * `sea_temperature`: Sea temperature (available only for +-24 hours) * `air_quality`: Air quality index * `ozone_surface`: Ozone at surface level * `ozone_total`: Total column ozone * `no2`: Nitrogen dioxide at surface level * `pm2.5`: Particulate matter d < 2.5 µm (PM2.5) 
    datetime = 'datetime_example' # str | There are two ways to specify date and time for your map:  1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00` 2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days` 
    tile_x = 56 # int | The X coordinate of Google Maps tile (optional)
    tile_y = 56 # int | The Y coordinate of Google Maps tile (optional)
    tile_zoom = 56 # int | The zoom level of Google Maps tile (optional)
    min_lat = 'min_lat_example' # str | Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2  (optional)
    min_lon = 'min_lon_example' # str | Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2  (optional)
    max_lat = 'max_lat_example' # str | Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.  (optional)
    max_lon = 'max_lon_example' # str | Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Returns PNG weather map for given area and variable
        api_response = api_instance.map_map_get(variable, datetime, tile_x=tile_x, tile_y=tile_y, tile_zoom=tile_zoom, min_lat=min_lat, min_lon=min_lon, max_lat=max_lat, max_lon=max_lon, key=key)
        print("The response of WeatherMapsApi->map_map_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherMapsApi->map_map_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | **str**| Name of the variable for your map. Available values are:  * &#x60;temperature&#x60;: Temperature 2 metres above ground * &#x60;feels_like_temperature&#x60;: Feels like temperature * &#x60;clouds&#x60;: Percentage of sky covered by clouds * &#x60;precipitation&#x60;: Total precipitation amount accumulated since last hour * &#x60;wind_speed&#x60;: Wind speed 10 metres above the ground * &#x60;wind_gust&#x60;: Wind gust speed * &#x60;pressure&#x60;: Atmospheric pressure at mean sea level * &#x60;humidity&#x60;: Relative humidity * &#x60;wave_height&#x60;: Wave height * &#x60;wave_period&#x60;: Wave period * &#x60;sea_temperature&#x60;: Sea temperature (available only for +-24 hours) * &#x60;air_quality&#x60;: Air quality index * &#x60;ozone_surface&#x60;: Ozone at surface level * &#x60;ozone_total&#x60;: Total column ozone * &#x60;no2&#x60;: Nitrogen dioxide at surface level * &#x60;pm2.5&#x60;: Particulate matter d &lt; 2.5 µm (PM2.5)  | 
 **datetime** | **str**| There are two ways to specify date and time for your map:  1. Datetime in &#x60;YYYY-MM-DDTHH:MM&#x60; format and &#x60;UTC&#x60; timezone, e.g. &#x60;2021-08-24T12:00&#x60; 2. Offset from current time in &#x60;[+-]&lt;minutes|hours|days&gt;&#x60; format, e.g. &#x60;+10minutes&#x60;, &#x60;-2hours&#x60; or &#x60;+1days&#x60;  | 
 **tile_x** | **int**| The X coordinate of Google Maps tile | [optional] 
 **tile_y** | **int**| The Y coordinate of Google Maps tile | [optional] 
 **tile_zoom** | **int**| The zoom level of Google Maps tile | [optional] 
 **min_lat** | **str**| Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2  | [optional] 
 **min_lon** | **str**| Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2  | [optional] 
 **max_lat** | **str**| Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.  | [optional] 
 **max_lon** | **str**| Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

**str**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

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


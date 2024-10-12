# openapi_client.WeatherApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wx_by_distance_us_v1_wx_forecast_distance_query_post**](WeatherApi.md#wx_by_distance_us_v1_wx_forecast_distance_query_post) | **POST** /us/v1/wx-forecast/distance-query | Retrieve forecast values within given distance of location for all requested weather elements and time periods.
[**wx_by_poly_us_v1_wx_forecast_polygon_query_post**](WeatherApi.md#wx_by_poly_us_v1_wx_forecast_polygon_query_post) | **POST** /us/v1/wx-forecast/polygon-query | Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
[**wx_by_route_us_v1_wx_forecast_route_query_post**](WeatherApi.md#wx_by_route_us_v1_wx_forecast_route_query_post) | **POST** /us/v1/wx-forecast/route-query | Retrieve forecast values along a route for all requested weather elements and time periods.


# **wx_by_distance_us_v1_wx_forecast_distance_query_post**
> WxDistanceResponse wx_by_distance_us_v1_wx_forecast_distance_query_post(wx_by_distance, x_api_key=x_api_key)

Retrieve forecast values within given distance of location for all requested weather elements and time periods.

Retrieve forecast values for selected weather elements and time period. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000) * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\". * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.   The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area, properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows: * CIG: meters AGL * DEWPT: degrees Celsius * SKY: % cloud cover * TEMP: degrees Celsius * VIS: meters * WINDDIR: degrees true * WINDGUST: meters/sec * WINDSPEED: meters/sec

### Example


```python
import openapi_client
from openapi_client.models.wx_by_distance import WxByDistance
from openapi_client.models.wx_distance_response import WxDistanceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dflight-api.ljaero.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dflight-api.ljaero.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WeatherApi(api_client)
    wx_by_distance = openapi_client.WxByDistance() # WxByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve forecast values within given distance of location for all requested weather elements and time periods.
        api_response = api_instance.wx_by_distance_us_v1_wx_forecast_distance_query_post(wx_by_distance, x_api_key=x_api_key)
        print("The response of WeatherApi->wx_by_distance_us_v1_wx_forecast_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherApi->wx_by_distance_us_v1_wx_forecast_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wx_by_distance** | [**WxByDistance**](WxByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**WxDistanceResponse**](WxDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wx_by_poly_us_v1_wx_forecast_polygon_query_post**
> WxPolyResponse wx_by_poly_us_v1_wx_forecast_polygon_query_post(wx_by_polygon, x_api_key=x_api_key)

Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.

Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2. * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\". * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.   The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area, properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows: * CIG: meters AGL * DEWPT: degrees Celsius * SKY: % cloud cover * TEMP: degrees Celsius * VIS: meters * WINDDIR: degrees true * WINDGUST: meters/sec * WINDSPEED: meters/sec

### Example


```python
import openapi_client
from openapi_client.models.wx_by_polygon import WxByPolygon
from openapi_client.models.wx_poly_response import WxPolyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dflight-api.ljaero.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dflight-api.ljaero.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WeatherApi(api_client)
    wx_by_polygon = openapi_client.WxByPolygon() # WxByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
        api_response = api_instance.wx_by_poly_us_v1_wx_forecast_polygon_query_post(wx_by_polygon, x_api_key=x_api_key)
        print("The response of WeatherApi->wx_by_poly_us_v1_wx_forecast_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherApi->wx_by_poly_us_v1_wx_forecast_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wx_by_polygon** | [**WxByPolygon**](WxByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**WxPolyResponse**](WxPolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wx_by_route_us_v1_wx_forecast_route_query_post**
> WxRouteResponse wx_by_route_us_v1_wx_forecast_route_query_post(wx_by_route, x_api_key=x_api_key)

Retrieve forecast values along a route for all requested weather elements and time periods.

Retrieve forecast values along route for requested weather elements and time period. Request body parameters are: * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km. * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\". * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.   The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area, properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows: * CIG: meters AGL * DEWPT: degrees Celsius * SKY: % cloud cover * TEMP: degrees Celsius * VIS: meters * WINDDIR: degrees true * WINDGUST: meters/sec * WINDSPEED: meters/sec

### Example


```python
import openapi_client
from openapi_client.models.wx_by_route import WxByRoute
from openapi_client.models.wx_route_response import WxRouteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dflight-api.ljaero.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dflight-api.ljaero.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WeatherApi(api_client)
    wx_by_route = openapi_client.WxByRoute() # WxByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve forecast values along a route for all requested weather elements and time periods.
        api_response = api_instance.wx_by_route_us_v1_wx_forecast_route_query_post(wx_by_route, x_api_key=x_api_key)
        print("The response of WeatherApi->wx_by_route_us_v1_wx_forecast_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherApi->wx_by_route_us_v1_wx_forecast_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wx_by_route** | [**WxByRoute**](WxByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**WxRouteResponse**](WxRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


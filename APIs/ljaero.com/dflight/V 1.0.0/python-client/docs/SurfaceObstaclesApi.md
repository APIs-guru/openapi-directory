# openapi_client.SurfaceObstaclesApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**obstacles_by_distance_us_v1_obstacles_distance_query_post**](SurfaceObstaclesApi.md#obstacles_by_distance_us_v1_obstacles_distance_query_post) | **POST** /us/v1/obstacles/distance-query | Retrieve obstacles within given distance of location.
[**obstacles_by_poly_us_v1_obstacles_polygon_query_post**](SurfaceObstaclesApi.md#obstacles_by_poly_us_v1_obstacles_polygon_query_post) | **POST** /us/v1/obstacles/polygon-query | Retrieve obstacles located within given area.
[**obstacles_by_route_us_v1_obstacles_route_query_post**](SurfaceObstaclesApi.md#obstacles_by_route_us_v1_obstacles_route_query_post) | **POST** /us/v1/obstacles/route-query | Retrieve obstacles found along a route.


# **obstacles_by_distance_us_v1_obstacles_distance_query_post**
> ObstacleDistanceResponse obstacles_by_distance_us_v1_obstacles_distance_query_post(obstacles_by_distance, x_api_key=x_api_key)

Retrieve obstacles within given distance of location.

Retrieve obstacles within given distance of a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)

### Example


```python
import openapi_client
from openapi_client.models.obstacle_distance_response import ObstacleDistanceResponse
from openapi_client.models.obstacles_by_distance import ObstaclesByDistance
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
    api_instance = openapi_client.SurfaceObstaclesApi(api_client)
    obstacles_by_distance = openapi_client.ObstaclesByDistance() # ObstaclesByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve obstacles within given distance of location.
        api_response = api_instance.obstacles_by_distance_us_v1_obstacles_distance_query_post(obstacles_by_distance, x_api_key=x_api_key)
        print("The response of SurfaceObstaclesApi->obstacles_by_distance_us_v1_obstacles_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SurfaceObstaclesApi->obstacles_by_distance_us_v1_obstacles_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obstacles_by_distance** | [**ObstaclesByDistance**](ObstaclesByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**ObstacleDistanceResponse**](ObstacleDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each obstacle found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **obstacles_by_poly_us_v1_obstacles_polygon_query_post**
> ObstaclePolyResponse obstacles_by_poly_us_v1_obstacles_polygon_query_post(obstacles_by_polygon, x_api_key=x_api_key)

Retrieve obstacles located within given area.

Retrieve obstacles located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example


```python
import openapi_client
from openapi_client.models.obstacle_poly_response import ObstaclePolyResponse
from openapi_client.models.obstacles_by_polygon import ObstaclesByPolygon
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
    api_instance = openapi_client.SurfaceObstaclesApi(api_client)
    obstacles_by_polygon = openapi_client.ObstaclesByPolygon() # ObstaclesByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve obstacles located within given area.
        api_response = api_instance.obstacles_by_poly_us_v1_obstacles_polygon_query_post(obstacles_by_polygon, x_api_key=x_api_key)
        print("The response of SurfaceObstaclesApi->obstacles_by_poly_us_v1_obstacles_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SurfaceObstaclesApi->obstacles_by_poly_us_v1_obstacles_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obstacles_by_polygon** | [**ObstaclesByPolygon**](ObstaclesByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**ObstaclePolyResponse**](ObstaclePolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each obstacle found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **obstacles_by_route_us_v1_obstacles_route_query_post**
> ObstacleRouteResponse obstacles_by_route_us_v1_obstacles_route_query_post(obstacles_by_route, x_api_key=x_api_key)

Retrieve obstacles found along a route.

Retrieve obstacles found along a route. Request body parameters are: * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example


```python
import openapi_client
from openapi_client.models.obstacle_route_response import ObstacleRouteResponse
from openapi_client.models.obstacles_by_route import ObstaclesByRoute
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
    api_instance = openapi_client.SurfaceObstaclesApi(api_client)
    obstacles_by_route = openapi_client.ObstaclesByRoute() # ObstaclesByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve obstacles found along a route.
        api_response = api_instance.obstacles_by_route_us_v1_obstacles_route_query_post(obstacles_by_route, x_api_key=x_api_key)
        print("The response of SurfaceObstaclesApi->obstacles_by_route_us_v1_obstacles_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SurfaceObstaclesApi->obstacles_by_route_us_v1_obstacles_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obstacles_by_route** | [**ObstaclesByRoute**](ObstaclesByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**ObstacleRouteResponse**](ObstacleRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each obstacle found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


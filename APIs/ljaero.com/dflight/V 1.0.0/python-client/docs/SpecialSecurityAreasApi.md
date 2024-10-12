# openapi_client.SpecialSecurityAreasApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ssa_by_distance_us_v1_ssa_distance_query_post**](SpecialSecurityAreasApi.md#ssa_by_distance_us_v1_ssa_distance_query_post) | **POST** /us/v1/ssa/distance-query | Retrieve all special security areas located within given distance of location.
[**ssa_by_poly_us_v1_ssa_polygon_query_post**](SpecialSecurityAreasApi.md#ssa_by_poly_us_v1_ssa_polygon_query_post) | **POST** /us/v1/ssa/polygon-query | Retrieve all special security areas located within given GeoJSON Polygon.
[**ssa_by_route_us_v1_ssa_route_query_post**](SpecialSecurityAreasApi.md#ssa_by_route_us_v1_ssa_route_query_post) | **POST** /us/v1/ssa/route-query | Retrieve all special security areas traversed by route.


# **ssa_by_distance_us_v1_ssa_distance_query_post**
> SSADistanceResponse ssa_by_distance_us_v1_ssa_distance_query_post(ssaby_distance, x_api_key=x_api_key)

Retrieve all special security areas located within given distance of location.

Retrieve special security areas existing within given distance from a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)

### Example


```python
import openapi_client
from openapi_client.models.ssaby_distance import SSAByDistance
from openapi_client.models.ssa_distance_response import SSADistanceResponse
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
    api_instance = openapi_client.SpecialSecurityAreasApi(api_client)
    ssaby_distance = openapi_client.SSAByDistance() # SSAByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all special security areas located within given distance of location.
        api_response = api_instance.ssa_by_distance_us_v1_ssa_distance_query_post(ssaby_distance, x_api_key=x_api_key)
        print("The response of SpecialSecurityAreasApi->ssa_by_distance_us_v1_ssa_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpecialSecurityAreasApi->ssa_by_distance_us_v1_ssa_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssaby_distance** | [**SSAByDistance**](SSAByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**SSADistanceResponse**](SSADistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each area found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ssa_by_poly_us_v1_ssa_polygon_query_post**
> SSAPolyResponse ssa_by_poly_us_v1_ssa_polygon_query_post(ssaby_polygon, x_api_key=x_api_key)

Retrieve all special security areas located within given GeoJSON Polygon.

Retrieve all special security areas located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example


```python
import openapi_client
from openapi_client.models.ssaby_polygon import SSAByPolygon
from openapi_client.models.ssa_poly_response import SSAPolyResponse
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
    api_instance = openapi_client.SpecialSecurityAreasApi(api_client)
    ssaby_polygon = openapi_client.SSAByPolygon() # SSAByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all special security areas located within given GeoJSON Polygon.
        api_response = api_instance.ssa_by_poly_us_v1_ssa_polygon_query_post(ssaby_polygon, x_api_key=x_api_key)
        print("The response of SpecialSecurityAreasApi->ssa_by_poly_us_v1_ssa_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpecialSecurityAreasApi->ssa_by_poly_us_v1_ssa_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssaby_polygon** | [**SSAByPolygon**](SSAByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**SSAPolyResponse**](SSAPolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each area found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ssa_by_route_us_v1_ssa_route_query_post**
> SSARouteResponse ssa_by_route_us_v1_ssa_route_query_post(ssaby_route, x_api_key=x_api_key)

Retrieve all special security areas traversed by route.

Retrieve all special security areas intersected by route. Request body parameters are: * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example


```python
import openapi_client
from openapi_client.models.ssaby_route import SSAByRoute
from openapi_client.models.ssa_route_response import SSARouteResponse
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
    api_instance = openapi_client.SpecialSecurityAreasApi(api_client)
    ssaby_route = openapi_client.SSAByRoute() # SSAByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all special security areas traversed by route.
        api_response = api_instance.ssa_by_route_us_v1_ssa_route_query_post(ssaby_route, x_api_key=x_api_key)
        print("The response of SpecialSecurityAreasApi->ssa_by_route_us_v1_ssa_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpecialSecurityAreasApi->ssa_by_route_us_v1_ssa_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssaby_route** | [**SSAByRoute**](SSAByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**SSARouteResponse**](SSARouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each area found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


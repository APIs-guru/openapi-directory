# openapi_client.AerodromesApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aerodromes_by_distance_us_v1_aerodromes_distance_query_post**](AerodromesApi.md#aerodromes_by_distance_us_v1_aerodromes_distance_query_post) | **POST** /us/v1/aerodromes/distance-query | Retrieve aerodromes within given distance of location.
[**aerodromes_by_poly_us_v1_aerodromes_polygon_query_post**](AerodromesApi.md#aerodromes_by_poly_us_v1_aerodromes_polygon_query_post) | **POST** /us/v1/aerodromes/polygon-query | Retrieve aerodromes located within given area.
[**aerodromes_by_route_us_v1_aerodromes_route_query_post**](AerodromesApi.md#aerodromes_by_route_us_v1_aerodromes_route_query_post) | **POST** /us/v1/aerodromes/route-query | Retrieve aerodromes found along a route.


# **aerodromes_by_distance_us_v1_aerodromes_distance_query_post**
> AerodromeDistanceResponse aerodromes_by_distance_us_v1_aerodromes_distance_query_post(aerodromes_by_distance, x_api_key=x_api_key)

Retrieve aerodromes within given distance of location.

Retrieve aerodromes within given distance of a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)  Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each Aerodrome found. All Features will include properties for the facility name, ident, type, and operational status.

### Example


```python
import openapi_client
from openapi_client.models.aerodrome_distance_response import AerodromeDistanceResponse
from openapi_client.models.aerodromes_by_distance import AerodromesByDistance
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
    api_instance = openapi_client.AerodromesApi(api_client)
    aerodromes_by_distance = openapi_client.AerodromesByDistance() # AerodromesByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve aerodromes within given distance of location.
        api_response = api_instance.aerodromes_by_distance_us_v1_aerodromes_distance_query_post(aerodromes_by_distance, x_api_key=x_api_key)
        print("The response of AerodromesApi->aerodromes_by_distance_us_v1_aerodromes_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AerodromesApi->aerodromes_by_distance_us_v1_aerodromes_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aerodromes_by_distance** | [**AerodromesByDistance**](AerodromesByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AerodromeDistanceResponse**](AerodromeDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each aerodrome found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aerodromes_by_poly_us_v1_aerodromes_polygon_query_post**
> AerodromePolyResponse aerodromes_by_poly_us_v1_aerodromes_polygon_query_post(aerodromes_by_polygon, x_api_key=x_api_key)

Retrieve aerodromes located within given area.

Retrieve aerodromes located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.  Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each Aerodrome found. All Features will include properties for the facility name, ident, type, and operational status.

### Example


```python
import openapi_client
from openapi_client.models.aerodrome_poly_response import AerodromePolyResponse
from openapi_client.models.aerodromes_by_polygon import AerodromesByPolygon
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
    api_instance = openapi_client.AerodromesApi(api_client)
    aerodromes_by_polygon = openapi_client.AerodromesByPolygon() # AerodromesByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve aerodromes located within given area.
        api_response = api_instance.aerodromes_by_poly_us_v1_aerodromes_polygon_query_post(aerodromes_by_polygon, x_api_key=x_api_key)
        print("The response of AerodromesApi->aerodromes_by_poly_us_v1_aerodromes_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AerodromesApi->aerodromes_by_poly_us_v1_aerodromes_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aerodromes_by_polygon** | [**AerodromesByPolygon**](AerodromesByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AerodromePolyResponse**](AerodromePolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each aerodrome found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aerodromes_by_route_us_v1_aerodromes_route_query_post**
> AerodromeRouteResponse aerodromes_by_route_us_v1_aerodromes_route_query_post(aerodromes_by_route, x_api_key=x_api_key)

Retrieve aerodromes found along a route.

Retrieve aerodromes found along a route. Request body parameters are: * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.  Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each Aerodrome found. All Features will include properties for the facility name, ident, type, and operational status.

### Example


```python
import openapi_client
from openapi_client.models.aerodrome_route_response import AerodromeRouteResponse
from openapi_client.models.aerodromes_by_route import AerodromesByRoute
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
    api_instance = openapi_client.AerodromesApi(api_client)
    aerodromes_by_route = openapi_client.AerodromesByRoute() # AerodromesByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve aerodromes found along a route.
        api_response = api_instance.aerodromes_by_route_us_v1_aerodromes_route_query_post(aerodromes_by_route, x_api_key=x_api_key)
        print("The response of AerodromesApi->aerodromes_by_route_us_v1_aerodromes_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AerodromesApi->aerodromes_by_route_us_v1_aerodromes_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aerodromes_by_route** | [**AerodromesByRoute**](AerodromesByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AerodromeRouteResponse**](AerodromeRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each aerodrome found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


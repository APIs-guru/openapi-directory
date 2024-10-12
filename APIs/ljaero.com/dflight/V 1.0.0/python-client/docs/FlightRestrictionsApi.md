# openapi_client.FlightRestrictionsApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tfr_by_distance_us_v1_restrictions_distance_query_post**](FlightRestrictionsApi.md#tfr_by_distance_us_v1_restrictions_distance_query_post) | **POST** /us/v1/restrictions/distance-query | Retrieve flight restrictions applicable within given distance of location.
[**tfr_by_poly_us_v1_restrictions_polygon_query_post**](FlightRestrictionsApi.md#tfr_by_poly_us_v1_restrictions_polygon_query_post) | **POST** /us/v1/restrictions/polygon-query | Retrieve flight restrictions applicable within given area.
[**tfr_by_route_us_v1_restrictions_route_query_post**](FlightRestrictionsApi.md#tfr_by_route_us_v1_restrictions_route_query_post) | **POST** /us/v1/restrictions/route-query | Retrieve flight restrictions applicable along route.


# **tfr_by_distance_us_v1_restrictions_distance_query_post**
> NOTAMsDistanceResponse tfr_by_distance_us_v1_restrictions_distance_query_post(notams_by_distance, x_api_key=x_api_key)

Retrieve flight restrictions applicable within given distance of location.

Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)

### Example


```python
import openapi_client
from openapi_client.models.notams_by_distance import NOTAMsByDistance
from openapi_client.models.notams_distance_response import NOTAMsDistanceResponse
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
    api_instance = openapi_client.FlightRestrictionsApi(api_client)
    notams_by_distance = openapi_client.NOTAMsByDistance() # NOTAMsByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve flight restrictions applicable within given distance of location.
        api_response = api_instance.tfr_by_distance_us_v1_restrictions_distance_query_post(notams_by_distance, x_api_key=x_api_key)
        print("The response of FlightRestrictionsApi->tfr_by_distance_us_v1_restrictions_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlightRestrictionsApi->tfr_by_distance_us_v1_restrictions_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notams_by_distance** | [**NOTAMsByDistance**](NOTAMsByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**NOTAMsDistanceResponse**](NOTAMsDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each restriction. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfr_by_poly_us_v1_restrictions_polygon_query_post**
> NOTAMsPolyResponse tfr_by_poly_us_v1_restrictions_polygon_query_post(notams_by_polygon, x_api_key=x_api_key)

Retrieve flight restrictions applicable within given area.

Retrieve Flight Restrictions located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example


```python
import openapi_client
from openapi_client.models.notams_by_polygon import NOTAMsByPolygon
from openapi_client.models.notams_poly_response import NOTAMsPolyResponse
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
    api_instance = openapi_client.FlightRestrictionsApi(api_client)
    notams_by_polygon = openapi_client.NOTAMsByPolygon() # NOTAMsByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve flight restrictions applicable within given area.
        api_response = api_instance.tfr_by_poly_us_v1_restrictions_polygon_query_post(notams_by_polygon, x_api_key=x_api_key)
        print("The response of FlightRestrictionsApi->tfr_by_poly_us_v1_restrictions_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlightRestrictionsApi->tfr_by_poly_us_v1_restrictions_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notams_by_polygon** | [**NOTAMsByPolygon**](NOTAMsByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**NOTAMsPolyResponse**](NOTAMsPolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each restriction. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfr_by_route_us_v1_restrictions_route_query_post**
> NOTAMsRouteResponse tfr_by_route_us_v1_restrictions_route_query_post(notams_by_route, x_api_key=x_api_key)

Retrieve flight restrictions applicable along route.

Retrieve Flight Restrictions applicable along your route. Request body parameters are: * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example


```python
import openapi_client
from openapi_client.models.notams_by_route import NOTAMsByRoute
from openapi_client.models.notams_route_response import NOTAMsRouteResponse
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
    api_instance = openapi_client.FlightRestrictionsApi(api_client)
    notams_by_route = openapi_client.NOTAMsByRoute() # NOTAMsByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve flight restrictions applicable along route.
        api_response = api_instance.tfr_by_route_us_v1_restrictions_route_query_post(notams_by_route, x_api_key=x_api_key)
        print("The response of FlightRestrictionsApi->tfr_by_route_us_v1_restrictions_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlightRestrictionsApi->tfr_by_route_us_v1_restrictions_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notams_by_route** | [**NOTAMsByRoute**](NOTAMsByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**NOTAMsRouteResponse**](NOTAMsRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each restriction. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


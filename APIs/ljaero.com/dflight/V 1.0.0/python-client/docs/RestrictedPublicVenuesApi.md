# openapi_client.RestrictedPublicVenuesApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ven_by_distance_us_v1_venues_distance_query_post**](RestrictedPublicVenuesApi.md#ven_by_distance_us_v1_venues_distance_query_post) | **POST** /us/v1/venues/distance-query | Retrieve all restricted public venues located within given distance of location.
[**ven_by_poly_us_v1_venues_polygon_query_post**](RestrictedPublicVenuesApi.md#ven_by_poly_us_v1_venues_polygon_query_post) | **POST** /us/v1/venues/polygon-query | Retrieve all restricted public venues located within given GeoJSON Polygon.
[**ven_by_route_us_v1_venues_route_query_post**](RestrictedPublicVenuesApi.md#ven_by_route_us_v1_venues_route_query_post) | **POST** /us/v1/venues/route-query | Retrieve all restricted public venues traversed by route.


# **ven_by_distance_us_v1_venues_distance_query_post**
> VenueDistanceResponse ven_by_distance_us_v1_venues_distance_query_post(venues_by_distance, x_api_key=x_api_key)

Retrieve all restricted public venues located within given distance of location.

Retrieve venues existing within given distance from a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)

### Example


```python
import openapi_client
from openapi_client.models.venue_distance_response import VenueDistanceResponse
from openapi_client.models.venues_by_distance import VenuesByDistance
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
    api_instance = openapi_client.RestrictedPublicVenuesApi(api_client)
    venues_by_distance = openapi_client.VenuesByDistance() # VenuesByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all restricted public venues located within given distance of location.
        api_response = api_instance.ven_by_distance_us_v1_venues_distance_query_post(venues_by_distance, x_api_key=x_api_key)
        print("The response of RestrictedPublicVenuesApi->ven_by_distance_us_v1_venues_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestrictedPublicVenuesApi->ven_by_distance_us_v1_venues_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venues_by_distance** | [**VenuesByDistance**](VenuesByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**VenueDistanceResponse**](VenueDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each venue found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ven_by_poly_us_v1_venues_polygon_query_post**
> VenuePolyResponse ven_by_poly_us_v1_venues_polygon_query_post(venues_by_polygon, x_api_key=x_api_key)

Retrieve all restricted public venues located within given GeoJSON Polygon.

Retrieve all restricted public venues located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example


```python
import openapi_client
from openapi_client.models.venue_poly_response import VenuePolyResponse
from openapi_client.models.venues_by_polygon import VenuesByPolygon
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
    api_instance = openapi_client.RestrictedPublicVenuesApi(api_client)
    venues_by_polygon = openapi_client.VenuesByPolygon() # VenuesByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all restricted public venues located within given GeoJSON Polygon.
        api_response = api_instance.ven_by_poly_us_v1_venues_polygon_query_post(venues_by_polygon, x_api_key=x_api_key)
        print("The response of RestrictedPublicVenuesApi->ven_by_poly_us_v1_venues_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestrictedPublicVenuesApi->ven_by_poly_us_v1_venues_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venues_by_polygon** | [**VenuesByPolygon**](VenuesByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**VenuePolyResponse**](VenuePolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each venue found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ven_by_route_us_v1_venues_route_query_post**
> VenueRouteResponse ven_by_route_us_v1_venues_route_query_post(venues_by_route, x_api_key=x_api_key)

Retrieve all restricted public venues traversed by route.

Retrieve all restricted public venues intersected by route. Request body parameters are: * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example


```python
import openapi_client
from openapi_client.models.venue_route_response import VenueRouteResponse
from openapi_client.models.venues_by_route import VenuesByRoute
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
    api_instance = openapi_client.RestrictedPublicVenuesApi(api_client)
    venues_by_route = openapi_client.VenuesByRoute() # VenuesByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all restricted public venues traversed by route.
        api_response = api_instance.ven_by_route_us_v1_venues_route_query_post(venues_by_route, x_api_key=x_api_key)
        print("The response of RestrictedPublicVenuesApi->ven_by_route_us_v1_venues_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestrictedPublicVenuesApi->ven_by_route_us_v1_venues_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venues_by_route** | [**VenuesByRoute**](VenuesByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**VenueRouteResponse**](VenueRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each venue found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.UASOperatingAreasApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uoa_by_distance_us_v1_uoa_distance_query_post**](UASOperatingAreasApi.md#uoa_by_distance_us_v1_uoa_distance_query_post) | **POST** /us/v1/uoa/distance-query | Retrieve UAS Operating Areas (UOAs) found within given distance of location.
[**uoa_by_poly_us_v1_uoa_polygon_query_post**](UASOperatingAreasApi.md#uoa_by_poly_us_v1_uoa_polygon_query_post) | **POST** /us/v1/uoa/polygon-query | Retrieve UAS Operating Areas (UOAs) found within given area.
[**uoa_by_route_us_v1_uoa_route_query_post**](UASOperatingAreasApi.md#uoa_by_route_us_v1_uoa_route_query_post) | **POST** /us/v1/uoa/route-query | Retrieve UAS Operating Areas (UOAs) found along route.


# **uoa_by_distance_us_v1_uoa_distance_query_post**
> UOAsDistanceResponse uoa_by_distance_us_v1_uoa_distance_query_post(uoas_by_distance, x_api_key=x_api_key)

Retrieve UAS Operating Areas (UOAs) found within given distance of location.

Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000)

### Example


```python
import openapi_client
from openapi_client.models.uoas_by_distance import UOAsByDistance
from openapi_client.models.uoas_distance_response import UOAsDistanceResponse
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
    api_instance = openapi_client.UASOperatingAreasApi(api_client)
    uoas_by_distance = openapi_client.UOAsByDistance() # UOAsByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve UAS Operating Areas (UOAs) found within given distance of location.
        api_response = api_instance.uoa_by_distance_us_v1_uoa_distance_query_post(uoas_by_distance, x_api_key=x_api_key)
        print("The response of UASOperatingAreasApi->uoa_by_distance_us_v1_uoa_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UASOperatingAreasApi->uoa_by_distance_us_v1_uoa_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uoas_by_distance** | [**UOAsByDistance**](UOAsByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**UOAsDistanceResponse**](UOAsDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each UOA. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uoa_by_poly_us_v1_uoa_polygon_query_post**
> UOAsPolyResponse uoa_by_poly_us_v1_uoa_polygon_query_post(uoas_by_polygon, x_api_key=x_api_key)

Retrieve UAS Operating Areas (UOAs) found within given area.

Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example


```python
import openapi_client
from openapi_client.models.uoas_by_polygon import UOAsByPolygon
from openapi_client.models.uoas_poly_response import UOAsPolyResponse
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
    api_instance = openapi_client.UASOperatingAreasApi(api_client)
    uoas_by_polygon = openapi_client.UOAsByPolygon() # UOAsByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve UAS Operating Areas (UOAs) found within given area.
        api_response = api_instance.uoa_by_poly_us_v1_uoa_polygon_query_post(uoas_by_polygon, x_api_key=x_api_key)
        print("The response of UASOperatingAreasApi->uoa_by_poly_us_v1_uoa_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UASOperatingAreasApi->uoa_by_poly_us_v1_uoa_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uoas_by_polygon** | [**UOAsByPolygon**](UOAsByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**UOAsPolyResponse**](UOAsPolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each UOA. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uoa_by_route_us_v1_uoa_route_query_post**
> UOAsRouteResponse uoa_by_route_us_v1_uoa_route_query_post(uoas_by_route, x_api_key=x_api_key)

Retrieve UAS Operating Areas (UOAs) found along route.

Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are: * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example


```python
import openapi_client
from openapi_client.models.uoas_by_route import UOAsByRoute
from openapi_client.models.uoas_route_response import UOAsRouteResponse
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
    api_instance = openapi_client.UASOperatingAreasApi(api_client)
    uoas_by_route = openapi_client.UOAsByRoute() # UOAsByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve UAS Operating Areas (UOAs) found along route.
        api_response = api_instance.uoa_by_route_us_v1_uoa_route_query_post(uoas_by_route, x_api_key=x_api_key)
        print("The response of UASOperatingAreasApi->uoa_by_route_us_v1_uoa_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UASOperatingAreasApi->uoa_by_route_us_v1_uoa_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uoas_by_route** | [**UOAsByRoute**](UOAsByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**UOAsRouteResponse**](UOAsRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GeoJSON FeatureCollection, one Feature for each UOA. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


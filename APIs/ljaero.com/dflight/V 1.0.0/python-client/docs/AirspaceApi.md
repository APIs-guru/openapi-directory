# openapi_client.AirspaceApi

All URIs are relative to *https://dflight-api.ljaero.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asp_by_distance_us_v1_airspace_distance_query_post**](AirspaceApi.md#asp_by_distance_us_v1_airspace_distance_query_post) | **POST** /us/v1/airspace/distance-query | Retrieve all requested types of airspace located within given distance of location.
[**asp_by_poly_us_v1_airspace_polygon_query_post**](AirspaceApi.md#asp_by_poly_us_v1_airspace_polygon_query_post) | **POST** /us/v1/airspace/polygon-query | Retrieve all requested types of airspace located within given GeoJSON Polygon.
[**asp_by_route_us_v1_airspace_route_query_post**](AirspaceApi.md#asp_by_route_us_v1_airspace_route_query_post) | **POST** /us/v1/airspace/route-query | Retrieve all requested types of airspace traversed by route.


# **asp_by_distance_us_v1_airspace_distance_query_post**
> AirspaceDistanceResponse asp_by_distance_us_v1_airspace_distance_query_post(airspace_by_distance, x_api_key=x_api_key)

Retrieve all requested types of airspace located within given distance of location.

Retrieve selected types of airspace existing within given distance from a point. Request body parameters are: * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees * distance:  distance in meters (max allowed value is 25000) * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.  Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows: * CAS (Controlled Airspace)     - *name*     - *cas_class*: B, C, D, or E2     - *floor*: integer value in ft MSL     - *ceiling*: integer value in ft MSL     - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC * SUA (Special Use Airspace)     - *name*     - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area     - *floor*: lower limit of the airspace     - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *ceiling*: upper limit of the airspace     - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *schedule*: default activation days/times (other times by NOTAM) * MAA (Miscellaneous Activity Area)     - *name*     - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY     - *use_times*: textual description of days/times when activity in the area should be expected * MTR (Military Training Route)     - *name*     - *use_times*: textual description of days/times when MTR is active/hot     - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route     - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example


```python
import openapi_client
from openapi_client.models.airspace_by_distance import AirspaceByDistance
from openapi_client.models.airspace_distance_response import AirspaceDistanceResponse
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
    api_instance = openapi_client.AirspaceApi(api_client)
    airspace_by_distance = openapi_client.AirspaceByDistance() # AirspaceByDistance | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all requested types of airspace located within given distance of location.
        api_response = api_instance.asp_by_distance_us_v1_airspace_distance_query_post(airspace_by_distance, x_api_key=x_api_key)
        print("The response of AirspaceApi->asp_by_distance_us_v1_airspace_distance_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AirspaceApi->asp_by_distance_us_v1_airspace_distance_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airspace_by_distance** | [**AirspaceByDistance**](AirspaceByDistance.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AirspaceDistanceResponse**](AirspaceDistanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of GeoJSON FeatureCollections, one for each Airspace type requested. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asp_by_poly_us_v1_airspace_polygon_query_post**
> AirspacePolyResponse asp_by_poly_us_v1_airspace_polygon_query_post(airspace_by_polygon, x_api_key=x_api_key)

Retrieve all requested types of airspace located within given GeoJSON Polygon.

Retrieve selected types of airspace located within given area. Request body parameters are: * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2. * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.  Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows: * CAS (Controlled Airspace)     - *name*     - *cas_class*: B, C, D, or E2     - *floor*: integer value in ft MSL     - *ceiling*: integer value in ft MSL     - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC * SUA (Special Use Airspace)     - *name*     - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area     - *floor*: lower limit of the airspace     - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *ceiling*: upper limit of the airspace     - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *schedule*: default activation days/times (other times by NOTAM) * MAA (Miscellaneous Activity Area)     - *name*     - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY     - *use_times*: textual description of days/times when activity in the area should be expected * MTR (Military Training Route)     - *name*     - *use_times*: textual description of days/times when MTR is active/hot     - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route     - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example


```python
import openapi_client
from openapi_client.models.airspace_by_polygon import AirspaceByPolygon
from openapi_client.models.airspace_poly_response import AirspacePolyResponse
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
    api_instance = openapi_client.AirspaceApi(api_client)
    airspace_by_polygon = openapi_client.AirspaceByPolygon() # AirspaceByPolygon | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all requested types of airspace located within given GeoJSON Polygon.
        api_response = api_instance.asp_by_poly_us_v1_airspace_polygon_query_post(airspace_by_polygon, x_api_key=x_api_key)
        print("The response of AirspaceApi->asp_by_poly_us_v1_airspace_polygon_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AirspaceApi->asp_by_poly_us_v1_airspace_polygon_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airspace_by_polygon** | [**AirspaceByPolygon**](AirspaceByPolygon.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AirspacePolyResponse**](AirspacePolyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of GeoJSON FeatureCollections, one for each Airspace type requested. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asp_by_route_us_v1_airspace_route_query_post**
> AirspaceRouteResponse asp_by_route_us_v1_airspace_route_query_post(airspace_by_route, x_api_key=x_api_key)

Retrieve all requested types of airspace traversed by route.

Retrieve selected types of airspace traversed by route. Request body parameters are: * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km. * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.  Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows: * CAS (Controlled Airspace)     - *name*     - *cas_class*: B, C, D, or E2     - *floor*: integer value in ft MSL     - *ceiling*: integer value in ft MSL     - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC * SUA (Special Use Airspace)     - *name*     - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area     - *floor*: lower limit of the airspace     - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *ceiling*: upper limit of the airspace     - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)     - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)     - *schedule*: default activation days/times (other times by NOTAM) * MAA (Miscellaneous Activity Area)     - *name*     - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY     - *use_times*: textual description of days/times when activity in the area should be expected * MTR (Military Training Route)     - *name*     - *use_times*: textual description of days/times when MTR is active/hot     - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route     - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example


```python
import openapi_client
from openapi_client.models.airspace_by_route import AirspaceByRoute
from openapi_client.models.airspace_route_response import AirspaceRouteResponse
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
    api_instance = openapi_client.AirspaceApi(api_client)
    airspace_by_route = openapi_client.AirspaceByRoute() # AirspaceByRoute | 
    x_api_key = 'x_api_key_example' # str |  (optional)

    try:
        # Retrieve all requested types of airspace traversed by route.
        api_response = api_instance.asp_by_route_us_v1_airspace_route_query_post(airspace_by_route, x_api_key=x_api_key)
        print("The response of AirspaceApi->asp_by_route_us_v1_airspace_route_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AirspaceApi->asp_by_route_us_v1_airspace_route_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airspace_by_route** | [**AirspaceByRoute**](AirspaceByRoute.md)|  | 
 **x_api_key** | **str**|  | [optional] 

### Return type

[**AirspaceRouteResponse**](AirspaceRouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of GeoJSON FeatureCollections, one for each Airspace type requested. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


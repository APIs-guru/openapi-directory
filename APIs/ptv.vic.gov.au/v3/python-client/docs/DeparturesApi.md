# openapi_client.DeparturesApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**departures_get_for_stop**](DeparturesApi.md#departures_get_for_stop) | **GET** /v3/departures/route_type/{route_type}/stop/{stop_id} | View departures for all routes from a stop
[**departures_get_for_stop_and_route**](DeparturesApi.md#departures_get_for_stop_and_route) | **GET** /v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id} | View departures for a specific route from a stop


# **departures_get_for_stop**
> V3DeparturesResponse departures_get_for_stop(route_type, stop_id, platform_numbers=platform_numbers, direction_id=direction_id, gtfs=gtfs, date_utc=date_utc, max_results=max_results, include_cancelled=include_cancelled, look_backwards=look_backwards, expand=expand, include_geopath=include_geopath, token=token, devid=devid, signature=signature)

View departures for all routes from a stop

### Example


```python
import openapi_client
from openapi_client.models.v3_departures_response import V3DeparturesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://timetableapi.ptv.vic.gov.au
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://timetableapi.ptv.vic.gov.au"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeparturesApi(api_client)
    route_type = 56 # int | Number identifying transport mode; values returned via RouteTypes API
    stop_id = 56 # int | Identifier of stop; values returned by Stops API
    platform_numbers = [56] # List[int] | Filter by platform number at stop (optional)
    direction_id = 56 # int | Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} (optional)
    gtfs = True # bool | Indicates that stop_id parameter will accept \"GTFS stop_id\" data (optional)
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) (optional)
    max_results = 56 # int | Maximum number of results returned (optional)
    include_cancelled = True # bool | Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only (optional)
    look_backwards = True # bool | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. (optional)
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.              Run must be expanded to receive VehiclePosition and VehicleDescriptor information. (optional)
    include_geopath = True # bool | Indicates if the route geopath should be returned (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View departures for all routes from a stop
        api_response = api_instance.departures_get_for_stop(route_type, stop_id, platform_numbers=platform_numbers, direction_id=direction_id, gtfs=gtfs, date_utc=date_utc, max_results=max_results, include_cancelled=include_cancelled, look_backwards=look_backwards, expand=expand, include_geopath=include_geopath, token=token, devid=devid, signature=signature)
        print("The response of DeparturesApi->departures_get_for_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeparturesApi->departures_get_for_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_type** | **int**| Number identifying transport mode; values returned via RouteTypes API | 
 **stop_id** | **int**| Identifier of stop; values returned by Stops API | 
 **platform_numbers** | [**List[int]**](int.md)| Filter by platform number at stop | [optional] 
 **direction_id** | **int**| Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} | [optional] 
 **gtfs** | **bool**| Indicates that stop_id parameter will accept \&quot;GTFS stop_id\&quot; data | [optional] 
 **date_utc** | **datetime**| Filter by the date and time of the request (ISO 8601 UTC format) (default &#x3D; current date and time) | [optional] 
 **max_results** | **int**| Maximum number of results returned | [optional] 
 **include_cancelled** | **bool**| Indicates if cancelled services (if they exist) are returned (default &#x3D; false) - metropolitan train only | [optional] 
 **look_backwards** | **bool**| Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default &#x3D; false). Requires max_results &amp;gt; 0. | [optional] 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.              Run must be expanded to receive VehiclePosition and VehicleDescriptor information. | [optional] 
 **include_geopath** | **bool**| Indicates if the route geopath should be returned | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DeparturesResponse**](V3DeparturesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service departures from the specified stop for all routes of the specified route type; departures are timetabled and real-time (if applicable). |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **departures_get_for_stop_and_route**
> V3DeparturesResponse departures_get_for_stop_and_route(route_type, stop_id, route_id, direction_id=direction_id, gtfs=gtfs, date_utc=date_utc, max_results=max_results, include_cancelled=include_cancelled, look_backwards=look_backwards, expand=expand, include_geopath=include_geopath, token=token, devid=devid, signature=signature)

View departures for a specific route from a stop

### Example


```python
import openapi_client
from openapi_client.models.v3_departures_response import V3DeparturesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://timetableapi.ptv.vic.gov.au
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://timetableapi.ptv.vic.gov.au"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeparturesApi(api_client)
    route_type = 56 # int | Number identifying transport mode; values returned via RouteTypes API
    stop_id = 56 # int | Identifier of stop; values returned by Stops API
    route_id = 'route_id_example' # str | Identifier of route; values returned by Routes API - v3/routes
    direction_id = 56 # int | Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} (optional)
    gtfs = True # bool | Indicates that stop_id parameter will accept \"GTFS stop_id\" data (optional)
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) (optional)
    max_results = 56 # int | Maximum number of results returned (optional)
    include_cancelled = True # bool | Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only (optional)
    look_backwards = True # bool | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. (optional)
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.              Run must be expanded to receive VehiclePosition and VehicleDescriptor information. (optional)
    include_geopath = True # bool | Indicates if the route geopath should be returned (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View departures for a specific route from a stop
        api_response = api_instance.departures_get_for_stop_and_route(route_type, stop_id, route_id, direction_id=direction_id, gtfs=gtfs, date_utc=date_utc, max_results=max_results, include_cancelled=include_cancelled, look_backwards=look_backwards, expand=expand, include_geopath=include_geopath, token=token, devid=devid, signature=signature)
        print("The response of DeparturesApi->departures_get_for_stop_and_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeparturesApi->departures_get_for_stop_and_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_type** | **int**| Number identifying transport mode; values returned via RouteTypes API | 
 **stop_id** | **int**| Identifier of stop; values returned by Stops API | 
 **route_id** | **str**| Identifier of route; values returned by Routes API - v3/routes | 
 **direction_id** | **int**| Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} | [optional] 
 **gtfs** | **bool**| Indicates that stop_id parameter will accept \&quot;GTFS stop_id\&quot; data | [optional] 
 **date_utc** | **datetime**| Filter by the date and time of the request (ISO 8601 UTC format) (default &#x3D; current date and time) | [optional] 
 **max_results** | **int**| Maximum number of results returned | [optional] 
 **include_cancelled** | **bool**| Indicates if cancelled services (if they exist) are returned (default &#x3D; false) - metropolitan train only | [optional] 
 **look_backwards** | **bool**| Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default &#x3D; false). Requires max_results &amp;gt; 0. | [optional] 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.              Run must be expanded to receive VehiclePosition and VehicleDescriptor information. | [optional] 
 **include_geopath** | **bool**| Indicates if the route geopath should be returned | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DeparturesResponse**](V3DeparturesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service departures from the specified stop for the specified route (and route type); departures are timetabled and real-time (if applicable). |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


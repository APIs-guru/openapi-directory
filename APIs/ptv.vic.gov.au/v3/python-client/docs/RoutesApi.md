# openapi_client.RoutesApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routes_one_or_more_routes**](RoutesApi.md#routes_one_or_more_routes) | **GET** /v3/routes | View route names and numbers for all routes
[**routes_route_from_id**](RoutesApi.md#routes_route_from_id) | **GET** /v3/routes/{route_id} | View route name and number for specific route ID


# **routes_one_or_more_routes**
> V3RouteResponse routes_one_or_more_routes(route_types=route_types, route_name=route_name, token=token, devid=devid, signature=signature)

View route names and numbers for all routes

### Example


```python
import openapi_client
from openapi_client.models.v3_route_response import V3RouteResponse
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
    api_instance = openapi_client.RoutesApi(api_client)
    route_types = [56] # List[int] | Filter by route_type; values returned via RouteTypes API (optional)
    route_name = 'route_name_example' # str | Filter by name  of route (accepts partial route name matches) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View route names and numbers for all routes
        api_response = api_instance.routes_one_or_more_routes(route_types=route_types, route_name=route_name, token=token, devid=devid, signature=signature)
        print("The response of RoutesApi->routes_one_or_more_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_one_or_more_routes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_types** | [**List[int]**](int.md)| Filter by route_type; values returned via RouteTypes API | [optional] 
 **route_name** | **str**| Filter by name  of route (accepts partial route name matches) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RouteResponse**](V3RouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Route names and numbers for all routes of all route types. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routes_route_from_id**
> V3RouteResponse routes_route_from_id(route_id, include_geopath=include_geopath, geopath_utc=geopath_utc, token=token, devid=devid, signature=signature)

View route name and number for specific route ID

### Example


```python
import openapi_client
from openapi_client.models.v3_route_response import V3RouteResponse
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
    api_instance = openapi_client.RoutesApi(api_client)
    route_id = 56 # int | Identifier of route; values returned by Departures, Directions and Disruptions APIs
    include_geopath = True # bool | Indicates kif geopath data will be returned (default = false) (optional)
    geopath_utc = '2013-10-20T19:20:30+01:00' # datetime | Filter geopaths by date (ISO 8601 UTC format) (default = current date) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View route name and number for specific route ID
        api_response = api_instance.routes_route_from_id(route_id, include_geopath=include_geopath, geopath_utc=geopath_utc, token=token, devid=devid, signature=signature)
        print("The response of RoutesApi->routes_route_from_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_route_from_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_id** | **int**| Identifier of route; values returned by Departures, Directions and Disruptions APIs | 
 **include_geopath** | **bool**| Indicates kif geopath data will be returned (default &#x3D; false) | [optional] 
 **geopath_utc** | **datetime**| Filter geopaths by date (ISO 8601 UTC format) (default &#x3D; current date) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RouteResponse**](V3RouteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The route name and number for the specified route ID. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


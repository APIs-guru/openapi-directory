# openapi_client.SearchApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_search**](SearchApi.md#search_search) | **GET** /v3/search/{search_term} | View stops, routes and myki ticket outlets that match the search term


# **search_search**
> V3SearchResult search_search(search_term, route_types=route_types, latitude=latitude, longitude=longitude, max_distance=max_distance, include_addresses=include_addresses, include_outlets=include_outlets, match_stop_by_suburb=match_stop_by_suburb, match_route_by_suburb=match_route_by_suburb, match_stop_by_gtfs_stop_id=match_stop_by_gtfs_stop_id, token=token, devid=devid, signature=signature)

View stops, routes and myki ticket outlets that match the search term

### Example


```python
import openapi_client
from openapi_client.models.v3_search_result import V3SearchResult
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
    api_instance = openapi_client.SearchApi(api_client)
    search_term = 'search_term_example' # str | Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)
    route_types = [56] # List[int] | Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified) (optional)
    latitude = 3.4 # float | Filter by geographic coordinate of latitude (optional)
    longitude = 3.4 # float | Filter by geographic coordinate of longitude (optional)
    max_distance = 3.4 # float | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (optional)
    include_addresses = True # bool | Placeholder for future development; currently unavailable (optional)
    include_outlets = True # bool | Indicates if outlets will be returned in response (default = true) (optional)
    match_stop_by_suburb = True # bool | Indicates whether to find stops by suburbs in the search term (default = true) (optional)
    match_route_by_suburb = True # bool | Indicates whether to find routes by suburbs in the search term (default = true) (optional)
    match_stop_by_gtfs_stop_id = True # bool | Indicates whether to search for stops according to a metlink stop ID (default = false) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View stops, routes and myki ticket outlets that match the search term
        api_response = api_instance.search_search(search_term, route_types=route_types, latitude=latitude, longitude=longitude, max_distance=max_distance, include_addresses=include_addresses, include_outlets=include_outlets, match_stop_by_suburb=match_stop_by_suburb, match_route_by_suburb=match_route_by_suburb, match_stop_by_gtfs_stop_id=match_stop_by_gtfs_stop_id, token=token, devid=devid, signature=signature)
        print("The response of SearchApi->search_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_term** | **str**| Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes) | 
 **route_types** | [**List[int]**](int.md)| Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified) | [optional] 
 **latitude** | **float**| Filter by geographic coordinate of latitude | [optional] 
 **longitude** | **float**| Filter by geographic coordinate of longitude | [optional] 
 **max_distance** | **float**| Filter by maximum distance (in metres) from location specified via latitude and longitude parameters | [optional] 
 **include_addresses** | **bool**| Placeholder for future development; currently unavailable | [optional] 
 **include_outlets** | **bool**| Indicates if outlets will be returned in response (default &#x3D; true) | [optional] 
 **match_stop_by_suburb** | **bool**| Indicates whether to find stops by suburbs in the search term (default &#x3D; true) | [optional] 
 **match_route_by_suburb** | **bool**| Indicates whether to find routes by suburbs in the search term (default &#x3D; true) | [optional] 
 **match_stop_by_gtfs_stop_id** | **bool**| Indicates whether to search for stops according to a metlink stop ID (default &#x3D; false) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3SearchResult**](V3SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default). |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


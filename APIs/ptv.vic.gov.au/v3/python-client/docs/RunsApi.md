# openapi_client.RunsApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runs_for_route**](RunsApi.md#runs_for_route) | **GET** /v3/runs/route/{route_id} | View all trip/service runs for a specific route ID
[**runs_for_route_and_route_type**](RunsApi.md#runs_for_route_and_route_type) | **GET** /v3/runs/route/{route_id}/route_type/{route_type} | View all trip/service runs for a specific route ID and route type
[**runs_for_run**](RunsApi.md#runs_for_run) | **GET** /v3/runs/{run_ref} | View all trip/service runs for a specific run_ref
[**runs_for_run_and_route_type**](RunsApi.md#runs_for_run_and_route_type) | **GET** /v3/runs/{run_ref}/route_type/{route_type} | View the trip/service run for a specific run_ref and route type


# **runs_for_route**
> V3RunsResponse runs_for_route(route_id, expand=expand, date_utc=date_utc, token=token, devid=devid, signature=signature)

View all trip/service runs for a specific route ID

### Example


```python
import openapi_client
from openapi_client.models.v3_runs_response import V3RunsResponse
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
    api_instance = openapi_client.RunsApi(api_client)
    route_id = 56 # int | Identifier of route; values returned by Routes API - v3/routes.
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None. (optional)
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Date of the request. (optional - defaults to now) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all trip/service runs for a specific route ID
        api_response = api_instance.runs_for_route(route_id, expand=expand, date_utc=date_utc, token=token, devid=devid, signature=signature)
        print("The response of RunsApi->runs_for_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_for_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_id** | **int**| Identifier of route; values returned by Routes API - v3/routes. | 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None. | [optional] 
 **date_utc** | **datetime**| Date of the request. (optional - defaults to now) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RunsResponse**](V3RunsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All trip/service run details for the specified route ID. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_for_route_and_route_type**
> V3RunsResponse runs_for_route_and_route_type(route_id, route_type, expand, date_utc=date_utc, token=token, devid=devid, signature=signature)

View all trip/service runs for a specific route ID and route type

### Example


```python
import openapi_client
from openapi_client.models.v3_runs_response import V3RunsResponse
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
    api_instance = openapi_client.RunsApi(api_client)
    route_id = 56 # int | Identifier of route; values returned by Routes API - v3/routes.
    route_type = 56 # int | Number identifying transport mode; values returned via RouteTypes API
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All.
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Date of the request. (optional - defaults to now) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all trip/service runs for a specific route ID and route type
        api_response = api_instance.runs_for_route_and_route_type(route_id, route_type, expand, date_utc=date_utc, token=token, devid=devid, signature=signature)
        print("The response of RunsApi->runs_for_route_and_route_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_for_route_and_route_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_id** | **int**| Identifier of route; values returned by Routes API - v3/routes. | 
 **route_type** | **int**| Number identifying transport mode; values returned via RouteTypes API | 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All. | 
 **date_utc** | **datetime**| Date of the request. (optional - defaults to now) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RunsResponse**](V3RunsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All trip/service run details for the specified route ID and route type. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_for_run**
> V3RunsResponse runs_for_run(run_ref, expand, date_utc=date_utc, include_geopath=include_geopath, token=token, devid=devid, signature=signature)

View all trip/service runs for a specific run_ref

### Example


```python
import openapi_client
from openapi_client.models.v3_runs_response import V3RunsResponse
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
    api_instance = openapi_client.RunsApi(api_client)
    run_ref = 'run_ref_example' # str | The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Date of the request. (optional - defaults to now) (optional)
    include_geopath = True # bool | Indicates if geopath data will be returned (default = false) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all trip/service runs for a specific run_ref
        api_response = api_instance.runs_for_run(run_ref, expand, date_utc=date_utc, include_geopath=include_geopath, token=token, devid=devid, signature=signature)
        print("The response of RunsApi->runs_for_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_for_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_ref** | **str**| The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead. | 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None. | 
 **date_utc** | **datetime**| Date of the request. (optional - defaults to now) | [optional] 
 **include_geopath** | **bool**| Indicates if geopath data will be returned (default &#x3D; false) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RunsResponse**](V3RunsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All trip/service run details for the specified run_ref. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_for_run_and_route_type**
> V3RunResponse runs_for_run_and_route_type(run_ref, route_type, expand, date_utc=date_utc, include_geopath=include_geopath, token=token, devid=devid, signature=signature)

View the trip/service run for a specific run_ref and route type

### Example


```python
import openapi_client
from openapi_client.models.v3_run_response import V3RunResponse
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
    api_instance = openapi_client.RunsApi(api_client)
    run_ref = 'run_ref_example' # str | The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
    route_type = 56 # int | Number identifying transport mode; values returned via RouteTypes API
    expand = ['expand_example'] # List[str] | List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
    date_utc = '2013-10-20T19:20:30+01:00' # datetime | Date of the request. (optional - defaults to now) (optional)
    include_geopath = True # bool | Indicates if geopath data will be returned (default = false) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View the trip/service run for a specific run_ref and route type
        api_response = api_instance.runs_for_run_and_route_type(run_ref, route_type, expand, date_utc=date_utc, include_geopath=include_geopath, token=token, devid=devid, signature=signature)
        print("The response of RunsApi->runs_for_run_and_route_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_for_run_and_route_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_ref** | **str**| The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead. | 
 **route_type** | **int**| Number identifying transport mode; values returned via RouteTypes API | 
 **expand** | [**List[str]**](str.md)| List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None. | 
 **date_utc** | **datetime**| Date of the request. (optional - defaults to now) | [optional] 
 **include_geopath** | **bool**| Indicates if geopath data will be returned (default &#x3D; false) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RunResponse**](V3RunResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The trip/service run details for the run_ref and route type specified. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


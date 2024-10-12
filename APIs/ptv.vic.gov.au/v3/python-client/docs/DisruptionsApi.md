# openapi_client.DisruptionsApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disruptions_get_all_disruptions**](DisruptionsApi.md#disruptions_get_all_disruptions) | **GET** /v3/disruptions | View all disruptions for all route types
[**disruptions_get_disruption_by_id**](DisruptionsApi.md#disruptions_get_disruption_by_id) | **GET** /v3/disruptions/{disruption_id} | View a specific disruption
[**disruptions_get_disruption_modes**](DisruptionsApi.md#disruptions_get_disruption_modes) | **GET** /v3/disruptions/modes | Get all disruption modes
[**disruptions_get_disruptions_by_route**](DisruptionsApi.md#disruptions_get_disruptions_by_route) | **GET** /v3/disruptions/route/{route_id} | View all disruptions for a particular route
[**disruptions_get_disruptions_by_route_and_stop**](DisruptionsApi.md#disruptions_get_disruptions_by_route_and_stop) | **GET** /v3/disruptions/route/{route_id}/stop/{stop_id} | View all disruptions for a particular route and stop
[**disruptions_get_disruptions_by_stop**](DisruptionsApi.md#disruptions_get_disruptions_by_stop) | **GET** /v3/disruptions/stop/{stop_id} | View all disruptions for a particular stop


# **disruptions_get_all_disruptions**
> V3DisruptionsResponse disruptions_get_all_disruptions(route_types=route_types, disruption_modes=disruption_modes, disruption_status=disruption_status, token=token, devid=devid, signature=signature)

View all disruptions for all route types

### Example


```python
import openapi_client
from openapi_client.models.v3_disruptions_response import V3DisruptionsResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    route_types = [56] # List[int] | Filter by route_type; values returned via RouteTypes API (optional)
    disruption_modes = [56] # List[int] | Filter by disruption_mode; values returned via v3/disruptions/modes API (optional)
    disruption_status = 'disruption_status_example' # str | Filter by status of disruption (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all disruptions for all route types
        api_response = api_instance.disruptions_get_all_disruptions(route_types=route_types, disruption_modes=disruption_modes, disruption_status=disruption_status, token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_all_disruptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_all_disruptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_types** | [**List[int]**](int.md)| Filter by route_type; values returned via RouteTypes API | [optional] 
 **disruption_modes** | [**List[int]**](int.md)| Filter by disruption_mode; values returned via v3/disruptions/modes API | [optional] 
 **disruption_status** | **str**| Filter by status of disruption | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionsResponse**](V3DisruptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All disruption information for all route types. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disruptions_get_disruption_by_id**
> V3DisruptionResponse disruptions_get_disruption_by_id(disruption_id, token=token, devid=devid, signature=signature)

View a specific disruption

### Example


```python
import openapi_client
from openapi_client.models.v3_disruption_response import V3DisruptionResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    disruption_id = 56 # int | Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View a specific disruption
        api_response = api_instance.disruptions_get_disruption_by_id(disruption_id, token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_disruption_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_disruption_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disruption_id** | **int**| Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id} | 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionResponse**](V3DisruptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disruption information for the specified disruption ID. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disruptions_get_disruption_modes**
> V3DisruptionModesResponse disruptions_get_disruption_modes(token=token, devid=devid, signature=signature)

Get all disruption modes

### Example


```python
import openapi_client
from openapi_client.models.v3_disruption_modes_response import V3DisruptionModesResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # Get all disruption modes
        api_response = api_instance.disruptions_get_disruption_modes(token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_disruption_modes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_disruption_modes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionModesResponse**](V3DisruptionModesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disruption specific modes |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disruptions_get_disruptions_by_route**
> V3DisruptionsResponse disruptions_get_disruptions_by_route(route_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)

View all disruptions for a particular route

### Example


```python
import openapi_client
from openapi_client.models.v3_disruptions_response import V3DisruptionsResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    route_id = 56 # int | Identifier of route; values returned by Routes API - v3/routes
    disruption_status = 'disruption_status_example' # str | Filter by status of disruption (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all disruptions for a particular route
        api_response = api_instance.disruptions_get_disruptions_by_route(route_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_disruptions_by_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_disruptions_by_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_id** | **int**| Identifier of route; values returned by Routes API - v3/routes | 
 **disruption_status** | **str**| Filter by status of disruption | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionsResponse**](V3DisruptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All disruption information (if any exists) for the specified route. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disruptions_get_disruptions_by_route_and_stop**
> V3DisruptionsResponse disruptions_get_disruptions_by_route_and_stop(route_id, stop_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)

View all disruptions for a particular route and stop

### Example


```python
import openapi_client
from openapi_client.models.v3_disruptions_response import V3DisruptionsResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    route_id = 56 # int | Identifier of route; values returned by Routes API - v3/routes
    stop_id = 56 # int | Identifier of stop; values returned by Stops API - v3/stops
    disruption_status = 'disruption_status_example' # str | Filter by status of disruption (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all disruptions for a particular route and stop
        api_response = api_instance.disruptions_get_disruptions_by_route_and_stop(route_id, stop_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_disruptions_by_route_and_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_disruptions_by_route_and_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route_id** | **int**| Identifier of route; values returned by Routes API - v3/routes | 
 **stop_id** | **int**| Identifier of stop; values returned by Stops API - v3/stops | 
 **disruption_status** | **str**| Filter by status of disruption | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionsResponse**](V3DisruptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All disruption information (if any exists) for the specified route and stop. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disruptions_get_disruptions_by_stop**
> V3DisruptionsResponse disruptions_get_disruptions_by_stop(stop_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)

View all disruptions for a particular stop

### Example


```python
import openapi_client
from openapi_client.models.v3_disruptions_response import V3DisruptionsResponse
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
    api_instance = openapi_client.DisruptionsApi(api_client)
    stop_id = 56 # int | Identifier of stop; values returned by Stops API - v3/stops
    disruption_status = 'disruption_status_example' # str | Filter by status of disruption (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all disruptions for a particular stop
        api_response = api_instance.disruptions_get_disruptions_by_stop(stop_id, disruption_status=disruption_status, token=token, devid=devid, signature=signature)
        print("The response of DisruptionsApi->disruptions_get_disruptions_by_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisruptionsApi->disruptions_get_disruptions_by_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stop_id** | **int**| Identifier of stop; values returned by Stops API - v3/stops | 
 **disruption_status** | **str**| Filter by status of disruption | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3DisruptionsResponse**](V3DisruptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All disruption information (if any exists) for the specified stop. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


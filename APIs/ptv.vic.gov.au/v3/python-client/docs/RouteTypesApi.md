# openapi_client.RouteTypesApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**route_types_get_route_types**](RouteTypesApi.md#route_types_get_route_types) | **GET** /v3/route_types | View all route types and their names


# **route_types_get_route_types**
> V3RouteTypesResponse route_types_get_route_types(token=token, devid=devid, signature=signature)

View all route types and their names

### Example


```python
import openapi_client
from openapi_client.models.v3_route_types_response import V3RouteTypesResponse
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
    api_instance = openapi_client.RouteTypesApi(api_client)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # View all route types and their names
        api_response = api_instance.route_types_get_route_types(token=token, devid=devid, signature=signature)
        print("The response of RouteTypesApi->route_types_get_route_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteTypesApi->route_types_get_route_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3RouteTypesResponse**](V3RouteTypesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All route types (i.e. identifiers of transport modes) and their names. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


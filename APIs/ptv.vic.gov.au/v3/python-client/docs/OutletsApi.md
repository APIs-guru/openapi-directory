# openapi_client.OutletsApi

All URIs are relative to *http://timetableapi.ptv.vic.gov.au*

Method | HTTP request | Description
------------- | ------------- | -------------
[**outlets_get_all_outlets**](OutletsApi.md#outlets_get_all_outlets) | **GET** /v3/outlets | List all ticket outlets
[**outlets_get_outlets_by_geolocation**](OutletsApi.md#outlets_get_outlets_by_geolocation) | **GET** /v3/outlets/location/{latitude},{longitude} | List ticket outlets near a specific location


# **outlets_get_all_outlets**
> V3OutletResponse outlets_get_all_outlets(max_results=max_results, token=token, devid=devid, signature=signature)

List all ticket outlets

### Example


```python
import openapi_client
from openapi_client.models.v3_outlet_response import V3OutletResponse
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
    api_instance = openapi_client.OutletsApi(api_client)
    max_results = 56 # int | Maximum number of results returned (default = 30) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # List all ticket outlets
        api_response = api_instance.outlets_get_all_outlets(max_results=max_results, token=token, devid=devid, signature=signature)
        print("The response of OutletsApi->outlets_get_all_outlets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutletsApi->outlets_get_all_outlets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max_results** | **int**| Maximum number of results returned (default &#x3D; 30) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3OutletResponse**](V3OutletResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ticket outlets. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outlets_get_outlets_by_geolocation**
> V3OutletGeolocationResponse outlets_get_outlets_by_geolocation(latitude, longitude, max_distance=max_distance, max_results=max_results, token=token, devid=devid, signature=signature)

List ticket outlets near a specific location

### Example


```python
import openapi_client
from openapi_client.models.v3_outlet_geolocation_response import V3OutletGeolocationResponse
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
    api_instance = openapi_client.OutletsApi(api_client)
    latitude = 3.4 # float | Geographic coordinate of latitude
    longitude = 3.4 # float | Geographic coordinate of longitude
    max_distance = 3.4 # float | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300) (optional)
    max_results = 56 # int | Maximum number of results returned (default = 30) (optional)
    token = 'token_example' # str | Please ignore (optional)
    devid = 'devid_example' # str | Your developer id (optional)
    signature = 'signature_example' # str | Authentication signature for request (optional)

    try:
        # List ticket outlets near a specific location
        api_response = api_instance.outlets_get_outlets_by_geolocation(latitude, longitude, max_distance=max_distance, max_results=max_results, token=token, devid=devid, signature=signature)
        print("The response of OutletsApi->outlets_get_outlets_by_geolocation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutletsApi->outlets_get_outlets_by_geolocation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **float**| Geographic coordinate of latitude | 
 **longitude** | **float**| Geographic coordinate of longitude | 
 **max_distance** | **float**| Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default &#x3D; 300) | [optional] 
 **max_results** | **int**| Maximum number of results returned (default &#x3D; 30) | [optional] 
 **token** | **str**| Please ignore | [optional] 
 **devid** | **str**| Your developer id | [optional] 
 **signature** | **str**| Authentication signature for request | [optional] 

### Return type

[**V3OutletGeolocationResponse**](V3OutletGeolocationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ticket outlets near the specified location. |  -  |
**400** | Invalid Request |  -  |
**403** | Access Denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


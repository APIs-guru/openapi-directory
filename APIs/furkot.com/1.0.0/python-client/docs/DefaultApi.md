# openapi_client.DefaultApi

All URIs are relative to *https://trips.furkot.com/pub/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trip_get**](DefaultApi.md#trip_get) | **GET** /trip | 
[**trip_trip_id_stop_get**](DefaultApi.md#trip_trip_id_stop_get) | **GET** /trip/{trip_id}/stop | 


# **trip_get**
> List[Trip] trip_get()



list user's trips

### Example

* OAuth Authentication (furkot_auth_access_code):
* OAuth Authentication (furkot_auth_implicit):

```python
import openapi_client
from openapi_client.models.trip import Trip
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trips.furkot.com/pub/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trips.furkot.com/pub/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.trip_get()
        print("The response of DefaultApi->trip_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->trip_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Trip]**](Trip.md)

### Authorization

[furkot_auth_access_code](../README.md#furkot_auth_access_code), [furkot_auth_implicit](../README.md#furkot_auth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trip_trip_id_stop_get**
> List[Step] trip_trip_id_stop_get(trip_id)



list stops for a trip identified by {trip_id}

### Example

* OAuth Authentication (furkot_auth_access_code):
* OAuth Authentication (furkot_auth_implicit):

```python
import openapi_client
from openapi_client.models.step import Step
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://trips.furkot.com/pub/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://trips.furkot.com/pub/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    trip_id = 'trip_id_example' # str | id of the trip

    try:
        api_response = api_instance.trip_trip_id_stop_get(trip_id)
        print("The response of DefaultApi->trip_trip_id_stop_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->trip_trip_id_stop_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trip_id** | **str**| id of the trip | 

### Return type

[**List[Step]**](Step.md)

### Authorization

[furkot_auth_access_code](../README.md#furkot_auth_access_code), [furkot_auth_implicit](../README.md#furkot_auth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.RegisterForRealtimeApiApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**register_for_realtime_api_delete**](RegisterForRealtimeApiApi.md#register_for_realtime_api_delete) | **DELETE** /api/RegisterForRealtimeApi/{id} | Deletes a realtime API registration.
[**register_for_realtime_api_get**](RegisterForRealtimeApiApi.md#register_for_realtime_api_get) | **GET** /api/RegisterForRealtimeApi | Gets all registrations for the Realtime API.
[**register_for_realtime_api_post**](RegisterForRealtimeApiApi.md#register_for_realtime_api_post) | **POST** /api/RegisterForRealtimeApi | Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.               More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx


# **register_for_realtime_api_delete**
> register_for_realtime_api_delete(id)

Deletes a realtime API registration.

Deletes a realtime API registration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegisterForRealtimeApiApi(api_client)
    id = 'id_example' # str | The ID of the realtime API registration

    try:
        # Deletes a realtime API registration.
        api_instance.register_for_realtime_api_delete(id)
    except Exception as e:
        print("Exception when calling RegisterForRealtimeApiApi->register_for_realtime_api_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the realtime API registration | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_for_realtime_api_get**
> List[RegisterRealtimeApiData] register_for_realtime_api_get()

Gets all registrations for the Realtime API.

Gets all registrations for the Realtime API.

### Example


```python
import openapi_client
from openapi_client.models.register_realtime_api_data import RegisterRealtimeApiData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegisterForRealtimeApiApi(api_client)

    try:
        # Gets all registrations for the Realtime API.
        api_response = api_instance.register_for_realtime_api_get()
        print("The response of RegisterForRealtimeApiApi->register_for_realtime_api_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegisterForRealtimeApiApi->register_for_realtime_api_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RegisterRealtimeApiData]**](RegisterRealtimeApiData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_for_realtime_api_post**
> register_for_realtime_api_post(register_realtime_api_data)

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.               More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example


```python
import openapi_client
from openapi_client.models.register_realtime_api_data import RegisterRealtimeApiData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegisterForRealtimeApiApi(api_client)
    register_realtime_api_data = openapi_client.RegisterRealtimeApiData() # RegisterRealtimeApiData | 

    try:
        # Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.               More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
        api_instance.register_for_realtime_api_post(register_realtime_api_data)
    except Exception as e:
        print("Exception when calling RegisterForRealtimeApiApi->register_for_realtime_api_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_realtime_api_data** | [**RegisterRealtimeApiData**](RegisterRealtimeApiData.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


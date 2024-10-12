# openapi_client.DevicesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_list**](DevicesApi.md#devices_list) | **GET** /devices | 
[**devices_read**](DevicesApi.md#devices_read) | **GET** /devices/{id} | 


# **devices_list**
> List[Device] devices_list(id=id, name=name, capability_media_type=capability_media_type, capability_speed=capability_speed, capability_speed__lt=capability_speed__lt, capability_speed__lte=capability_speed__lte, capability_speed__gt=capability_speed__gt, capability_speed__gte=capability_speed__gte, facility=facility, pop=pop, metro_area_network=metro_area_network)



List available devices

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    name = 'name_example' # str | Filter by name (optional)
    capability_media_type = 'capability_media_type_example' # str | Filter by capability_media_type (optional)
    capability_speed = 56 # int | Filter by capability_speed (optional)
    capability_speed__lt = 56 # int | Filter by capability_speed__lt (optional)
    capability_speed__lte = 56 # int | Filter by capability_speed__lte (optional)
    capability_speed__gt = 56 # int | Filter by capability_speed__gt (optional)
    capability_speed__gte = 56 # int | Filter by capability_speed__gte (optional)
    facility = 'facility_example' # str | Filter by facility (optional)
    pop = 'pop_example' # str | Filter by pop (optional)
    metro_area_network = 'metro_area_network_example' # str | Filter by metro_area_network (optional)

    try:
        api_response = api_instance.devices_list(id=id, name=name, capability_media_type=capability_media_type, capability_speed=capability_speed, capability_speed__lt=capability_speed__lt, capability_speed__lte=capability_speed__lte, capability_speed__gt=capability_speed__gt, capability_speed__gte=capability_speed__gte, facility=facility, pop=pop, metro_area_network=metro_area_network)
        print("The response of DevicesApi->devices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **capability_media_type** | **str**| Filter by capability_media_type | [optional] 
 **capability_speed** | **int**| Filter by capability_speed | [optional] 
 **capability_speed__lt** | **int**| Filter by capability_speed__lt | [optional] 
 **capability_speed__lte** | **int**| Filter by capability_speed__lte | [optional] 
 **capability_speed__gt** | **int**| Filter by capability_speed__gt | [optional] 
 **capability_speed__gte** | **int**| Filter by capability_speed__gte | [optional] 
 **facility** | **str**| Filter by facility | [optional] 
 **pop** | **str**| Filter by pop | [optional] 
 **metro_area_network** | **str**| Filter by metro_area_network | [optional] 

### Return type

[**List[Device]**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Device |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_read**
> Device devices_read(id)



Get a specific device identified by id

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.devices_read(id)
        print("The response of DevicesApi->devices_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**Device**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.PortsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ports_list**](PortsApi.md#ports_list) | **GET** /ports | 
[**ports_read**](PortsApi.md#ports_read) | **GET** /ports/{id} | 


# **ports_list**
> List[Port] ports_list(id=id, state=state, state__is_not=state__is_not, media_type=media_type, pop=pop, name=name, external_ref=external_ref, device=device, speed=speed, connection=connection)



List all ports.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.port import Port
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
    api_instance = openapi_client.PortsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    state = 'state_example' # str | Filter by state (optional)
    state__is_not = 'state__is_not_example' # str | Filter by state__is_not (optional)
    media_type = 'media_type_example' # str | Filter by media_type (optional)
    pop = 'pop_example' # str | Filter by pop (optional)
    name = 'name_example' # str | Filter by name (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)
    device = 'device_example' # str | Filter by device (optional)
    speed = 'speed_example' # str | Filter by speed (optional)
    connection = 'connection_example' # str | Filter by connection (optional)

    try:
        api_response = api_instance.ports_list(id=id, state=state, state__is_not=state__is_not, media_type=media_type, pop=pop, name=name, external_ref=external_ref, device=device, speed=speed, connection=connection)
        print("The response of PortsApi->ports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **state** | **str**| Filter by state | [optional] 
 **state__is_not** | **str**| Filter by state__is_not | [optional] 
 **media_type** | **str**| Filter by media_type | [optional] 
 **pop** | **str**| Filter by pop | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 
 **device** | **str**| Filter by device | [optional] 
 **speed** | **str**| Filter by speed | [optional] 
 **connection** | **str**| Filter by connection | [optional] 

### Return type

[**List[Port]**](Port.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Port |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ports_read**
> Port ports_read(id)



Retrieve a port.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.port import Port
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
    api_instance = openapi_client.PortsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.ports_read(id)
        print("The response of PortsApi->ports_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**Port**](Port.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Port |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


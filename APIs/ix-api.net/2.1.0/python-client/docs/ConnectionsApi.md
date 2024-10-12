# openapi_client.ConnectionsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connections_list**](ConnectionsApi.md#connections_list) | **GET** /connections | 
[**connections_read**](ConnectionsApi.md#connections_read) | **GET** /connections/{id} | 


# **connections_list**
> List[Connection] connections_list(id=id, state=state, state__is_not=state__is_not, mode=mode, mode__is_not=mode__is_not, name=name, metro_area_network=metro_area_network, pop=pop, facility=facility, external_ref=external_ref)



List all `connection`s.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.connection import Connection
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    state = 'state_example' # str | Filter by state (optional)
    state__is_not = 'state__is_not_example' # str | Filter by state__is_not (optional)
    mode = 'mode_example' # str | Filter by mode (optional)
    mode__is_not = 'mode__is_not_example' # str | Filter by mode__is_not (optional)
    name = 'name_example' # str | Filter by name (optional)
    metro_area_network = 'metro_area_network_example' # str | Filter by metro_area_network (optional)
    pop = 'pop_example' # str | Filter by pop (optional)
    facility = 'facility_example' # str | Filter by facility (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)

    try:
        api_response = api_instance.connections_list(id=id, state=state, state__is_not=state__is_not, mode=mode, mode__is_not=mode__is_not, name=name, metro_area_network=metro_area_network, pop=pop, facility=facility, external_ref=external_ref)
        print("The response of ConnectionsApi->connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **state** | **str**| Filter by state | [optional] 
 **state__is_not** | **str**| Filter by state__is_not | [optional] 
 **mode** | **str**| Filter by mode | [optional] 
 **mode__is_not** | **str**| Filter by mode__is_not | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **metro_area_network** | **str**| Filter by metro_area_network | [optional] 
 **pop** | **str**| Filter by pop | [optional] 
 **facility** | **str**| Filter by facility | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 

### Return type

[**List[Connection]**](Connection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Connection |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_read**
> Connection connections_read(id)



Read a `connection`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.connection import Connection
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.connections_read(id)
        print("The response of ConnectionsApi->connections_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**Connection**](Connection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


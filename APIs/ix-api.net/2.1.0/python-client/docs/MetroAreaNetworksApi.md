# openapi_client.MetroAreaNetworksApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metro_area_networks_list**](MetroAreaNetworksApi.md#metro_area_networks_list) | **GET** /metro-area-networks | 
[**metro_area_networks_read**](MetroAreaNetworksApi.md#metro_area_networks_read) | **GET** /metro-area-networks/{id} | 


# **metro_area_networks_list**
> List[MetroAreaNetwork] metro_area_networks_list(id=id, name=name, metro_area=metro_area, service_provider=service_provider)



List all MetroAreaNetworks

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.metro_area_network import MetroAreaNetwork
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
    api_instance = openapi_client.MetroAreaNetworksApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    name = 'name_example' # str | Filter by name (optional)
    metro_area = 'metro_area_example' # str | Filter by metro_area (optional)
    service_provider = 'service_provider_example' # str | Filter by service_provider (optional)

    try:
        api_response = api_instance.metro_area_networks_list(id=id, name=name, metro_area=metro_area, service_provider=service_provider)
        print("The response of MetroAreaNetworksApi->metro_area_networks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetroAreaNetworksApi->metro_area_networks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **metro_area** | **str**| Filter by metro_area | [optional] 
 **service_provider** | **str**| Filter by service_provider | [optional] 

### Return type

[**List[MetroAreaNetwork]**](MetroAreaNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: MetroAreaNetwork |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metro_area_networks_read**
> MetroAreaNetwork metro_area_networks_read(id)



Retrieve a MetroAreaNetwork

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.metro_area_network import MetroAreaNetwork
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
    api_instance = openapi_client.MetroAreaNetworksApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.metro_area_networks_read(id)
        print("The response of MetroAreaNetworksApi->metro_area_networks_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetroAreaNetworksApi->metro_area_networks_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**MetroAreaNetwork**](MetroAreaNetwork.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MetroAreaNetwork |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


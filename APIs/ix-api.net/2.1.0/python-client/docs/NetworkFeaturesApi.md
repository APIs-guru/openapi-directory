# openapi_client.NetworkFeaturesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_features_list**](NetworkFeaturesApi.md#network_features_list) | **GET** /network-features | 
[**network_features_read**](NetworkFeaturesApi.md#network_features_read) | **GET** /network-features/{id} | 


# **network_features_list**
> List[NetworkFeature] network_features_list(id=id, type=type, required=required, network_service=network_service, name=name)



List available network features.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature import NetworkFeature
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
    api_instance = openapi_client.NetworkFeaturesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    type = 'type_example' # str | Filter by type (optional)
    required = 'required_example' # str | Filter by required (optional)
    network_service = 'network_service_example' # str | Filter by network_service (optional)
    name = 'name_example' # str | Filter by name (optional)

    try:
        api_response = api_instance.network_features_list(id=id, type=type, required=required, network_service=network_service, name=name)
        print("The response of NetworkFeaturesApi->network_features_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeaturesApi->network_features_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **type** | **str**| Filter by type | [optional] 
 **required** | **str**| Filter by required | [optional] 
 **network_service** | **str**| Filter by network_service | [optional] 
 **name** | **str**| Filter by name | [optional] 

### Return type

[**List[NetworkFeature]**](NetworkFeature.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Network Feature |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_features_read**
> NetworkFeature network_features_read(id)



Get a single network feature by it's id.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.network_feature import NetworkFeature
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
    api_instance = openapi_client.NetworkFeaturesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.network_features_read(id)
        print("The response of NetworkFeaturesApi->network_features_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFeaturesApi->network_features_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**NetworkFeature**](NetworkFeature.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Network Feature |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


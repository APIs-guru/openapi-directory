# openapi_client.ExpressRouteCircuitAuthorizationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_circuit_authorizations_create_or_update**](ExpressRouteCircuitAuthorizationsApi.md#express_route_circuit_authorizations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName} | 
[**express_route_circuit_authorizations_delete**](ExpressRouteCircuitAuthorizationsApi.md#express_route_circuit_authorizations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName} | 
[**express_route_circuit_authorizations_get**](ExpressRouteCircuitAuthorizationsApi.md#express_route_circuit_authorizations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName} | 
[**express_route_circuit_authorizations_list**](ExpressRouteCircuitAuthorizationsApi.md#express_route_circuit_authorizations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations | 


# **express_route_circuit_authorizations_create_or_update**
> ExpressRouteCircuitAuthorization express_route_circuit_authorizations_create_or_update(resource_group_name, circuit_name, authorization_name, api_version, subscription_id, authorization_parameters)



Creates or updates an authorization in the specified express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_authorization import ExpressRouteCircuitAuthorization
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpressRouteCircuitAuthorizationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    authorization_name = 'authorization_name_example' # str | The name of the authorization.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    authorization_parameters = openapi_client.ExpressRouteCircuitAuthorization() # ExpressRouteCircuitAuthorization | Parameters supplied to the create or update express route circuit authorization operation.

    try:
        api_response = api_instance.express_route_circuit_authorizations_create_or_update(resource_group_name, circuit_name, authorization_name, api_version, subscription_id, authorization_parameters)
        print("The response of ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **authorization_name** | **str**| The name of the authorization. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **authorization_parameters** | [**ExpressRouteCircuitAuthorization**](ExpressRouteCircuitAuthorization.md)| Parameters supplied to the create or update express route circuit authorization operation. | 

### Return type

[**ExpressRouteCircuitAuthorization**](ExpressRouteCircuitAuthorization.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRouteCircuitAuthorization resource. |  -  |
**201** | Create successful. The operation returns the resulting ExpressRouteCircuitAuthorization resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuit_authorizations_delete**
> express_route_circuit_authorizations_delete(resource_group_name, circuit_name, authorization_name, api_version, subscription_id)



Deletes the specified authorization from the specified express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpressRouteCircuitAuthorizationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    authorization_name = 'authorization_name_example' # str | The name of the authorization.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.express_route_circuit_authorizations_delete(resource_group_name, circuit_name, authorization_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **authorization_name** | **str**| The name of the authorization. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuit_authorizations_get**
> ExpressRouteCircuitAuthorization express_route_circuit_authorizations_get(resource_group_name, circuit_name, authorization_name, api_version, subscription_id)



Gets the specified authorization from the specified express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_authorization import ExpressRouteCircuitAuthorization
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpressRouteCircuitAuthorizationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    authorization_name = 'authorization_name_example' # str | The name of the authorization.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuit_authorizations_get(resource_group_name, circuit_name, authorization_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **authorization_name** | **str**| The name of the authorization. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitAuthorization**](ExpressRouteCircuitAuthorization.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the ExpressRouteCircuitAuthorization resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuit_authorizations_list**
> AuthorizationListResult express_route_circuit_authorizations_list(resource_group_name, circuit_name, api_version, subscription_id)



Gets all authorizations in an express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_list_result import AuthorizationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpressRouteCircuitAuthorizationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuit_authorizations_list(resource_group_name, circuit_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitAuthorizationsApi->express_route_circuit_authorizations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationListResult**](AuthorizationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRouteCircuitAuthorization resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


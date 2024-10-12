# openapi_client.ExpressRouteCircuitStatsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_circuits_get_peering_stats**](ExpressRouteCircuitStatsApi.md#express_route_circuits_get_peering_stats) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/stats | 
[**express_route_circuits_get_stats**](ExpressRouteCircuitStatsApi.md#express_route_circuits_get_stats) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/stats | 


# **express_route_circuits_get_peering_stats**
> ExpressRouteCircuitStats express_route_circuits_get_peering_stats(resource_group_name, circuit_name, peering_name, api_version, subscription_id)



Gets all stats from an express route circuit in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_stats import ExpressRouteCircuitStats
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
    api_instance = openapi_client.ExpressRouteCircuitStatsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_get_peering_stats(resource_group_name, circuit_name, peering_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitStatsApi->express_route_circuits_get_peering_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitStatsApi->express_route_circuits_get_peering_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitStats**](ExpressRouteCircuitStats.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCircuitStats resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_get_stats**
> ExpressRouteCircuitStats express_route_circuits_get_stats(resource_group_name, circuit_name, api_version, subscription_id)



Gets all the stats from an express route circuit in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_stats import ExpressRouteCircuitStats
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
    api_instance = openapi_client.ExpressRouteCircuitStatsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_get_stats(resource_group_name, circuit_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitStatsApi->express_route_circuits_get_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitStatsApi->express_route_circuits_get_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitStats**](ExpressRouteCircuitStats.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCircuitStats resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


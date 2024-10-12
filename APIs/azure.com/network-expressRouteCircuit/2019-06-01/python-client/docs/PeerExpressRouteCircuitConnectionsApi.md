# openapi_client.PeerExpressRouteCircuitConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peer_express_route_circuit_connections_get**](PeerExpressRouteCircuitConnectionsApi.md#peer_express_route_circuit_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/peerConnections/{connectionName} | 
[**peer_express_route_circuit_connections_list**](PeerExpressRouteCircuitConnectionsApi.md#peer_express_route_circuit_connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/peerConnections | 


# **peer_express_route_circuit_connections_get**
> PeerExpressRouteCircuitConnection peer_express_route_circuit_connections_get(resource_group_name, circuit_name, peering_name, connection_name, api_version, subscription_id)



Gets the specified Peer Express Route Circuit Connection from the specified express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peer_express_route_circuit_connection import PeerExpressRouteCircuitConnection
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
    api_instance = openapi_client.PeerExpressRouteCircuitConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    peering_name = 'peering_name_example' # str | The name of the peering.
    connection_name = 'connection_name_example' # str | The name of the peer express route circuit connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.peer_express_route_circuit_connections_get(resource_group_name, circuit_name, peering_name, connection_name, api_version, subscription_id)
        print("The response of PeerExpressRouteCircuitConnectionsApi->peer_express_route_circuit_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeerExpressRouteCircuitConnectionsApi->peer_express_route_circuit_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **peering_name** | **str**| The name of the peering. | 
 **connection_name** | **str**| The name of the peer express route circuit connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PeerExpressRouteCircuitConnection**](PeerExpressRouteCircuitConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Peer Express Route Circuit Connection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peer_express_route_circuit_connections_list**
> PeerExpressRouteCircuitConnectionListResult peer_express_route_circuit_connections_list(resource_group_name, circuit_name, peering_name, api_version, subscription_id)



Gets all global reach peer connections associated with a private peering in an express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peer_express_route_circuit_connection_list_result import PeerExpressRouteCircuitConnectionListResult
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
    api_instance = openapi_client.PeerExpressRouteCircuitConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.peer_express_route_circuit_connections_list(resource_group_name, circuit_name, peering_name, api_version, subscription_id)
        print("The response of PeerExpressRouteCircuitConnectionsApi->peer_express_route_circuit_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeerExpressRouteCircuitConnectionsApi->peer_express_route_circuit_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PeerExpressRouteCircuitConnectionListResult**](PeerExpressRouteCircuitConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PeerExpressRouteCircuitConnections resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ExpressRouteCrossConnectionRouteTableApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_cross_connections_list_routes_table**](ExpressRouteCrossConnectionRouteTableApi.md#express_route_cross_connections_list_routes_table) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTables/{devicePath} | 


# **express_route_cross_connections_list_routes_table**
> ExpressRouteCrossConnectionsListRoutesTable200Response express_route_cross_connections_list_routes_table(resource_group_name, cross_connection_name, peering_name, device_path, api_version, subscription_id)



Gets the currently advertised routes table associated with the express route cross connection in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connections_list_routes_table200_response import ExpressRouteCrossConnectionsListRoutesTable200Response
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
    api_instance = openapi_client.ExpressRouteCrossConnectionRouteTableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    peering_name = 'peering_name_example' # str | The name of the peering.
    device_path = 'device_path_example' # str | The path of the device.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connections_list_routes_table(resource_group_name, cross_connection_name, peering_name, device_path, api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionRouteTableApi->express_route_cross_connections_list_routes_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionRouteTableApi->express_route_cross_connections_list_routes_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **peering_name** | **str**| The name of the peering. | 
 **device_path** | **str**| The path of the device. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnectionsListRoutesTable200Response**](ExpressRouteCrossConnectionsListRoutesTable200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCrossConnectionsRouteTable resource. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


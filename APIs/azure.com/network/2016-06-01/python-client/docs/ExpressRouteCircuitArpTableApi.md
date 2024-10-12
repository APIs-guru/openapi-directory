# openapi_client.ExpressRouteCircuitArpTableApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_circuits_list_arp_table**](ExpressRouteCircuitArpTableApi.md#express_route_circuits_list_arp_table) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/arpTables/{devicePath} | 


# **express_route_circuits_list_arp_table**
> ExpressRouteCircuitsArpTableListResult express_route_circuits_list_arp_table(resource_group_name, circuit_name, peering_name, device_path, api_version, subscription_id)



The ListArpTable from ExpressRouteCircuit operation retrieves the currently advertised arp table associated with the ExpressRouteCircuits in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuits_arp_table_list_result import ExpressRouteCircuitsArpTableListResult
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
    api_instance = openapi_client.ExpressRouteCircuitArpTableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    peering_name = 'peering_name_example' # str | The name of the peering.
    device_path = 'device_path_example' # str | The path of the device.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_list_arp_table(resource_group_name, circuit_name, peering_name, device_path, api_version, subscription_id)
        print("The response of ExpressRouteCircuitArpTableApi->express_route_circuits_list_arp_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitArpTableApi->express_route_circuits_list_arp_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **peering_name** | **str**| The name of the peering. | 
 **device_path** | **str**| The path of the device. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitsArpTableListResult**](ExpressRouteCircuitsArpTableListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


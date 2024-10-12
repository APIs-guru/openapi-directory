# ExpressRouteCrossConnectionProperties

Properties of ExpressRouteCrossConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_in_mbps** | **int** | The circuit bandwidth In Mbps. | [optional] 
**express_route_circuit** | [**ExpressRouteCircuitReference**](ExpressRouteCircuitReference.md) |  | [optional] 
**peering_location** | **str** | The peering location of the ExpressRoute circuit. | [optional] 
**peerings** | [**List[ExpressRouteCrossConnectionPeering]**](ExpressRouteCrossConnectionPeering.md) | The list of peerings. | [optional] 
**primary_azure_port** | **str** | The name of the primary port. | [optional] [readonly] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**s_tag** | **int** | The identifier of the circuit traffic. | [optional] [readonly] 
**secondary_azure_port** | **str** | The name of the secondary port. | [optional] [readonly] 
**service_provider_notes** | **str** | Additional read only notes set by the connectivity provider. | [optional] 
**service_provider_provisioning_state** | **str** | The ServiceProviderProvisioningState state of the resource. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_properties import ExpressRouteCrossConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionProperties from a JSON string
express_route_cross_connection_properties_instance = ExpressRouteCrossConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionProperties.to_json())

# convert the object into a dict
express_route_cross_connection_properties_dict = express_route_cross_connection_properties_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionProperties from a dict
express_route_cross_connection_properties_from_dict = ExpressRouteCrossConnectionProperties.from_dict(express_route_cross_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



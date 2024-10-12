# ExpressRouteCircuitPeeringPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_asn** | **int** | Gets or sets the azure ASN | [optional] 
**gateway_manager_etag** | **str** | Gets or sets the GatewayManager Etag | [optional] 
**last_modified_by** | **str** | Gets whether the provider or the customer last modified the peering | [optional] 
**microsoft_peering_config** | [**ExpressRouteCircuitPeeringConfig**](ExpressRouteCircuitPeeringConfig.md) |  | [optional] 
**peer_asn** | **int** | Gets or sets the peer ASN | [optional] 
**peering_type** | **str** | Gets or sets PeeringType | [optional] 
**primary_azure_port** | **str** | Gets or sets the primary port | [optional] 
**primary_peer_address_prefix** | **str** | Gets or sets the primary address prefix | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**secondary_azure_port** | **str** | Gets or sets the secondary port | [optional] 
**secondary_peer_address_prefix** | **str** | Gets or sets the secondary address prefix | [optional] 
**shared_key** | **str** | Gets or sets the shared key | [optional] 
**state** | **str** | Gets or sets state of Peering | [optional] 
**stats** | [**ExpressRouteCircuitStats**](ExpressRouteCircuitStats.md) |  | [optional] 
**vlan_id** | **int** | Gets or sets the vlan id | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_peering_properties_format import ExpressRouteCircuitPeeringPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPeeringPropertiesFormat from a JSON string
express_route_circuit_peering_properties_format_instance = ExpressRouteCircuitPeeringPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPeeringPropertiesFormat.to_json())

# convert the object into a dict
express_route_circuit_peering_properties_format_dict = express_route_circuit_peering_properties_format_instance.to_dict()
# create an instance of ExpressRouteCircuitPeeringPropertiesFormat from a dict
express_route_circuit_peering_properties_format_from_dict = ExpressRouteCircuitPeeringPropertiesFormat.from_dict(express_route_circuit_peering_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



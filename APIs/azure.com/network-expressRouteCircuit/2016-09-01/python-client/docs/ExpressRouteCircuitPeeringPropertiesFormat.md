# ExpressRouteCircuitPeeringPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_asn** | **int** | The Azure ASN. | [optional] 
**gateway_manager_etag** | **str** | The GatewayManager Etag. | [optional] 
**last_modified_by** | **str** | Gets whether the provider or the customer last modified the peering. | [optional] 
**microsoft_peering_config** | [**ExpressRouteCircuitPeeringConfig**](ExpressRouteCircuitPeeringConfig.md) |  | [optional] 
**peer_asn** | **int** | The peer ASN. | [optional] 
**peering_type** | **str** | The PeeringType. Possible values are: &#39;AzurePublicPeering&#39;, &#39;AzurePrivatePeering&#39;, and &#39;MicrosoftPeering&#39;. | [optional] 
**primary_azure_port** | **str** | The primary port. | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**secondary_azure_port** | **str** | The secondary port. | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**shared_key** | **str** | The shared key. | [optional] 
**state** | **str** | The state of peering. Possible values are: &#39;Disabled&#39; and &#39;Enabled&#39; | [optional] 
**stats** | [**ExpressRouteCircuitStats**](ExpressRouteCircuitStats.md) |  | [optional] 
**vlan_id** | **int** | The VLAN ID. | [optional] 

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



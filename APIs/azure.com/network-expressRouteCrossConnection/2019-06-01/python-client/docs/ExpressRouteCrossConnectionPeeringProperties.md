# ExpressRouteCrossConnectionPeeringProperties

Properties of express route cross connection peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_asn** | **int** | The Azure ASN. | [optional] [readonly] 
**gateway_manager_etag** | **str** | The GatewayManager Etag. | [optional] 
**ipv6_peering_config** | [**ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig**](ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig.md) |  | [optional] 
**last_modified_by** | **str** | Gets whether the provider or the customer last modified the peering. | [optional] 
**microsoft_peering_config** | [**ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigMicrosoftPeeringConfig**](ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.md) |  | [optional] 
**peer_asn** | **int** | The peer ASN. | [optional] 
**peering_type** | **str** | The peering type. | [optional] 
**primary_azure_port** | **str** | The primary port. | [optional] [readonly] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**secondary_azure_port** | **str** | The secondary port. | [optional] [readonly] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**shared_key** | **str** | The shared key. | [optional] 
**state** | **str** | The state of peering. | [optional] 
**vlan_id** | **int** | The VLAN ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_peering_properties import ExpressRouteCrossConnectionPeeringProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionPeeringProperties from a JSON string
express_route_cross_connection_peering_properties_instance = ExpressRouteCrossConnectionPeeringProperties.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionPeeringProperties.to_json())

# convert the object into a dict
express_route_cross_connection_peering_properties_dict = express_route_cross_connection_peering_properties_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionPeeringProperties from a dict
express_route_cross_connection_peering_properties_from_dict = ExpressRouteCrossConnectionPeeringProperties.from_dict(express_route_cross_connection_peering_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



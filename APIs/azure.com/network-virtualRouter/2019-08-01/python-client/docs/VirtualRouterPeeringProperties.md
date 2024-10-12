# VirtualRouterPeeringProperties

Properties of the rule group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peer_asn** | **int** | Peer ASN. | [optional] 
**peer_ip** | **str** | Peer IP. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_router_peering_properties import VirtualRouterPeeringProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouterPeeringProperties from a JSON string
virtual_router_peering_properties_instance = VirtualRouterPeeringProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualRouterPeeringProperties.to_json())

# convert the object into a dict
virtual_router_peering_properties_dict = virtual_router_peering_properties_instance.to_dict()
# create an instance of VirtualRouterPeeringProperties from a dict
virtual_router_peering_properties_from_dict = VirtualRouterPeeringProperties.from_dict(virtual_router_peering_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



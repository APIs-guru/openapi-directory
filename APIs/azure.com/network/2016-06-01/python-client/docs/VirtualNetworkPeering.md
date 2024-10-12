# VirtualNetworkPeering

Peerings in a VirtualNetwork resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**VirtualNetworkPeeringPropertiesFormat**](VirtualNetworkPeeringPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_network_peering import VirtualNetworkPeering

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkPeering from a JSON string
virtual_network_peering_instance = VirtualNetworkPeering.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkPeering.to_json())

# convert the object into a dict
virtual_network_peering_dict = virtual_network_peering_instance.to_dict()
# create an instance of VirtualNetworkPeering from a dict
virtual_network_peering_from_dict = VirtualNetworkPeering.from_dict(virtual_network_peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



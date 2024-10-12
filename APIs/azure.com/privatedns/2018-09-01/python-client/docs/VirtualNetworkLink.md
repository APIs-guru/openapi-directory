# VirtualNetworkLink

Describes a link to virtual network for a Private DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the virtual network link. | [optional] 
**properties** | [**VirtualNetworkLinkProperties**](VirtualNetworkLinkProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Example - &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}&#39;. | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Example - &#39;Microsoft.Network/privateDnsZones&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_link import VirtualNetworkLink

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkLink from a JSON string
virtual_network_link_instance = VirtualNetworkLink.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkLink.to_json())

# convert the object into a dict
virtual_network_link_dict = virtual_network_link_instance.to_dict()
# create an instance of VirtualNetworkLink from a dict
virtual_network_link_from_dict = VirtualNetworkLink.from_dict(virtual_network_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



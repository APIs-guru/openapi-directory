# VirtualNetworkLinkProperties

Represents the properties of the Private DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**registration_enabled** | **bool** | Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? | [optional] 
**virtual_network** | [**SubResource**](SubResource.md) |  | [optional] 
**virtual_network_link_state** | **str** | The status of the virtual network link to the Private DNS zone. Possible values are &#39;InProgress&#39; and &#39;Done&#39;. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_link_properties import VirtualNetworkLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkLinkProperties from a JSON string
virtual_network_link_properties_instance = VirtualNetworkLinkProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkLinkProperties.to_json())

# convert the object into a dict
virtual_network_link_properties_dict = virtual_network_link_properties_instance.to_dict()
# create an instance of VirtualNetworkLinkProperties from a dict
virtual_network_link_properties_from_dict = VirtualNetworkLinkProperties.from_dict(virtual_network_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



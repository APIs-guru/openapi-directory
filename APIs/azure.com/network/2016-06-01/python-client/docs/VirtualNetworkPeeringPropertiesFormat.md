# VirtualNetworkPeeringPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_forwarded_traffic** | **bool** | Gets or sets whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed | [optional] 
**allow_gateway_transit** | **bool** | Gets or sets if gatewayLinks can be used in remote virtual network’s link to this virtual network | [optional] 
**allow_virtual_network_access** | **bool** | Gets or sets whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space | [optional] 
**peering_state** | **str** | Gets the status of the virtual network peering | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the resource | [optional] 
**remote_virtual_network** | [**SubResource**](SubResource.md) |  | [optional] 
**use_remote_gateways** | **bool** | Gets or sets if remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only 1 peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_peering_properties_format import VirtualNetworkPeeringPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkPeeringPropertiesFormat from a JSON string
virtual_network_peering_properties_format_instance = VirtualNetworkPeeringPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkPeeringPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_peering_properties_format_dict = virtual_network_peering_properties_format_instance.to_dict()
# create an instance of VirtualNetworkPeeringPropertiesFormat from a dict
virtual_network_peering_properties_format_from_dict = VirtualNetworkPeeringPropertiesFormat.from_dict(virtual_network_peering_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



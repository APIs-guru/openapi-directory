# VirtualNetworkPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_space** | [**AddressSpace**](AddressSpace.md) |  | [optional] 
**dhcp_options** | [**DhcpOptions**](DhcpOptions.md) |  | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource guid property of the VirtualNetwork resource | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | Gets or sets List of subnets in a VirtualNetwork | [optional] 

## Example

```python
from openapi_client.models.virtual_network_properties_format import VirtualNetworkPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkPropertiesFormat from a JSON string
virtual_network_properties_format_instance = VirtualNetworkPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_properties_format_dict = virtual_network_properties_format_instance.to_dict()
# create an instance of VirtualNetworkPropertiesFormat from a dict
virtual_network_properties_format_from_dict = VirtualNetworkPropertiesFormat.from_dict(virtual_network_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



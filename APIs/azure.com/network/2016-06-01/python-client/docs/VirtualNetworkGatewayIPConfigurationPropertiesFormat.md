# VirtualNetworkGatewayIPConfigurationPropertiesFormat

Properties of VirtualNetworkGatewayIPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address** | [**SubResource**](SubResource.md) |  | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_ip_configuration_properties_format import VirtualNetworkGatewayIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayIPConfigurationPropertiesFormat from a JSON string
virtual_network_gateway_ip_configuration_properties_format_instance = VirtualNetworkGatewayIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_ip_configuration_properties_format_dict = virtual_network_gateway_ip_configuration_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayIPConfigurationPropertiesFormat from a dict
virtual_network_gateway_ip_configuration_properties_format_from_dict = VirtualNetworkGatewayIPConfigurationPropertiesFormat.from_dict(virtual_network_gateway_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



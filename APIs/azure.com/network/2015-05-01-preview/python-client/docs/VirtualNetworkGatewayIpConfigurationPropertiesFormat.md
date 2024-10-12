# VirtualNetworkGatewayIpConfigurationPropertiesFormat

Properties of VirtualNetworkGatewayIPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | Gets or sets the privateIPAddress of the Network Interface IP Configuration | [optional] 
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method (Static/Dynamic) | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address** | [**SubResource**](SubResource.md) |  | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_ip_configuration_properties_format import VirtualNetworkGatewayIpConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayIpConfigurationPropertiesFormat from a JSON string
virtual_network_gateway_ip_configuration_properties_format_instance = VirtualNetworkGatewayIpConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayIpConfigurationPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_ip_configuration_properties_format_dict = virtual_network_gateway_ip_configuration_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayIpConfigurationPropertiesFormat from a dict
virtual_network_gateway_ip_configuration_properties_format_from_dict = VirtualNetworkGatewayIpConfigurationPropertiesFormat.from_dict(virtual_network_gateway_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



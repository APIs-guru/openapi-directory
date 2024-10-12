# VirtualNetworkGatewayPropertiesFormat

VirtualNetworkGateway properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_bgp** | **bool** | EnableBgp Flag | [optional] 
**gateway_default_site** | [**SubResource**](SubResource.md) |  | [optional] 
**gateway_type** | **str** | The type of this virtual network gateway. | [optional] 
**ip_configurations** | [**List[VirtualNetworkGatewayIpConfiguration]**](VirtualNetworkGatewayIpConfiguration.md) | IpConfigurations for Virtual network gateway. | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource guid property of the VirtualNetworkGateway resource | [optional] 
**vpn_type** | **str** | The type of this virtual network gateway. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_properties_format import VirtualNetworkGatewayPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayPropertiesFormat from a JSON string
virtual_network_gateway_properties_format_instance = VirtualNetworkGatewayPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_properties_format_dict = virtual_network_gateway_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayPropertiesFormat from a dict
virtual_network_gateway_properties_format_from_dict = VirtualNetworkGatewayPropertiesFormat.from_dict(virtual_network_gateway_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



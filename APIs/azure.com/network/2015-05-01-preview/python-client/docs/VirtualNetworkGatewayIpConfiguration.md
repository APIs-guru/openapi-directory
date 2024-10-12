# VirtualNetworkGatewayIpConfiguration

IpConfiguration for Virtual network gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**VirtualNetworkGatewayIpConfigurationPropertiesFormat**](VirtualNetworkGatewayIpConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_ip_configuration import VirtualNetworkGatewayIpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayIpConfiguration from a JSON string
virtual_network_gateway_ip_configuration_instance = VirtualNetworkGatewayIpConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayIpConfiguration.to_json())

# convert the object into a dict
virtual_network_gateway_ip_configuration_dict = virtual_network_gateway_ip_configuration_instance.to_dict()
# create an instance of VirtualNetworkGatewayIpConfiguration from a dict
virtual_network_gateway_ip_configuration_from_dict = VirtualNetworkGatewayIpConfiguration.from_dict(virtual_network_gateway_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



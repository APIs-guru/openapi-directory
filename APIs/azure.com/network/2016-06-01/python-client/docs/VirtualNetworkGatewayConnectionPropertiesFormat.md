# VirtualNetworkGatewayConnectionPropertiesFormat

VirtualNetworkGatewayConnection properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_key** | **str** | The authorizationKey. | [optional] 
**connection_status** | **str** | Virtual network Gateway connection status | [optional] 
**connection_type** | **str** | Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet | [optional] 
**egress_bytes_transferred** | **int** | The Egress Bytes Transferred in this connection | [optional] 
**enable_bgp** | **bool** | EnableBgp Flag | [optional] 
**ingress_bytes_transferred** | **int** | The Ingress Bytes Transferred in this connection | [optional] 
**local_network_gateway2** | [**LocalNetworkGateway**](LocalNetworkGateway.md) |  | [optional] 
**peer** | [**SubResource**](SubResource.md) |  | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource | [optional] 
**routing_weight** | **int** | The Routing weight. | [optional] 
**shared_key** | **str** | The IPsec share key. | [optional] 
**virtual_network_gateway1** | [**VirtualNetworkGateway**](VirtualNetworkGateway.md) |  | [optional] 
**virtual_network_gateway2** | [**VirtualNetworkGateway**](VirtualNetworkGateway.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connection_properties_format import VirtualNetworkGatewayConnectionPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnectionPropertiesFormat from a JSON string
virtual_network_gateway_connection_properties_format_instance = VirtualNetworkGatewayConnectionPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnectionPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_connection_properties_format_dict = virtual_network_gateway_connection_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnectionPropertiesFormat from a dict
virtual_network_gateway_connection_properties_format_from_dict = VirtualNetworkGatewayConnectionPropertiesFormat.from_dict(virtual_network_gateway_connection_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualNetworkGatewayConnection

A common class for general resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**VirtualNetworkGatewayConnectionPropertiesFormat**](VirtualNetworkGatewayConnectionPropertiesFormat.md) |  | 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connection import VirtualNetworkGatewayConnection

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnection from a JSON string
virtual_network_gateway_connection_instance = VirtualNetworkGatewayConnection.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnection.to_json())

# convert the object into a dict
virtual_network_gateway_connection_dict = virtual_network_gateway_connection_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnection from a dict
virtual_network_gateway_connection_from_dict = VirtualNetworkGatewayConnection.from_dict(virtual_network_gateway_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



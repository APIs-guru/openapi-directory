# VirtualNetworkConnectionGatewayReference

A reference to VirtualNetworkGateway or LocalNetworkGateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of VirtualNetworkGateway or LocalNetworkGateway resource. | 

## Example

```python
from openapi_client.models.virtual_network_connection_gateway_reference import VirtualNetworkConnectionGatewayReference

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkConnectionGatewayReference from a JSON string
virtual_network_connection_gateway_reference_instance = VirtualNetworkConnectionGatewayReference.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkConnectionGatewayReference.to_json())

# convert the object into a dict
virtual_network_connection_gateway_reference_dict = virtual_network_connection_gateway_reference_instance.to_dict()
# create an instance of VirtualNetworkConnectionGatewayReference from a dict
virtual_network_connection_gateway_reference_from_dict = VirtualNetworkConnectionGatewayReference.from_dict(virtual_network_connection_gateway_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



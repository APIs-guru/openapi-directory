# VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner]**](VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connections_start_packet_capture_default_response import VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse from a JSON string
virtual_network_gateway_connections_start_packet_capture_default_response_instance = VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse.to_json())

# convert the object into a dict
virtual_network_gateway_connections_start_packet_capture_default_response_dict = virtual_network_gateway_connections_start_packet_capture_default_response_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse from a dict
virtual_network_gateway_connections_start_packet_capture_default_response_from_dict = VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponse.from_dict(virtual_network_gateway_connections_start_packet_capture_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



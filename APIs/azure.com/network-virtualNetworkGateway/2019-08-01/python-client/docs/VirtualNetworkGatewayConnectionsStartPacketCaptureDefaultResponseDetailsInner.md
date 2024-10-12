# VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connections_start_packet_capture_default_response_details_inner import VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner from a JSON string
virtual_network_gateway_connections_start_packet_capture_default_response_details_inner_instance = VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner.to_json())

# convert the object into a dict
virtual_network_gateway_connections_start_packet_capture_default_response_details_inner_dict = virtual_network_gateway_connections_start_packet_capture_default_response_details_inner_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner from a dict
virtual_network_gateway_connections_start_packet_capture_default_response_details_inner_from_dict = VirtualNetworkGatewayConnectionsStartPacketCaptureDefaultResponseDetailsInner.from_dict(virtual_network_gateway_connections_start_packet_capture_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



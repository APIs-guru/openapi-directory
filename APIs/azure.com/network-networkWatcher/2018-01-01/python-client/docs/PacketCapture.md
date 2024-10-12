# PacketCapture

Parameters that define the create packet capture operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the packet capture. | [optional] [readonly] 
**name** | **str** | Name of the packet capture. | [optional] [readonly] 
**properties** | [**PacketCaptureParameters**](PacketCaptureParameters.md) |  | 
**type** | **str** | Packet capture type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.packet_capture import PacketCapture

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCapture from a JSON string
packet_capture_instance = PacketCapture.from_json(json)
# print the JSON string representation of the object
print(PacketCapture.to_json())

# convert the object into a dict
packet_capture_dict = packet_capture_instance.to_dict()
# create an instance of PacketCapture from a dict
packet_capture_from_dict = PacketCapture.from_dict(packet_capture_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



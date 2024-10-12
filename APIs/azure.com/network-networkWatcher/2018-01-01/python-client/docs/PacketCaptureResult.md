# PacketCaptureResult

Information about packet capture session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** |  | [optional] [default to 'A unique read-only string that changes whenever the resource is updated.']
**id** | **str** | ID of the packet capture. | [optional] [readonly] 
**name** | **str** | Name of the packet capture. | [optional] [readonly] 
**properties** | [**PacketCaptureResultProperties**](PacketCaptureResultProperties.md) |  | [optional] 
**type** | **str** | Packet capture type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.packet_capture_result import PacketCaptureResult

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureResult from a JSON string
packet_capture_result_instance = PacketCaptureResult.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureResult.to_json())

# convert the object into a dict
packet_capture_result_dict = packet_capture_result_instance.to_dict()
# create an instance of PacketCaptureResult from a dict
packet_capture_result_from_dict = PacketCaptureResult.from_dict(packet_capture_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



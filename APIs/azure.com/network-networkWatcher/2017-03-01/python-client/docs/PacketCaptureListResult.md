# PacketCaptureListResult

List of packet capture sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PacketCaptureResult]**](PacketCaptureResult.md) | Information about packet capture sessions. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_list_result import PacketCaptureListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureListResult from a JSON string
packet_capture_list_result_instance = PacketCaptureListResult.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureListResult.to_json())

# convert the object into a dict
packet_capture_list_result_dict = packet_capture_list_result_instance.to_dict()
# create an instance of PacketCaptureListResult from a dict
packet_capture_list_result_from_dict = PacketCaptureListResult.from_dict(packet_capture_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



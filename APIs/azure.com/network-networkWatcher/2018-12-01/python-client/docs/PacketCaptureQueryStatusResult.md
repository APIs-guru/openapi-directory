# PacketCaptureQueryStatusResult

Status of packet capture session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_start_time** | **datetime** | The start time of the packet capture session. | [optional] 
**id** | **str** | The ID of the packet capture resource. | [optional] 
**name** | **str** | The name of the packet capture resource. | [optional] 
**packet_capture_error** | **List[str]** | List of errors of packet capture session. | [optional] 
**packet_capture_status** | **str** | The status of the packet capture session. | [optional] 
**stop_reason** | **str** | The reason the current packet capture session was stopped. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_query_status_result import PacketCaptureQueryStatusResult

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureQueryStatusResult from a JSON string
packet_capture_query_status_result_instance = PacketCaptureQueryStatusResult.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureQueryStatusResult.to_json())

# convert the object into a dict
packet_capture_query_status_result_dict = packet_capture_query_status_result_instance.to_dict()
# create an instance of PacketCaptureQueryStatusResult from a dict
packet_capture_query_status_result_from_dict = PacketCaptureQueryStatusResult.from_dict(packet_capture_query_status_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



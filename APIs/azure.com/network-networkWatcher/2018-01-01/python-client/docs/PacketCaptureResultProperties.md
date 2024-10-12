# PacketCaptureResultProperties

Describes the properties of a packet capture session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the packet capture session. | [optional] 
**bytes_to_capture_per_packet** | **int** | Number of bytes captured per packet, the remaining bytes are truncated. | [optional] 
**filters** | [**List[PacketCaptureFilter]**](PacketCaptureFilter.md) |  | [optional] 
**storage_location** | [**PacketCaptureStorageLocation**](PacketCaptureStorageLocation.md) |  | 
**target** | **str** | The ID of the targeted resource, only VM is currently supported. | 
**time_limit_in_seconds** | **int** | Maximum duration of the capture session in seconds. | [optional] 
**total_bytes_per_session** | **int** | Maximum size of the capture output. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_result_properties import PacketCaptureResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureResultProperties from a JSON string
packet_capture_result_properties_instance = PacketCaptureResultProperties.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureResultProperties.to_json())

# convert the object into a dict
packet_capture_result_properties_dict = packet_capture_result_properties_instance.to_dict()
# create an instance of PacketCaptureResultProperties from a dict
packet_capture_result_properties_from_dict = PacketCaptureResultProperties.from_dict(packet_capture_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



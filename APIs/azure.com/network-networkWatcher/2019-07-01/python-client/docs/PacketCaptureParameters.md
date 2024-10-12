# PacketCaptureParameters

Parameters that define the create packet capture operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_to_capture_per_packet** | **int** | Number of bytes captured per packet, the remaining bytes are truncated. | [optional] 
**filters** | [**List[PacketCaptureFilter]**](PacketCaptureFilter.md) | A list of packet capture filters. | [optional] 
**storage_location** | [**PacketCaptureStorageLocation**](PacketCaptureStorageLocation.md) |  | 
**target** | **str** | The ID of the targeted resource, only VM is currently supported. | 
**time_limit_in_seconds** | **int** | Maximum duration of the capture session in seconds. | [optional] 
**total_bytes_per_session** | **int** | Maximum size of the capture output. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_parameters import PacketCaptureParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureParameters from a JSON string
packet_capture_parameters_instance = PacketCaptureParameters.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureParameters.to_json())

# convert the object into a dict
packet_capture_parameters_dict = packet_capture_parameters_instance.to_dict()
# create an instance of PacketCaptureParameters from a dict
packet_capture_parameters_from_dict = PacketCaptureParameters.from_dict(packet_capture_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PacketCaptureStorageLocation

The storage location for a packet capture session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional. | [optional] 
**storage_id** | **str** | The ID of the storage account to save the packet capture session. Required if no local file path is provided. | [optional] 
**storage_path** | **str** | The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_storage_location import PacketCaptureStorageLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureStorageLocation from a JSON string
packet_capture_storage_location_instance = PacketCaptureStorageLocation.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureStorageLocation.to_json())

# convert the object into a dict
packet_capture_storage_location_dict = packet_capture_storage_location_instance.to_dict()
# create an instance of PacketCaptureStorageLocation from a dict
packet_capture_storage_location_from_dict = PacketCaptureStorageLocation.from_dict(packet_capture_storage_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



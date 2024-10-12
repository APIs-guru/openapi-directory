# VolumeProperties

The properties of volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control_record_ids** | **List[str]** | The IDs of the access control records, associated with the volume. | 
**backup_policy_ids** | **List[str]** | The IDs of the backup policies, in which this volume is part of. | [optional] [readonly] 
**backup_status** | **str** | The backup status of the volume. | [optional] [readonly] 
**monitoring_status** | **str** | The monitoring status of the volume. | 
**operation_status** | **str** | The operation status on the volume. | [optional] [readonly] 
**size_in_bytes** | **int** | The size of the volume in bytes. | 
**volume_container_id** | **str** | The ID of the volume container, in which this volume is created. | [optional] [readonly] 
**volume_status** | **str** | The volume status. | 
**volume_type** | **str** | The type of the volume. | 

## Example

```python
from openapi_client.models.volume_properties import VolumeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeProperties from a JSON string
volume_properties_instance = VolumeProperties.from_json(json)
# print the JSON string representation of the object
print(VolumeProperties.to_json())

# convert the object into a dict
volume_properties_dict = volume_properties_instance.to_dict()
# create an instance of VolumeProperties from a dict
volume_properties_from_dict = VolumeProperties.from_dict(volume_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



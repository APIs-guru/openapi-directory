# SnapshotProperties

Snapshot resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_data** | [**CreationData**](CreationData.md) |  | 
**disk_size_gb** | **int** | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk&#39;s size. | [optional] 
**encryption_settings_collection** | [**EncryptionSettingsCollection**](EncryptionSettingsCollection.md) |  | [optional] 
**hyper_v_generation** | **str** | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | [optional] 
**os_type** | **str** | The Operating System type. | [optional] 
**provisioning_state** | **str** | The disk provisioning state. | [optional] [readonly] 
**time_created** | **datetime** | The time when the disk was created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot_properties import SnapshotProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotProperties from a JSON string
snapshot_properties_instance = SnapshotProperties.from_json(json)
# print the JSON string representation of the object
print(SnapshotProperties.to_json())

# convert the object into a dict
snapshot_properties_dict = snapshot_properties_instance.to_dict()
# create an instance of SnapshotProperties from a dict
snapshot_properties_from_dict = SnapshotProperties.from_dict(snapshot_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



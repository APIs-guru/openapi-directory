# SnapshotUpdateProperties

Snapshot resource update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **int** | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk&#39;s size. | [optional] 
**encryption_settings_collection** | [**EncryptionSettingsCollection**](EncryptionSettingsCollection.md) |  | [optional] 
**os_type** | **str** | the Operating System type. | [optional] 

## Example

```python
from openapi_client.models.snapshot_update_properties import SnapshotUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotUpdateProperties from a JSON string
snapshot_update_properties_instance = SnapshotUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SnapshotUpdateProperties.to_json())

# convert the object into a dict
snapshot_update_properties_dict = snapshot_update_properties_instance.to_dict()
# create an instance of SnapshotUpdateProperties from a dict
snapshot_update_properties_from_dict = SnapshotUpdateProperties.from_dict(snapshot_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



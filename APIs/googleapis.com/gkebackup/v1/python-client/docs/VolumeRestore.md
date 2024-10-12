# VolumeRestore

Represents the operation of restoring a volume from a VolumeBackup. Next id: 13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Output only. The timestamp when the associated underlying volume restoration completed. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when this VolumeRestore resource was created. | [optional] [readonly] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions. | [optional] [readonly] 
**name** | **str** | Output only. Full name of the VolumeRestore resource. Format: &#x60;projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The current state of this VolumeRestore. | [optional] [readonly] 
**state_message** | **str** | Output only. A human readable message explaining why the VolumeRestore is in its current state. | [optional] [readonly] 
**target_pvc** | [**NamespacedName**](NamespacedName.md) |  | [optional] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this VolumeRestore resource was last updated. | [optional] [readonly] 
**volume_backup** | **str** | Output only. The full name of the VolumeBackup from which the volume will be restored. Format: &#x60;projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*&#x60;. | [optional] [readonly] 
**volume_handle** | **str** | Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup. | [optional] [readonly] 
**volume_type** | **str** | Output only. The type of volume provisioned | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_restore import VolumeRestore

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeRestore from a JSON string
volume_restore_instance = VolumeRestore.from_json(json)
# print the JSON string representation of the object
print(VolumeRestore.to_json())

# convert the object into a dict
volume_restore_dict = volume_restore_instance.to_dict()
# create an instance of VolumeRestore from a dict
volume_restore_from_dict = VolumeRestore.from_dict(volume_restore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



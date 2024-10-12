# VolumeBackup

Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Output only. The timestamp when the associated underlying volume backup operation completed. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when this VolumeBackup resource was created. | [optional] [readonly] 
**disk_size_bytes** | **str** | Output only. The minimum size of the disk to which this VolumeBackup can be restored. | [optional] [readonly] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume backup from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform volume backup updates in order to avoid race conditions. | [optional] [readonly] 
**format** | **str** | Output only. The format used for the volume backup. | [optional] [readonly] 
**name** | **str** | Output only. The full name of the VolumeBackup resource. Format: &#x60;projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*&#x60;. | [optional] [readonly] 
**source_pvc** | [**NamespacedName**](NamespacedName.md) |  | [optional] 
**state** | **str** | Output only. The current state of this VolumeBackup. | [optional] [readonly] 
**state_message** | **str** | Output only. A human readable message explaining why the VolumeBackup is in its current state. | [optional] [readonly] 
**storage_bytes** | **str** | Output only. The aggregate size of the underlying artifacts associated with this VolumeBackup in the backup storage. This may change over time when multiple backups of the same volume share the same backup storage location. In particular, this is likely to increase in size when the immediately preceding backup of the same volume is deleted. | [optional] [readonly] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this VolumeBackup resource was last updated. | [optional] [readonly] 
**volume_backup_handle** | **str** | Output only. A storage system-specific opaque handle to the underlying volume backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_backup import VolumeBackup

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeBackup from a JSON string
volume_backup_instance = VolumeBackup.from_json(json)
# print the JSON string representation of the object
print(VolumeBackup.to_json())

# convert the object into a dict
volume_backup_dict = volume_backup_instance.to_dict()
# create an instance of VolumeBackup from a dict
volume_backup_from_dict = VolumeBackup.from_dict(volume_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



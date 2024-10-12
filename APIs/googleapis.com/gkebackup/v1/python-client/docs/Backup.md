# Backup

Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 29

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_namespaces** | **bool** | Output only. If True, all namespaces were included in the Backup. | [optional] [readonly] 
**cluster_metadata** | [**ClusterMetadata**](ClusterMetadata.md) |  | [optional] 
**complete_time** | **str** | Output only. Completion time of the Backup | [optional] [readonly] 
**config_backup_size_bytes** | **str** | Output only. The size of the config backup in bytes. | [optional] [readonly] 
**contains_secrets** | **bool** | Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan&#39;s include_secrets value. | [optional] [readonly] 
**contains_volume_data** | **bool** | Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan&#39;s include_volume_data value. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when this Backup resource was created. | [optional] [readonly] 
**delete_lock_days** | **int** | Optional. Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be \&quot;locked\&quot; against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan&#39;s backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update). | [optional] 
**delete_lock_expire_time** | **str** | Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days). | [optional] [readonly] 
**description** | **str** | Optional. User specified descriptive string for this Backup. | [optional] 
**encryption_key** | [**EncryptionKey**](EncryptionKey.md) |  | [optional] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetBackup&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateBackup&#x60; or &#x60;DeleteBackup&#x60; to ensure that their change will be applied to the same version of the resource. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. A set of custom labels supplied by user. | [optional] 
**manual** | **bool** | Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually. | [optional] [readonly] 
**name** | **str** | Output only. The fully qualified name of the Backup. &#x60;projects/*/locations/*/backupPlans/*/backups/*&#x60; | [optional] [readonly] 
**pod_count** | **int** | Output only. The total number of Kubernetes Pods contained in the Backup. | [optional] [readonly] 
**resource_count** | **int** | Output only. The total number of Kubernetes resources included in the Backup. | [optional] [readonly] 
**retain_days** | **int** | Optional. The age (in days) after which this Backup will be automatically deleted. Must be an integer value &gt;&#x3D; 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be &gt;&#x3D; delete_lock_days and &lt;&#x3D; 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan&#39;s backup_retain_days value. | [optional] 
**retain_expire_time** | **str** | Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days). | [optional] [readonly] 
**selected_applications** | [**NamespacedNames**](NamespacedNames.md) |  | [optional] 
**selected_namespaces** | [**Namespaces**](Namespaces.md) |  | [optional] 
**size_bytes** | **str** | Output only. The total size of the Backup in bytes &#x3D; config backup size + sum(volume backup sizes) | [optional] [readonly] 
**state** | **str** | Output only. Current state of the Backup | [optional] [readonly] 
**state_reason** | **str** | Output only. Human-readable description of why the backup is in the current &#x60;state&#x60;. | [optional] [readonly] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier) | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this Backup resource was last updated. | [optional] [readonly] 
**volume_count** | **int** | Output only. The total number of volume backups contained in the Backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup import Backup

# TODO update the JSON string below
json = "{}"
# create an instance of Backup from a JSON string
backup_instance = Backup.from_json(json)
# print the JSON string representation of the object
print(Backup.to_json())

# convert the object into a dict
backup_dict = backup_instance.to_dict()
# create an instance of Backup from a dict
backup_from_dict = Backup.from_dict(backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



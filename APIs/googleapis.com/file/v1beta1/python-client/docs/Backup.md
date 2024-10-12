# Backup

A Filestore backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_gb** | **str** | Output only. Capacity of the source file share when the backup was created. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the backup was created. | [optional] [readonly] 
**description** | **str** | A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. | [optional] 
**download_bytes** | **str** | Output only. Amount of bytes that will be downloaded if the backup is restored | [optional] [readonly] 
**kms_key_name** | **str** | Immutable. KMS key name used for data encryption. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata. | [optional] 
**name** | **str** | Output only. The resource name of the backup, in the format &#x60;projects/{project_id}/locations/{location_id}/backups/{backup_id}&#x60;. | [optional] [readonly] 
**satisfies_pzi** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**source_file_share** | **str** | Name of the file share in the source Filestore instance that the backup is created from. | [optional] 
**source_instance** | **str** | The resource name of the source Filestore instance, in the format &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}&#x60;, used to create this backup. | [optional] 
**source_instance_tier** | **str** | Output only. The service tier of the source Filestore instance that this backup is created from. | [optional] [readonly] 
**state** | **str** | Output only. The backup state. | [optional] [readonly] 
**storage_bytes** | **str** | Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion. | [optional] [readonly] 

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



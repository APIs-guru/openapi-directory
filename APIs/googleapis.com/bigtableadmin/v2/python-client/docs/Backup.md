# Backup

A backup of a Cloud Bigtable table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**end_time** | **str** | Output only. &#x60;end_time&#x60; is the time that the backup was finished. The row data in the backup will be no newer than this timestamp. | [optional] [readonly] 
**expire_time** | **str** | Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 90 days from the time the request is received. Once the &#x60;expire_time&#x60; has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. | [optional] 
**name** | **str** | A globally unique identifier for the backup which cannot be changed. Values are of the form &#x60;projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*&#x60; The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form &#x60;projects/{project}/instances/{instance}/clusters/{cluster}&#x60;. | [optional] 
**size_bytes** | **str** | Output only. Size of the backup in bytes. | [optional] [readonly] 
**source_backup** | **str** | Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//clusters//backups/ | [optional] [readonly] 
**source_table** | **str** | Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form &#x60;projects/{project}/instances/{instance}/tables/{source_table}&#x60;. | [optional] 
**start_time** | **str** | Output only. &#x60;start_time&#x60; is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 

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



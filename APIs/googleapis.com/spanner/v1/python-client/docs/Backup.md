# Backup

A backup of a Cloud Spanner database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the CreateBackup request is received. If the request does not specify &#x60;version_time&#x60;, the &#x60;version_time&#x60; of the backup will be equivalent to the &#x60;create_time&#x60;. | [optional] [readonly] 
**database** | **str** | Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form &#x60;projects//instances//databases/&#x60;. | [optional] 
**database_dialect** | **str** | Output only. The database dialect information for the backup. | [optional] [readonly] 
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**expire_time** | **str** | Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the &#x60;expire_time&#x60; has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. | [optional] 
**max_expire_time** | **str** | Output only. The max allowed expiration time of the backup, with microseconds granularity. A backup&#39;s expiration time can be configured in multiple APIs: CreateBackup, UpdateBackup, CopyBackup. When updating or copying an existing backup, the expiration time specified must be less than &#x60;Backup.max_expire_time&#x60;. | [optional] [readonly] 
**name** | **str** | Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form &#x60;projects//instances//backups/a-z*[a-z0-9]&#x60; The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form &#x60;projects//instances/&#x60;. | [optional] 
**referencing_backups** | **List[str]** | Output only. The names of the destination backups being created by copying this source backup. The backup names are of the form &#x60;projects//instances//backups/&#x60;. Referencing backups may exist in different instances. The existence of any referencing backup prevents the backup from being deleted. When the copy operation is done (either successfully completed or cancelled or the destination backup is deleted), the reference to the backup is removed. | [optional] [readonly] 
**referencing_databases** | **List[str]** | Output only. The names of the restored databases that reference the backup. The database names are of the form &#x60;projects//instances//databases/&#x60;. Referencing databases may exist in different instances. The existence of any referencing database prevents the backup from being deleted. When a restored database from the backup enters the &#x60;READY&#x60; state, the reference to the backup is removed. | [optional] [readonly] 
**size_bytes** | **str** | Output only. Size of the backup in bytes. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 
**version_time** | **str** | The backup will contain an externally consistent copy of the database at the timestamp specified by &#x60;version_time&#x60;. If &#x60;version_time&#x60; is not specified, the system will set &#x60;version_time&#x60; to the &#x60;create_time&#x60; of the backup. | [optional] 

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



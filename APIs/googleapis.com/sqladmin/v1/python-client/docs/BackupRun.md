# BackupRun

A BackupRun resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_kind** | **str** | Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT. | [optional] 
**description** | **str** | The description of this run, only applicable to on-demand backups. | [optional] 
**disk_encryption_configuration** | [**DiskEncryptionConfiguration**](DiskEncryptionConfiguration.md) |  | [optional] 
**disk_encryption_status** | [**DiskEncryptionStatus**](DiskEncryptionStatus.md) |  | [optional] 
**end_time** | **str** | The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**enqueued_time** | **str** | The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**error** | [**OperationError**](OperationError.md) |  | [optional] 
**id** | **str** | The identifier for this backup run. Unique only for a specific Cloud SQL instance. | [optional] 
**instance** | **str** | Name of the database instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#backupRun&#x60;. | [optional] 
**location** | **str** | Location of the backups. | [optional] 
**self_link** | **str** | The URI of this resource. | [optional] 
**start_time** | **str** | The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**status** | **str** | The status of this run. | [optional] 
**time_zone** | **str** | Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server. | [optional] 
**type** | **str** | The type of this run; can be either \&quot;AUTOMATED\&quot; or \&quot;ON_DEMAND\&quot; or \&quot;FINAL\&quot;. This field defaults to \&quot;ON_DEMAND\&quot; and is ignored, when specified for insert requests. | [optional] 
**window_start_time** | **str** | The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 

## Example

```python
from openapi_client.models.backup_run import BackupRun

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRun from a JSON string
backup_run_instance = BackupRun.from_json(json)
# print the JSON string representation of the object
print(BackupRun.to_json())

# convert the object into a dict
backup_run_dict = backup_run_instance.to_dict()
# create an instance of BackupRun from a dict
backup_run_from_dict = BackupRun.from_dict(backup_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



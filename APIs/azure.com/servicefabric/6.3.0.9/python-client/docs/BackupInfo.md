# BackupInfo

Represents a backup point which can be used to trigger a restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Name of the Service Fabric application this partition backup belongs to. | [optional] 
**backup_chain_id** | **str** | Unique backup chain ID. All backups part of the same chain has the same backup chain id. A backup chain is comprised of 1 full backup and multiple incremental backups. | [optional] 
**backup_id** | **str** | Unique backup ID . | [optional] 
**backup_location** | **str** | Location of the backup, relative to the backup store. | [optional] 
**backup_type** | [**BackupType**](BackupType.md) |  | [optional] 
**creation_time_utc** | **datetime** | The date time when this backup was taken. | [optional] 
**epoch_of_last_backup_record** | [**BackupEpoch**](BackupEpoch.md) |  | [optional] 
**failure_error** | [**FabricErrorError**](FabricErrorError.md) |  | [optional] 
**lsn_of_last_backup_record** | **str** | LSN of the last record in this backup. | [optional] 
**partition_information** | [**PartitionInformation**](PartitionInformation.md) |  | [optional] 
**service_name** | **str** | Name of the Service Fabric service this partition backup belongs to. | [optional] 

## Example

```python
from openapi_client.models.backup_info import BackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupInfo from a JSON string
backup_info_instance = BackupInfo.from_json(json)
# print the JSON string representation of the object
print(BackupInfo.to_json())

# convert the object into a dict
backup_info_dict = backup_info_instance.to_dict()
# create an instance of BackupInfo from a dict
backup_info_from_dict = BackupInfo.from_dict(backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



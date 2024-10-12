# BackupEngineExtendedInfo

Additional information on backup engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_disk_space** | **float** | Disk space currently available in the backup engine. | [optional] 
**azure_protected_instances** | **int** | Protected instances in the backup engine. | [optional] 
**database_name** | **str** | Database name of backup engine. | [optional] 
**disk_count** | **int** | Number of disks in the backup engine. | [optional] 
**protected_items_count** | **int** | Number of protected items in the backup engine. | [optional] 
**protected_servers_count** | **int** | Number of protected servers in the backup engine. | [optional] 
**refreshed_at** | **datetime** | Last refresh time in the backup engine. | [optional] 
**used_disk_space** | **float** | Disk space used in the backup engine. | [optional] 

## Example

```python
from openapi_client.models.backup_engine_extended_info import BackupEngineExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEngineExtendedInfo from a JSON string
backup_engine_extended_info_instance = BackupEngineExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(BackupEngineExtendedInfo.to_json())

# convert the object into a dict
backup_engine_extended_info_dict = backup_engine_extended_info_instance.to_dict()
# create an instance of BackupEngineExtendedInfo from a dict
backup_engine_extended_info_from_dict = BackupEngineExtendedInfo.from_dict(backup_engine_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



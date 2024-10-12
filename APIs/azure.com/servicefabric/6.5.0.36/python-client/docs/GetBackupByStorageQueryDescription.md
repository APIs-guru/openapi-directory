# GetBackupByStorageQueryDescription

Describes additional filters to be applied, while listing backups, and backup storage details from where to fetch the backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_entity** | [**BackupEntity**](BackupEntity.md) |  | 
**end_date_time_filter** | **datetime** | Specifies the end date time in ISO8601 till which to enumerate backups. If not specified, backups are enumerated till the end. | [optional] 
**latest** | **bool** | If specified as true, gets the most recent backup (within the specified time range) for every partition under the specified backup entity. | [optional] [default to False]
**start_date_time_filter** | **datetime** | Specifies the start date time in ISO8601 from which to enumerate backups. If not specified, backups are enumerated from the beginning. | [optional] 
**storage** | [**BackupStorageDescription**](BackupStorageDescription.md) |  | 

## Example

```python
from openapi_client.models.get_backup_by_storage_query_description import GetBackupByStorageQueryDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GetBackupByStorageQueryDescription from a JSON string
get_backup_by_storage_query_description_instance = GetBackupByStorageQueryDescription.from_json(json)
# print the JSON string representation of the object
print(GetBackupByStorageQueryDescription.to_json())

# convert the object into a dict
get_backup_by_storage_query_description_dict = get_backup_by_storage_query_description_instance.to_dict()
# create an instance of GetBackupByStorageQueryDescription from a dict
get_backup_by_storage_query_description_from_dict = GetBackupByStorageQueryDescription.from_dict(get_backup_by_storage_query_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



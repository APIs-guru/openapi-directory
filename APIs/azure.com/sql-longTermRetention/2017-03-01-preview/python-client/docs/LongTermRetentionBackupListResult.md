# LongTermRetentionBackupListResult

A list of long term retention backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[LongTermRetentionBackup]**](LongTermRetentionBackup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermRetentionBackupListResult from a JSON string
long_term_retention_backup_list_result_instance = LongTermRetentionBackupListResult.from_json(json)
# print the JSON string representation of the object
print(LongTermRetentionBackupListResult.to_json())

# convert the object into a dict
long_term_retention_backup_list_result_dict = long_term_retention_backup_list_result_instance.to_dict()
# create an instance of LongTermRetentionBackupListResult from a dict
long_term_retention_backup_list_result_from_dict = LongTermRetentionBackupListResult.from_dict(long_term_retention_backup_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



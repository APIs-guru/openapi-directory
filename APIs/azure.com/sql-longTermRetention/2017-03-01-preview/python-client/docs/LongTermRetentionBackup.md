# LongTermRetentionBackup

A long term retention backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LongTermRetentionBackupProperties**](LongTermRetentionBackupProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_term_retention_backup import LongTermRetentionBackup

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermRetentionBackup from a JSON string
long_term_retention_backup_instance = LongTermRetentionBackup.from_json(json)
# print the JSON string representation of the object
print(LongTermRetentionBackup.to_json())

# convert the object into a dict
long_term_retention_backup_dict = long_term_retention_backup_instance.to_dict()
# create an instance of LongTermRetentionBackup from a dict
long_term_retention_backup_from_dict = LongTermRetentionBackup.from_dict(long_term_retention_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



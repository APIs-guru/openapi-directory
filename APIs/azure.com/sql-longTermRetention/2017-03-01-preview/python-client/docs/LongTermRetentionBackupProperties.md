# LongTermRetentionBackupProperties

Properties of a long term retention backup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_expiration_time** | **datetime** | The time the long term retention backup will expire. | [optional] [readonly] 
**backup_time** | **datetime** | The time the backup was taken | [optional] [readonly] 
**database_deletion_time** | **datetime** | The delete time of the database | [optional] [readonly] 
**database_name** | **str** | The name of the database the backup belong to | [optional] [readonly] 
**server_create_time** | **datetime** | The create time of the server. | [optional] [readonly] 
**server_name** | **str** | The server name that the backup database belong to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_term_retention_backup_properties import LongTermRetentionBackupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermRetentionBackupProperties from a JSON string
long_term_retention_backup_properties_instance = LongTermRetentionBackupProperties.from_json(json)
# print the JSON string representation of the object
print(LongTermRetentionBackupProperties.to_json())

# convert the object into a dict
long_term_retention_backup_properties_dict = long_term_retention_backup_properties_instance.to_dict()
# create an instance of LongTermRetentionBackupProperties from a dict
long_term_retention_backup_properties_from_dict = LongTermRetentionBackupProperties.from_dict(long_term_retention_backup_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DatabaseBackupSetting

Database backup settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. | [optional] 
**connection_string_name** | **str** | Contains a connection string name that is linked to the SiteConfig.ConnectionStrings. This is used during restore with overwrite connection strings options. | [optional] 
**database_type** | **str** | Database type (e.g. SqlAzure / MySql). | 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.database_backup_setting import DatabaseBackupSetting

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseBackupSetting from a JSON string
database_backup_setting_instance = DatabaseBackupSetting.from_json(json)
# print the JSON string representation of the object
print(DatabaseBackupSetting.to_json())

# convert the object into a dict
database_backup_setting_dict = database_backup_setting_instance.to_dict()
# create an instance of DatabaseBackupSetting from a dict
database_backup_setting_from_dict = DatabaseBackupSetting.from_dict(database_backup_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



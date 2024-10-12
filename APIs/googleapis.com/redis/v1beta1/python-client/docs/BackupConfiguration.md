# BackupConfiguration

Configuration for automatic backups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automated_backup_enabled** | **bool** | Whether customer visible automated backups are enabled on the instance. | [optional] 
**backup_retention_settings** | [**RetentionSettings**](RetentionSettings.md) |  | [optional] 
**point_in_time_recovery_enabled** | **bool** | Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted. | [optional] 

## Example

```python
from openapi_client.models.backup_configuration import BackupConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BackupConfiguration from a JSON string
backup_configuration_instance = BackupConfiguration.from_json(json)
# print the JSON string representation of the object
print(BackupConfiguration.to_json())

# convert the object into a dict
backup_configuration_dict = backup_configuration_instance.to_dict()
# create an instance of BackupConfiguration from a dict
backup_configuration_from_dict = BackupConfiguration.from_dict(backup_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



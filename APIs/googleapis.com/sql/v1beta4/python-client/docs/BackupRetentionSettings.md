# BackupRetentionSettings

We currently only support backup retention by specifying the number of backups we will retain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retained_backups** | **int** | Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is &#39;COUNT&#39;, we will retain this many backups. | [optional] 
**retention_unit** | **str** | The unit that &#39;retained_backups&#39; represents. | [optional] 

## Example

```python
from openapi_client.models.backup_retention_settings import BackupRetentionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRetentionSettings from a JSON string
backup_retention_settings_instance = BackupRetentionSettings.from_json(json)
# print the JSON string representation of the object
print(BackupRetentionSettings.to_json())

# convert the object into a dict
backup_retention_settings_dict = backup_retention_settings_instance.to_dict()
# create an instance of BackupRetentionSettings from a dict
backup_retention_settings_from_dict = BackupRetentionSettings.from_dict(backup_retention_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



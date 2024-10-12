# AzureBackupServerEngine

The backup engine type when Azure Backup Server is used to manage the backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.azure_backup_server_engine import AzureBackupServerEngine

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBackupServerEngine from a JSON string
azure_backup_server_engine_instance = AzureBackupServerEngine.from_json(json)
# print the JSON string representation of the object
print(AzureBackupServerEngine.to_json())

# convert the object into a dict
azure_backup_server_engine_dict = azure_backup_server_engine_instance.to_dict()
# create an instance of AzureBackupServerEngine from a dict
azure_backup_server_engine_from_dict = AzureBackupServerEngine.from_dict(azure_backup_server_engine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



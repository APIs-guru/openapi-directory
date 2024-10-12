# BackupConfig

BackupConfig defines the configuration of Backups created via this BackupPlan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_namespaces** | **bool** | If True, include all namespaced resources | [optional] 
**encryption_key** | [**EncryptionKey**](EncryptionKey.md) |  | [optional] 
**include_secrets** | **bool** | Optional. This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. Default: False | [optional] 
**include_volume_data** | **bool** | Optional. This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. Default: False | [optional] 
**selected_applications** | [**NamespacedNames**](NamespacedNames.md) |  | [optional] 
**selected_namespaces** | [**Namespaces**](Namespaces.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_config import BackupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupConfig from a JSON string
backup_config_instance = BackupConfig.from_json(json)
# print the JSON string representation of the object
print(BackupConfig.to_json())

# convert the object into a dict
backup_config_dict = backup_config_instance.to_dict()
# create an instance of BackupConfig from a dict
backup_config_from_dict = BackupConfig.from_dict(backup_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BackupResourceVaultConfig

Backup resource vault config details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enhanced_security_state** | **str** | Enabled or Disabled. | [optional] 
**soft_delete_feature_state** | **str** | Soft Delete feature state | [optional] 
**storage_model_type** | **str** | Storage type. | [optional] 
**storage_type** | **str** | Storage type. | [optional] 
**storage_type_state** | **str** | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | [optional] 

## Example

```python
from openapi_client.models.backup_resource_vault_config import BackupResourceVaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupResourceVaultConfig from a JSON string
backup_resource_vault_config_instance = BackupResourceVaultConfig.from_json(json)
# print the JSON string representation of the object
print(BackupResourceVaultConfig.to_json())

# convert the object into a dict
backup_resource_vault_config_dict = backup_resource_vault_config_instance.to_dict()
# create an instance of BackupResourceVaultConfig from a dict
backup_resource_vault_config_from_dict = BackupResourceVaultConfig.from_dict(backup_resource_vault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



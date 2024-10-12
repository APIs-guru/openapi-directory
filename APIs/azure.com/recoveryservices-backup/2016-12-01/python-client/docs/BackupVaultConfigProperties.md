# BackupVaultConfigProperties

Backup vault config details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enhanced_security_state** | **str** | Enabled or Disabled. | [optional] 
**storage_type** | **str** | Storage type. | [optional] 
**storage_type_state** | **str** | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | [optional] 

## Example

```python
from openapi_client.models.backup_vault_config_properties import BackupVaultConfigProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupVaultConfigProperties from a JSON string
backup_vault_config_properties_instance = BackupVaultConfigProperties.from_json(json)
# print the JSON string representation of the object
print(BackupVaultConfigProperties.to_json())

# convert the object into a dict
backup_vault_config_properties_dict = backup_vault_config_properties_instance.to_dict()
# create an instance of BackupVaultConfigProperties from a dict
backup_vault_config_properties_from_dict = BackupVaultConfigProperties.from_dict(backup_vault_config_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



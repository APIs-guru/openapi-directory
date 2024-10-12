# BackupVaultConfig

Backup vault config details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupVaultConfigProperties**](BackupVaultConfigProperties.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_vault_config import BackupVaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupVaultConfig from a JSON string
backup_vault_config_instance = BackupVaultConfig.from_json(json)
# print the JSON string representation of the object
print(BackupVaultConfig.to_json())

# convert the object into a dict
backup_vault_config_dict = backup_vault_config_instance.to_dict()
# create an instance of BackupVaultConfig from a dict
backup_vault_config_from_dict = BackupVaultConfig.from_dict(backup_vault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



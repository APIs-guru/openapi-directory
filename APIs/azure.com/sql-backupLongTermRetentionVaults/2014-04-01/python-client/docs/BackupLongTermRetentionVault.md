# BackupLongTermRetentionVault

A backup long term retention vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geo-location where the resource lives | [optional] [readonly] 
**properties** | [**BackupLongTermRetentionVaultProperties**](BackupLongTermRetentionVaultProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_long_term_retention_vault import BackupLongTermRetentionVault

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionVault from a JSON string
backup_long_term_retention_vault_instance = BackupLongTermRetentionVault.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionVault.to_json())

# convert the object into a dict
backup_long_term_retention_vault_dict = backup_long_term_retention_vault_instance.to_dict()
# create an instance of BackupLongTermRetentionVault from a dict
backup_long_term_retention_vault_from_dict = BackupLongTermRetentionVault.from_dict(backup_long_term_retention_vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



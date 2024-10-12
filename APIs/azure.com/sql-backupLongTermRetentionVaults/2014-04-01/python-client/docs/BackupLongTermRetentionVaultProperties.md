# BackupLongTermRetentionVaultProperties

The properties of a backup long term retention vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_services_vault_resource_id** | **str** | The azure recovery services vault resource id | 

## Example

```python
from openapi_client.models.backup_long_term_retention_vault_properties import BackupLongTermRetentionVaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionVaultProperties from a JSON string
backup_long_term_retention_vault_properties_instance = BackupLongTermRetentionVaultProperties.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionVaultProperties.to_json())

# convert the object into a dict
backup_long_term_retention_vault_properties_dict = backup_long_term_retention_vault_properties_instance.to_dict()
# create an instance of BackupLongTermRetentionVaultProperties from a dict
backup_long_term_retention_vault_properties_from_dict = BackupLongTermRetentionVaultProperties.from_dict(backup_long_term_retention_vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



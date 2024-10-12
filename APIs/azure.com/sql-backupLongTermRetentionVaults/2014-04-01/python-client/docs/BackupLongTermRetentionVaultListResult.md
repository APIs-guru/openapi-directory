# BackupLongTermRetentionVaultListResult

Represents the response to a list vaults request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupLongTermRetentionVault]**](BackupLongTermRetentionVault.md) | The list of vaults in the server. | 

## Example

```python
from openapi_client.models.backup_long_term_retention_vault_list_result import BackupLongTermRetentionVaultListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionVaultListResult from a JSON string
backup_long_term_retention_vault_list_result_instance = BackupLongTermRetentionVaultListResult.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionVaultListResult.to_json())

# convert the object into a dict
backup_long_term_retention_vault_list_result_dict = backup_long_term_retention_vault_list_result_instance.to_dict()
# create an instance of BackupLongTermRetentionVaultListResult from a dict
backup_long_term_retention_vault_list_result_from_dict = BackupLongTermRetentionVaultListResult.from_dict(backup_long_term_retention_vault_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



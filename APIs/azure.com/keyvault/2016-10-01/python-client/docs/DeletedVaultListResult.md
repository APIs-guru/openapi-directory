# DeletedVaultListResult

List of vaults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted vaults. | [optional] 
**value** | [**List[DeletedVault]**](DeletedVault.md) | The list of deleted vaults. | [optional] 

## Example

```python
from openapi_client.models.deleted_vault_list_result import DeletedVaultListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedVaultListResult from a JSON string
deleted_vault_list_result_instance = DeletedVaultListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedVaultListResult.to_json())

# convert the object into a dict
deleted_vault_list_result_dict = deleted_vault_list_result_instance.to_dict()
# create an instance of DeletedVaultListResult from a dict
deleted_vault_list_result_from_dict = DeletedVaultListResult.from_dict(deleted_vault_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



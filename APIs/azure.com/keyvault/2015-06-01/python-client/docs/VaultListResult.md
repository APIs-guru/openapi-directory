# VaultListResult

List of vaults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of vaults. | [optional] 
**value** | [**List[Vault]**](Vault.md) | Gets or sets the list of vaults. | [optional] 

## Example

```python
from openapi_client.models.vault_list_result import VaultListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VaultListResult from a JSON string
vault_list_result_instance = VaultListResult.from_json(json)
# print the JSON string representation of the object
print(VaultListResult.to_json())

# convert the object into a dict
vault_list_result_dict = vault_list_result_instance.to_dict()
# create an instance of VaultListResult from a dict
vault_list_result_from_dict = VaultListResult.from_dict(vault_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



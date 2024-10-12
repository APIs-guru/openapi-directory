# VaultList

The response model for a list of Vaults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] [readonly] 
**value** | [**List[Vault]**](Vault.md) |  | [optional] 

## Example

```python
from openapi_client.models.vault_list import VaultList

# TODO update the JSON string below
json = "{}"
# create an instance of VaultList from a JSON string
vault_list_instance = VaultList.from_json(json)
# print the JSON string representation of the object
print(VaultList.to_json())

# convert the object into a dict
vault_list_dict = vault_list_instance.to_dict()
# create an instance of VaultList from a dict
vault_list_from_dict = VaultList.from_dict(vault_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



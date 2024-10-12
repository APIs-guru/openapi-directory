# ListKeyVaultKeysDefinition

The list key vault keys definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault** | [**KeyVaultReference**](KeyVaultReference.md) |  | 
**skip_token** | **str** | The skip token. | [optional] 

## Example

```python
from openapi_client.models.list_key_vault_keys_definition import ListKeyVaultKeysDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ListKeyVaultKeysDefinition from a JSON string
list_key_vault_keys_definition_instance = ListKeyVaultKeysDefinition.from_json(json)
# print the JSON string representation of the object
print(ListKeyVaultKeysDefinition.to_json())

# convert the object into a dict
list_key_vault_keys_definition_dict = list_key_vault_keys_definition_instance.to_dict()
# create an instance of ListKeyVaultKeysDefinition from a dict
list_key_vault_keys_definition_from_dict = ListKeyVaultKeysDefinition.from_dict(list_key_vault_keys_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



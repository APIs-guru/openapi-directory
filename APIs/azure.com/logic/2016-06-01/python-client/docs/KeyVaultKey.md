# KeyVaultKey

The key vault key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**KeyVaultKeyAttributes**](KeyVaultKeyAttributes.md) |  | [optional] 
**kid** | **str** | The key id. | [optional] 

## Example

```python
from openapi_client.models.key_vault_key import KeyVaultKey

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultKey from a JSON string
key_vault_key_instance = KeyVaultKey.from_json(json)
# print the JSON string representation of the object
print(KeyVaultKey.to_json())

# convert the object into a dict
key_vault_key_dict = key_vault_key_instance.to_dict()
# create an instance of KeyVaultKey from a dict
key_vault_key_from_dict = KeyVaultKey.from_dict(key_vault_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



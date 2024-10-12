# KeyVaultKeyCollection

Collection of key vault keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_token** | **str** | The skip token. | [optional] 
**value** | [**List[KeyVaultKey]**](KeyVaultKey.md) | The key vault keys. | [optional] 

## Example

```python
from openapi_client.models.key_vault_key_collection import KeyVaultKeyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultKeyCollection from a JSON string
key_vault_key_collection_instance = KeyVaultKeyCollection.from_json(json)
# print the JSON string representation of the object
print(KeyVaultKeyCollection.to_json())

# convert the object into a dict
key_vault_key_collection_dict = key_vault_key_collection_instance.to_dict()
# create an instance of KeyVaultKeyCollection from a dict
key_vault_key_collection_from_dict = KeyVaultKeyCollection.from_dict(key_vault_key_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# KeyVaultKeyAttributes

The key attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | When the key was created. | [optional] 
**enabled** | **bool** | Whether the key is enabled or not. | [optional] 
**updated** | **int** | When the key was updated. | [optional] 

## Example

```python
from openapi_client.models.key_vault_key_attributes import KeyVaultKeyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultKeyAttributes from a JSON string
key_vault_key_attributes_instance = KeyVaultKeyAttributes.from_json(json)
# print the JSON string representation of the object
print(KeyVaultKeyAttributes.to_json())

# convert the object into a dict
key_vault_key_attributes_dict = key_vault_key_attributes_instance.to_dict()
# create an instance of KeyVaultKeyAttributes from a dict
key_vault_key_attributes_from_dict = KeyVaultKeyAttributes.from_dict(key_vault_key_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



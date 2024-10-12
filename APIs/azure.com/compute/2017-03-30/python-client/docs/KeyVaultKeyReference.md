# KeyVaultKeyReference

Describes a reference to Key Vault Key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_url** | **str** | The URL referencing a key encryption key in Key Vault. | 
**source_vault** | [**SubResource**](SubResource.md) |  | 

## Example

```python
from openapi_client.models.key_vault_key_reference import KeyVaultKeyReference

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultKeyReference from a JSON string
key_vault_key_reference_instance = KeyVaultKeyReference.from_json(json)
# print the JSON string representation of the object
print(KeyVaultKeyReference.to_json())

# convert the object into a dict
key_vault_key_reference_dict = key_vault_key_reference_instance.to_dict()
# create an instance of KeyVaultKeyReference from a dict
key_vault_key_reference_from_dict = KeyVaultKeyReference.from_dict(key_vault_key_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



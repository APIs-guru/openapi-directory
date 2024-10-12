# KeyVaultKeyReferenceKeyVault

The key vault reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id. | [optional] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_vault_key_reference_key_vault import KeyVaultKeyReferenceKeyVault

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultKeyReferenceKeyVault from a JSON string
key_vault_key_reference_key_vault_instance = KeyVaultKeyReferenceKeyVault.from_json(json)
# print the JSON string representation of the object
print(KeyVaultKeyReferenceKeyVault.to_json())

# convert the object into a dict
key_vault_key_reference_key_vault_dict = key_vault_key_reference_key_vault_instance.to_dict()
# create an instance of KeyVaultKeyReferenceKeyVault from a dict
key_vault_key_reference_key_vault_from_dict = KeyVaultKeyReferenceKeyVault.from_dict(key_vault_key_reference_key_vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



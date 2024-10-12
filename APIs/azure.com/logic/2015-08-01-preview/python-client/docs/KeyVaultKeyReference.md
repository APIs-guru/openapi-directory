# KeyVaultKeyReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | The private key name in key vault. | [optional] 
**key_vault** | [**KeyVaultKeyReferenceKeyVault**](KeyVaultKeyReferenceKeyVault.md) |  | [optional] 
**key_version** | **str** | The private key version in key vault. | [optional] 

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



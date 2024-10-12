# KeyVaultProperties

Properties of key vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyname** | **str** | The name of KeyVault key. | [optional] 
**keyvaulturi** | **str** | The Uri of KeyVault. | [optional] 
**keyversion** | **str** | The version of KeyVault key. | [optional] 

## Example

```python
from openapi_client.models.key_vault_properties import KeyVaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultProperties from a JSON string
key_vault_properties_instance = KeyVaultProperties.from_json(json)
# print the JSON string representation of the object
print(KeyVaultProperties.to_json())

# convert the object into a dict
key_vault_properties_dict = key_vault_properties_instance.to_dict()
# create an instance of KeyVaultProperties from a dict
key_vault_properties_from_dict = KeyVaultProperties.from_dict(key_vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



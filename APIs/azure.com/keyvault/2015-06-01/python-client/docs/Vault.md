# Vault

Resource information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultProperties**](VaultProperties.md) |  | 
**id** | **str** | The Azure Resource Manager resource ID for the key vault. | [optional] [readonly] 
**location** | **str** | The supported Azure location where the key vault should be created. | 
**name** | **str** | The name of the key vault. | 
**tags** | **Dict[str, str]** | The tags that will be assigned to the key vault.  | [optional] 
**type** | **str** | The resource type of the key vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault import Vault

# TODO update the JSON string below
json = "{}"
# create an instance of Vault from a JSON string
vault_instance = Vault.from_json(json)
# print the JSON string representation of the object
print(Vault.to_json())

# convert the object into a dict
vault_dict = vault_instance.to_dict()
# create an instance of Vault from a dict
vault_from_dict = Vault.from_dict(vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



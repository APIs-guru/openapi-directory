# Vault

Resource information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified identifier of the key vault resource. | [optional] [readonly] 
**location** | **str** | Azure location of the key vault resource. | [optional] 
**name** | **str** | Name of the key vault resource. | [optional] [readonly] 
**properties** | [**VaultProperties**](VaultProperties.md) |  | 
**tags** | **Dict[str, str]** | Tags assigned to the key vault resource. | [optional] 
**type** | **str** | Resource type of the key vault resource. | [optional] [readonly] 

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



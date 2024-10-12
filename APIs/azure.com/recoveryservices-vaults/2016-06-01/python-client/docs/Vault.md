# Vault

Resource information, as returned by the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultProperties**](VaultProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

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



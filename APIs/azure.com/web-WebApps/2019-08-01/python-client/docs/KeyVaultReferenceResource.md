# KeyVaultReferenceResource

Web app key vault reference and status ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiKVReference**](ApiKVReference.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_vault_reference_resource import KeyVaultReferenceResource

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultReferenceResource from a JSON string
key_vault_reference_resource_instance = KeyVaultReferenceResource.from_json(json)
# print the JSON string representation of the object
print(KeyVaultReferenceResource.to_json())

# convert the object into a dict
key_vault_reference_resource_dict = key_vault_reference_resource_instance.to_dict()
# create an instance of KeyVaultReferenceResource from a dict
key_vault_reference_resource_from_dict = KeyVaultReferenceResource.from_dict(key_vault_reference_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



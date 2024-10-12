# KeyVaultReferenceCollection

Web app key vault reference and status ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | KeyVaultReferenceCollection resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_vault_reference_collection import KeyVaultReferenceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultReferenceCollection from a JSON string
key_vault_reference_collection_instance = KeyVaultReferenceCollection.from_json(json)
# print the JSON string representation of the object
print(KeyVaultReferenceCollection.to_json())

# convert the object into a dict
key_vault_reference_collection_dict = key_vault_reference_collection_instance.to_dict()
# create an instance of KeyVaultReferenceCollection from a dict
key_vault_reference_collection_from_dict = KeyVaultReferenceCollection.from_dict(key_vault_reference_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



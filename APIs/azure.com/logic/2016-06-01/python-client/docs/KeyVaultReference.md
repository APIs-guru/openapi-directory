# KeyVaultReference

The key vault reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The key vault name. | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_vault_reference import KeyVaultReference

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultReference from a JSON string
key_vault_reference_instance = KeyVaultReference.from_json(json)
# print the JSON string representation of the object
print(KeyVaultReference.to_json())

# convert the object into a dict
key_vault_reference_dict = key_vault_reference_instance.to_dict()
# create an instance of KeyVaultReference from a dict
key_vault_reference_from_dict = KeyVaultReference.from_dict(key_vault_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeletedVault

Deleted vault information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID for the deleted key vault. | [optional] [readonly] 
**name** | **str** | The name of the key vault. | [optional] [readonly] 
**properties** | [**DeletedVaultProperties**](DeletedVaultProperties.md) |  | [optional] 
**type** | **str** | The resource type of the key vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_vault import DeletedVault

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedVault from a JSON string
deleted_vault_instance = DeletedVault.from_json(json)
# print the JSON string representation of the object
print(DeletedVault.to_json())

# convert the object into a dict
deleted_vault_dict = deleted_vault_instance.to_dict()
# create an instance of DeletedVault from a dict
deleted_vault_from_dict = DeletedVault.from_dict(deleted_vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeletedVaultProperties

Properties of the deleted vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletion_date** | **datetime** | The deleted date. | [optional] [readonly] 
**location** | **str** | The location of the original vault. | [optional] [readonly] 
**scheduled_purge_date** | **datetime** | The scheduled purged date. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags of the original vault. | [optional] [readonly] 
**vault_id** | **str** | The resource id of the original vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_vault_properties import DeletedVaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedVaultProperties from a JSON string
deleted_vault_properties_instance = DeletedVaultProperties.from_json(json)
# print the JSON string representation of the object
print(DeletedVaultProperties.to_json())

# convert the object into a dict
deleted_vault_properties_dict = deleted_vault_properties_instance.to_dict()
# create an instance of DeletedVaultProperties from a dict
deleted_vault_properties_from_dict = DeletedVaultProperties.from_dict(deleted_vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



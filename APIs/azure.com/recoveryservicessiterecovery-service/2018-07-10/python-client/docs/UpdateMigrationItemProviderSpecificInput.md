# UpdateMigrationItemProviderSpecificInput

Update migration item provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.update_migration_item_provider_specific_input import UpdateMigrationItemProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMigrationItemProviderSpecificInput from a JSON string
update_migration_item_provider_specific_input_instance = UpdateMigrationItemProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(UpdateMigrationItemProviderSpecificInput.to_json())

# convert the object into a dict
update_migration_item_provider_specific_input_dict = update_migration_item_provider_specific_input_instance.to_dict()
# create an instance of UpdateMigrationItemProviderSpecificInput from a dict
update_migration_item_provider_specific_input_from_dict = UpdateMigrationItemProviderSpecificInput.from_dict(update_migration_item_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



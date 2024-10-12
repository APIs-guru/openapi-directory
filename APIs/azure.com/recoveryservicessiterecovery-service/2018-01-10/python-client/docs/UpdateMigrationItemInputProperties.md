# UpdateMigrationItemInputProperties

Update migration item input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**UpdateMigrationItemProviderSpecificInput**](UpdateMigrationItemProviderSpecificInput.md) |  | 

## Example

```python
from openapi_client.models.update_migration_item_input_properties import UpdateMigrationItemInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMigrationItemInputProperties from a JSON string
update_migration_item_input_properties_instance = UpdateMigrationItemInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateMigrationItemInputProperties.to_json())

# convert the object into a dict
update_migration_item_input_properties_dict = update_migration_item_input_properties_instance.to_dict()
# create an instance of UpdateMigrationItemInputProperties from a dict
update_migration_item_input_properties_from_dict = UpdateMigrationItemInputProperties.from_dict(update_migration_item_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



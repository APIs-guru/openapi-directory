# UpdateMigrationItemInput

Update migration item input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateMigrationItemInputProperties**](UpdateMigrationItemInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_migration_item_input import UpdateMigrationItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMigrationItemInput from a JSON string
update_migration_item_input_instance = UpdateMigrationItemInput.from_json(json)
# print the JSON string representation of the object
print(UpdateMigrationItemInput.to_json())

# convert the object into a dict
update_migration_item_input_dict = update_migration_item_input_instance.to_dict()
# create an instance of UpdateMigrationItemInput from a dict
update_migration_item_input_from_dict = UpdateMigrationItemInput.from_dict(update_migration_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



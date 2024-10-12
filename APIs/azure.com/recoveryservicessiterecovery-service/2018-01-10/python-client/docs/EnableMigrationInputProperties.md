# EnableMigrationInputProperties

Enable migration input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | The policy Id. | 
**provider_specific_details** | [**EnableMigrationProviderSpecificInput**](EnableMigrationProviderSpecificInput.md) |  | 

## Example

```python
from openapi_client.models.enable_migration_input_properties import EnableMigrationInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnableMigrationInputProperties from a JSON string
enable_migration_input_properties_instance = EnableMigrationInputProperties.from_json(json)
# print the JSON string representation of the object
print(EnableMigrationInputProperties.to_json())

# convert the object into a dict
enable_migration_input_properties_dict = enable_migration_input_properties_instance.to_dict()
# create an instance of EnableMigrationInputProperties from a dict
enable_migration_input_properties_from_dict = EnableMigrationInputProperties.from_dict(enable_migration_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



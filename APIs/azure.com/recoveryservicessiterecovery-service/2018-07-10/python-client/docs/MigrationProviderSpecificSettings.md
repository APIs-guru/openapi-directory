# MigrationProviderSpecificSettings

Migration provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_provider_specific_settings import MigrationProviderSpecificSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationProviderSpecificSettings from a JSON string
migration_provider_specific_settings_instance = MigrationProviderSpecificSettings.from_json(json)
# print the JSON string representation of the object
print(MigrationProviderSpecificSettings.to_json())

# convert the object into a dict
migration_provider_specific_settings_dict = migration_provider_specific_settings_instance.to_dict()
# create an instance of MigrationProviderSpecificSettings from a dict
migration_provider_specific_settings_from_dict = MigrationProviderSpecificSettings.from_dict(migration_provider_specific_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



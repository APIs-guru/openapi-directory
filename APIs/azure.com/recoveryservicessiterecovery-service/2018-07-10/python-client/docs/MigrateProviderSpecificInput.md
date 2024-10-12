# MigrateProviderSpecificInput

Migrate provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | 

## Example

```python
from openapi_client.models.migrate_provider_specific_input import MigrateProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateProviderSpecificInput from a JSON string
migrate_provider_specific_input_instance = MigrateProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(MigrateProviderSpecificInput.to_json())

# convert the object into a dict
migrate_provider_specific_input_dict = migrate_provider_specific_input_instance.to_dict()
# create an instance of MigrateProviderSpecificInput from a dict
migrate_provider_specific_input_from_dict = MigrateProviderSpecificInput.from_dict(migrate_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



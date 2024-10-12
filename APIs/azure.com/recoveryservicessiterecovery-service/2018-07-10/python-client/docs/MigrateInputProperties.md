# MigrateInputProperties

Migrate input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**MigrateProviderSpecificInput**](MigrateProviderSpecificInput.md) |  | 

## Example

```python
from openapi_client.models.migrate_input_properties import MigrateInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateInputProperties from a JSON string
migrate_input_properties_instance = MigrateInputProperties.from_json(json)
# print the JSON string representation of the object
print(MigrateInputProperties.to_json())

# convert the object into a dict
migrate_input_properties_dict = migrate_input_properties_instance.to_dict()
# create an instance of MigrateInputProperties from a dict
migrate_input_properties_from_dict = MigrateInputProperties.from_dict(migrate_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



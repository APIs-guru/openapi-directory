# TestMigrateInputProperties

Test migrate input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**TestMigrateProviderSpecificInput**](TestMigrateProviderSpecificInput.md) |  | 

## Example

```python
from openapi_client.models.test_migrate_input_properties import TestMigrateInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TestMigrateInputProperties from a JSON string
test_migrate_input_properties_instance = TestMigrateInputProperties.from_json(json)
# print the JSON string representation of the object
print(TestMigrateInputProperties.to_json())

# convert the object into a dict
test_migrate_input_properties_dict = test_migrate_input_properties_instance.to_dict()
# create an instance of TestMigrateInputProperties from a dict
test_migrate_input_properties_from_dict = TestMigrateInputProperties.from_dict(test_migrate_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



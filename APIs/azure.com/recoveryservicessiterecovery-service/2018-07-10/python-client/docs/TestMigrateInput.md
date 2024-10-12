# TestMigrateInput

Input for test migrate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TestMigrateInputProperties**](TestMigrateInputProperties.md) |  | 

## Example

```python
from openapi_client.models.test_migrate_input import TestMigrateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TestMigrateInput from a JSON string
test_migrate_input_instance = TestMigrateInput.from_json(json)
# print the JSON string representation of the object
print(TestMigrateInput.to_json())

# convert the object into a dict
test_migrate_input_dict = test_migrate_input_instance.to_dict()
# create an instance of TestMigrateInput from a dict
test_migrate_input_from_dict = TestMigrateInput.from_dict(test_migrate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



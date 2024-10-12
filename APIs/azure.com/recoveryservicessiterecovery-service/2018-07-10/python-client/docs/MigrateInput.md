# MigrateInput

Input for migrate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MigrateInputProperties**](MigrateInputProperties.md) |  | 

## Example

```python
from openapi_client.models.migrate_input import MigrateInput

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateInput from a JSON string
migrate_input_instance = MigrateInput.from_json(json)
# print the JSON string representation of the object
print(MigrateInput.to_json())

# convert the object into a dict
migrate_input_dict = migrate_input_instance.to_dict()
# create an instance of MigrateInput from a dict
migrate_input_from_dict = MigrateInput.from_dict(migrate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



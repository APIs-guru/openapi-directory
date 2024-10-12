# RemindersDeleteSchema

Schema for successful response from reminders.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_delete_schema import RemindersDeleteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersDeleteSchema from a JSON string
reminders_delete_schema_instance = RemindersDeleteSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersDeleteSchema.to_json())

# convert the object into a dict
reminders_delete_schema_dict = reminders_delete_schema_instance.to_dict()
# create an instance of RemindersDeleteSchema from a dict
reminders_delete_schema_from_dict = RemindersDeleteSchema.from_dict(reminders_delete_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



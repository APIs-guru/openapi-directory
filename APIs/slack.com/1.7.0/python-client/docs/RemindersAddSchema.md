# RemindersAddSchema

Schema for successful response from reminders.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**reminder** | [**ObjsReminder**](ObjsReminder.md) |  | 

## Example

```python
from openapi_client.models.reminders_add_schema import RemindersAddSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersAddSchema from a JSON string
reminders_add_schema_instance = RemindersAddSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersAddSchema.to_json())

# convert the object into a dict
reminders_add_schema_dict = reminders_add_schema_instance.to_dict()
# create an instance of RemindersAddSchema from a dict
reminders_add_schema_from_dict = RemindersAddSchema.from_dict(reminders_add_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



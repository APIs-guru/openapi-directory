# RemindersAddErrorSchema

Schema for error response from reminders.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_add_error_schema import RemindersAddErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersAddErrorSchema from a JSON string
reminders_add_error_schema_instance = RemindersAddErrorSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersAddErrorSchema.to_json())

# convert the object into a dict
reminders_add_error_schema_dict = reminders_add_error_schema_instance.to_dict()
# create an instance of RemindersAddErrorSchema from a dict
reminders_add_error_schema_from_dict = RemindersAddErrorSchema.from_dict(reminders_add_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RemindersDeleteErrorSchema

Schema for error response from reminders.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_delete_error_schema import RemindersDeleteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersDeleteErrorSchema from a JSON string
reminders_delete_error_schema_instance = RemindersDeleteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersDeleteErrorSchema.to_json())

# convert the object into a dict
reminders_delete_error_schema_dict = reminders_delete_error_schema_instance.to_dict()
# create an instance of RemindersDeleteErrorSchema from a dict
reminders_delete_error_schema_from_dict = RemindersDeleteErrorSchema.from_dict(reminders_delete_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



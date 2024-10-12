# RemindersCompleteErrorSchema

Schema for error response from reminders.complete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_complete_error_schema import RemindersCompleteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersCompleteErrorSchema from a JSON string
reminders_complete_error_schema_instance = RemindersCompleteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersCompleteErrorSchema.to_json())

# convert the object into a dict
reminders_complete_error_schema_dict = reminders_complete_error_schema_instance.to_dict()
# create an instance of RemindersCompleteErrorSchema from a dict
reminders_complete_error_schema_from_dict = RemindersCompleteErrorSchema.from_dict(reminders_complete_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



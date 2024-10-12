# RemindersInfoErrorSchema

Schema for error response from reminders.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_info_error_schema import RemindersInfoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersInfoErrorSchema from a JSON string
reminders_info_error_schema_instance = RemindersInfoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersInfoErrorSchema.to_json())

# convert the object into a dict
reminders_info_error_schema_dict = reminders_info_error_schema_instance.to_dict()
# create an instance of RemindersInfoErrorSchema from a dict
reminders_info_error_schema_from_dict = RemindersInfoErrorSchema.from_dict(reminders_info_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



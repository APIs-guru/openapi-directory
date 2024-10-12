# ChatScheduleMessageErrorSchema

Schema for error response chat.scheduleMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_schedule_message_error_schema import ChatScheduleMessageErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduleMessageErrorSchema from a JSON string
chat_schedule_message_error_schema_instance = ChatScheduleMessageErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatScheduleMessageErrorSchema.to_json())

# convert the object into a dict
chat_schedule_message_error_schema_dict = chat_schedule_message_error_schema_instance.to_dict()
# create an instance of ChatScheduleMessageErrorSchema from a dict
chat_schedule_message_error_schema_from_dict = ChatScheduleMessageErrorSchema.from_dict(chat_schedule_message_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChatScheduleMessageSuccessSchema

Schema for successful response of chat.scheduleMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**message** | [**ChatScheduleMessageSuccessSchemaMessage**](ChatScheduleMessageSuccessSchemaMessage.md) |  | 
**ok** | **bool** |  | 
**post_at** | **int** |  | 
**scheduled_message_id** | **str** |  | 

## Example

```python
from openapi_client.models.chat_schedule_message_success_schema import ChatScheduleMessageSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduleMessageSuccessSchema from a JSON string
chat_schedule_message_success_schema_instance = ChatScheduleMessageSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatScheduleMessageSuccessSchema.to_json())

# convert the object into a dict
chat_schedule_message_success_schema_dict = chat_schedule_message_success_schema_instance.to_dict()
# create an instance of ChatScheduleMessageSuccessSchema from a dict
chat_schedule_message_success_schema_from_dict = ChatScheduleMessageSuccessSchema.from_dict(chat_schedule_message_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



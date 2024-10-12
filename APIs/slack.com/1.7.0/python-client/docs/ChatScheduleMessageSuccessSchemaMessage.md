# ChatScheduleMessageSuccessSchemaMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_id** | **str** |  | 
**bot_profile** | [**ObjsBotProfile**](ObjsBotProfile.md) |  | [optional] 
**team** | **str** |  | 
**text** | **str** |  | 
**type** | **str** |  | 
**user** | **str** |  | 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.chat_schedule_message_success_schema_message import ChatScheduleMessageSuccessSchemaMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduleMessageSuccessSchemaMessage from a JSON string
chat_schedule_message_success_schema_message_instance = ChatScheduleMessageSuccessSchemaMessage.from_json(json)
# print the JSON string representation of the object
print(ChatScheduleMessageSuccessSchemaMessage.to_json())

# convert the object into a dict
chat_schedule_message_success_schema_message_dict = chat_schedule_message_success_schema_message_instance.to_dict()
# create an instance of ChatScheduleMessageSuccessSchemaMessage from a dict
chat_schedule_message_success_schema_message_from_dict = ChatScheduleMessageSuccessSchemaMessage.from_dict(chat_schedule_message_success_schema_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChatScheduledMessagesListErrorSchema

Schema for error response from chat.scheduledMessages.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_scheduled_messages_list_error_schema import ChatScheduledMessagesListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduledMessagesListErrorSchema from a JSON string
chat_scheduled_messages_list_error_schema_instance = ChatScheduledMessagesListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatScheduledMessagesListErrorSchema.to_json())

# convert the object into a dict
chat_scheduled_messages_list_error_schema_dict = chat_scheduled_messages_list_error_schema_instance.to_dict()
# create an instance of ChatScheduledMessagesListErrorSchema from a dict
chat_scheduled_messages_list_error_schema_from_dict = ChatScheduledMessagesListErrorSchema.from_dict(chat_scheduled_messages_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



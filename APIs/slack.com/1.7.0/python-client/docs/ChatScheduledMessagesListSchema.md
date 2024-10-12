# ChatScheduledMessagesListSchema

Schema for successful response from chat.scheduledMessages.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**response_metadata** | [**AdminConversationsGetTeamsSchemaResponseMetadata**](AdminConversationsGetTeamsSchemaResponseMetadata.md) |  | 
**scheduled_messages** | [**List[ChatScheduledMessagesListSchemaScheduledMessagesInner]**](ChatScheduledMessagesListSchemaScheduledMessagesInner.md) |  | 

## Example

```python
from openapi_client.models.chat_scheduled_messages_list_schema import ChatScheduledMessagesListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduledMessagesListSchema from a JSON string
chat_scheduled_messages_list_schema_instance = ChatScheduledMessagesListSchema.from_json(json)
# print the JSON string representation of the object
print(ChatScheduledMessagesListSchema.to_json())

# convert the object into a dict
chat_scheduled_messages_list_schema_dict = chat_scheduled_messages_list_schema_instance.to_dict()
# create an instance of ChatScheduledMessagesListSchema from a dict
chat_scheduled_messages_list_schema_from_dict = ChatScheduledMessagesListSchema.from_dict(chat_scheduled_messages_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChatScheduledMessagesListSchemaScheduledMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**date_created** | **int** |  | 
**id** | **str** |  | 
**post_at** | **int** |  | 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.chat_scheduled_messages_list_schema_scheduled_messages_inner import ChatScheduledMessagesListSchemaScheduledMessagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChatScheduledMessagesListSchemaScheduledMessagesInner from a JSON string
chat_scheduled_messages_list_schema_scheduled_messages_inner_instance = ChatScheduledMessagesListSchemaScheduledMessagesInner.from_json(json)
# print the JSON string representation of the object
print(ChatScheduledMessagesListSchemaScheduledMessagesInner.to_json())

# convert the object into a dict
chat_scheduled_messages_list_schema_scheduled_messages_inner_dict = chat_scheduled_messages_list_schema_scheduled_messages_inner_instance.to_dict()
# create an instance of ChatScheduledMessagesListSchemaScheduledMessagesInner from a dict
chat_scheduled_messages_list_schema_scheduled_messages_inner_from_dict = ChatScheduledMessagesListSchemaScheduledMessagesInner.from_dict(chat_scheduled_messages_list_schema_scheduled_messages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



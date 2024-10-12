# ChatDeleteScheduledMessageSchema

Schema for successful response from chat.deleteScheduledMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_delete_scheduled_message_schema import ChatDeleteScheduledMessageSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatDeleteScheduledMessageSchema from a JSON string
chat_delete_scheduled_message_schema_instance = ChatDeleteScheduledMessageSchema.from_json(json)
# print the JSON string representation of the object
print(ChatDeleteScheduledMessageSchema.to_json())

# convert the object into a dict
chat_delete_scheduled_message_schema_dict = chat_delete_scheduled_message_schema_instance.to_dict()
# create an instance of ChatDeleteScheduledMessageSchema from a dict
chat_delete_scheduled_message_schema_from_dict = ChatDeleteScheduledMessageSchema.from_dict(chat_delete_scheduled_message_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



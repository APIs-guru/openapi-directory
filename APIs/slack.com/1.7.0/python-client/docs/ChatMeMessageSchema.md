# ChatMeMessageSchema

Schema for successful response from chat.meMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | [optional] 
**ok** | **bool** |  | 
**ts** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.chat_me_message_schema import ChatMeMessageSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatMeMessageSchema from a JSON string
chat_me_message_schema_instance = ChatMeMessageSchema.from_json(json)
# print the JSON string representation of the object
print(ChatMeMessageSchema.to_json())

# convert the object into a dict
chat_me_message_schema_dict = chat_me_message_schema_instance.to_dict()
# create an instance of ChatMeMessageSchema from a dict
chat_me_message_schema_from_dict = ChatMeMessageSchema.from_dict(chat_me_message_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



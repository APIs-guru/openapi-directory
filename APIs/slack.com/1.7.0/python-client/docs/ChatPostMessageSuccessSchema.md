# ChatPostMessageSuccessSchema

Schema for successful response of chat.postMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | 
**ok** | **bool** |  | 
**ts** | **str** |  | 

## Example

```python
from openapi_client.models.chat_post_message_success_schema import ChatPostMessageSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatPostMessageSuccessSchema from a JSON string
chat_post_message_success_schema_instance = ChatPostMessageSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatPostMessageSuccessSchema.to_json())

# convert the object into a dict
chat_post_message_success_schema_dict = chat_post_message_success_schema_instance.to_dict()
# create an instance of ChatPostMessageSuccessSchema from a dict
chat_post_message_success_schema_from_dict = ChatPostMessageSuccessSchema.from_dict(chat_post_message_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



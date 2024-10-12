# ChatMeMessageErrorSchema

Schema for error response from chat.meMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_me_message_error_schema import ChatMeMessageErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatMeMessageErrorSchema from a JSON string
chat_me_message_error_schema_instance = ChatMeMessageErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatMeMessageErrorSchema.to_json())

# convert the object into a dict
chat_me_message_error_schema_dict = chat_me_message_error_schema_instance.to_dict()
# create an instance of ChatMeMessageErrorSchema from a dict
chat_me_message_error_schema_from_dict = ChatMeMessageErrorSchema.from_dict(chat_me_message_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



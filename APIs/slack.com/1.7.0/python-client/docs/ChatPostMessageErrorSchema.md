# ChatPostMessageErrorSchema

Schema for error response chat.postMessage method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_post_message_error_schema import ChatPostMessageErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatPostMessageErrorSchema from a JSON string
chat_post_message_error_schema_instance = ChatPostMessageErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatPostMessageErrorSchema.to_json())

# convert the object into a dict
chat_post_message_error_schema_dict = chat_post_message_error_schema_instance.to_dict()
# create an instance of ChatPostMessageErrorSchema from a dict
chat_post_message_error_schema_from_dict = ChatPostMessageErrorSchema.from_dict(chat_post_message_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



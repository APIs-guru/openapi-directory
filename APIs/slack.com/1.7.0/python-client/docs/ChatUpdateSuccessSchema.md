# ChatUpdateSuccessSchema

Schema for successful response of chat.update method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**message** | [**MessageObject**](MessageObject.md) |  | 
**ok** | **bool** |  | 
**text** | **str** |  | 
**ts** | **str** |  | 

## Example

```python
from openapi_client.models.chat_update_success_schema import ChatUpdateSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatUpdateSuccessSchema from a JSON string
chat_update_success_schema_instance = ChatUpdateSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatUpdateSuccessSchema.to_json())

# convert the object into a dict
chat_update_success_schema_dict = chat_update_success_schema_instance.to_dict()
# create an instance of ChatUpdateSuccessSchema from a dict
chat_update_success_schema_from_dict = ChatUpdateSuccessSchema.from_dict(chat_update_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChatDeleteSuccessSchema

Schema for successful response of chat.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**ok** | **bool** |  | 
**ts** | **str** |  | 

## Example

```python
from openapi_client.models.chat_delete_success_schema import ChatDeleteSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatDeleteSuccessSchema from a JSON string
chat_delete_success_schema_instance = ChatDeleteSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatDeleteSuccessSchema.to_json())

# convert the object into a dict
chat_delete_success_schema_dict = chat_delete_success_schema_instance.to_dict()
# create an instance of ChatDeleteSuccessSchema from a dict
chat_delete_success_schema_from_dict = ChatDeleteSuccessSchema.from_dict(chat_delete_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



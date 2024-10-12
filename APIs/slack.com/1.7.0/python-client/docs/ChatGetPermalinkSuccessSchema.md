# ChatGetPermalinkSuccessSchema

Schema for successful response chat.getPermalink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**ok** | **bool** |  | 
**permalink** | **str** |  | 

## Example

```python
from openapi_client.models.chat_get_permalink_success_schema import ChatGetPermalinkSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatGetPermalinkSuccessSchema from a JSON string
chat_get_permalink_success_schema_instance = ChatGetPermalinkSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatGetPermalinkSuccessSchema.to_json())

# convert the object into a dict
chat_get_permalink_success_schema_dict = chat_get_permalink_success_schema_instance.to_dict()
# create an instance of ChatGetPermalinkSuccessSchema from a dict
chat_get_permalink_success_schema_from_dict = ChatGetPermalinkSuccessSchema.from_dict(chat_get_permalink_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConversationsCloseSuccessSchema

Schema for successful response conversations.close method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_closed** | **bool** |  | [optional] 
**no_op** | **bool** |  | [optional] 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_close_success_schema import ConversationsCloseSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsCloseSuccessSchema from a JSON string
conversations_close_success_schema_instance = ConversationsCloseSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsCloseSuccessSchema.to_json())

# convert the object into a dict
conversations_close_success_schema_dict = conversations_close_success_schema_instance.to_dict()
# create an instance of ConversationsCloseSuccessSchema from a dict
conversations_close_success_schema_from_dict = ConversationsCloseSuccessSchema.from_dict(conversations_close_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



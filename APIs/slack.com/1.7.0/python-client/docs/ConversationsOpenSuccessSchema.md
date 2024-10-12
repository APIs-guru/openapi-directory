# ConversationsOpenSuccessSchema

Schema for successful response from conversations.open method when opening channels, ims, mpims

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_open** | **bool** |  | [optional] 
**channel** | [**List[ConversationsOpenSuccessSchemaChannelInner]**](ConversationsOpenSuccessSchemaChannelInner.md) |  | 
**no_op** | **bool** |  | [optional] 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_open_success_schema import ConversationsOpenSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsOpenSuccessSchema from a JSON string
conversations_open_success_schema_instance = ConversationsOpenSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsOpenSuccessSchema.to_json())

# convert the object into a dict
conversations_open_success_schema_dict = conversations_open_success_schema_instance.to_dict()
# create an instance of ConversationsOpenSuccessSchema from a dict
conversations_open_success_schema_from_dict = ConversationsOpenSuccessSchema.from_dict(conversations_open_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



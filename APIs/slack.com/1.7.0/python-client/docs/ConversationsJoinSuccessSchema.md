# ConversationsJoinSuccessSchema

Schema for successful response from conversations.join method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 
**response_metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**warning** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.conversations_join_success_schema import ConversationsJoinSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsJoinSuccessSchema from a JSON string
conversations_join_success_schema_instance = ConversationsJoinSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsJoinSuccessSchema.to_json())

# convert the object into a dict
conversations_join_success_schema_dict = conversations_join_success_schema_instance.to_dict()
# create an instance of ConversationsJoinSuccessSchema from a dict
conversations_join_success_schema_from_dict = ConversationsJoinSuccessSchema.from_dict(conversations_join_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



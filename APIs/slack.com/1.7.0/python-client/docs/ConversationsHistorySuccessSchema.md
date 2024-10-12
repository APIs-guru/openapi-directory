# ConversationsHistorySuccessSchema

Schema for successful response from conversations.history method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_actions_count** | **int** |  | 
**channel_actions_ts** | [**List[ConversationsHistorySuccessSchemaChannelActionsTsInner]**](ConversationsHistorySuccessSchemaChannelActionsTsInner.md) |  | 
**has_more** | **bool** |  | 
**messages** | [**List[ObjsMessage]**](ObjsMessage.md) |  | 
**ok** | **bool** |  | 
**pin_count** | **int** |  | 

## Example

```python
from openapi_client.models.conversations_history_success_schema import ConversationsHistorySuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsHistorySuccessSchema from a JSON string
conversations_history_success_schema_instance = ConversationsHistorySuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsHistorySuccessSchema.to_json())

# convert the object into a dict
conversations_history_success_schema_dict = conversations_history_success_schema_instance.to_dict()
# create an instance of ConversationsHistorySuccessSchema from a dict
conversations_history_success_schema_from_dict = ConversationsHistorySuccessSchema.from_dict(conversations_history_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



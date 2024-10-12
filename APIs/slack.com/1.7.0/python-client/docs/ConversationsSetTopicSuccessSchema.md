# ConversationsSetTopicSuccessSchema

Schema for successful response from conversations.setTopic method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_set_topic_success_schema import ConversationsSetTopicSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsSetTopicSuccessSchema from a JSON string
conversations_set_topic_success_schema_instance = ConversationsSetTopicSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsSetTopicSuccessSchema.to_json())

# convert the object into a dict
conversations_set_topic_success_schema_dict = conversations_set_topic_success_schema_instance.to_dict()
# create an instance of ConversationsSetTopicSuccessSchema from a dict
conversations_set_topic_success_schema_from_dict = ConversationsSetTopicSuccessSchema.from_dict(conversations_set_topic_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



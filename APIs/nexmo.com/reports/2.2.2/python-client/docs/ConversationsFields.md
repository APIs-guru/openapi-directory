# ConversationsFields

Conversations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | Search only for events sent to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**product** | [**ProductConversations**](ProductConversations.md) |  | [optional] 
**status** | **str** | Search only for conversation events with the specified event status. | [optional] 

## Example

```python
from openapi_client.models.conversations_fields import ConversationsFields

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsFields from a JSON string
conversations_fields_instance = ConversationsFields.from_json(json)
# print the JSON string representation of the object
print(ConversationsFields.to_json())

# convert the object into a dict
conversations_fields_dict = conversations_fields_instance.to_dict()
# create an instance of ConversationsFields from a dict
conversations_fields_from_dict = ConversationsFields.from_dict(conversations_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



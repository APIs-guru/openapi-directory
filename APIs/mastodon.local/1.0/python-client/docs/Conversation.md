# Conversation

Represents a conversation with \"direct message\" visibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[Account]**](Account.md) | Participants in the conversation. | 
**id** | **str** | Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number | 
**last_status** | [**Status**](Status.md) |  | [optional] 
**unread** | **bool** | Is the conversation currently marked as unread? | 

## Example

```python
from openapi_client.models.conversation import Conversation

# TODO update the JSON string below
json = "{}"
# create an instance of Conversation from a JSON string
conversation_instance = Conversation.from_json(json)
# print the JSON string representation of the object
print(Conversation.to_json())

# convert the object into a dict
conversation_dict = conversation_instance.to_dict()
# create an instance of Conversation from a dict
conversation_from_dict = Conversation.from_dict(conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



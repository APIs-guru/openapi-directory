# Conversation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar** | **str** | The URL of the small avatar image of the conversation | [optional] 
**avatar_large** | **str** | The URL of the large avatar image of the conversation | [optional] 
**conv_id** | **str** | The ID of the conversation | [optional] 
**creation_time** | **float** | UTC timestamp when the conversation was created | [optional] 
**creator_id** | **str** | The ID of the user who created the conversation | [optional] 
**creator_tenant_id** | **str** | The ID of the Circuit domain (tenant) where the creator of the conversation belongs to | [optional] 
**description** | **str** | The description of the conversation. This field is available only for conversations with type COMMUNITY | [optional] 
**is_guest_access_disabled** | **bool** | Indicates whether guest access to the conversation is disabled or not | [optional] 
**is_moderated** | **bool** | Indicates whether the conversation is moderated or not. In a moderated conversation only participants who have been assigned the role of a moderator are allowed to add or remove participants into the conversation | [optional] 
**modification_time** | **float** | UTC timestamp when the conversation was modified. A conversation is modified when any of the conversation object fields change but not when conversation items are added or edited | [optional] 
**participants** | **List[str]** | Array of active participants | [optional] 
**topic** | **str** | The title of the conversation. Conversations of type DIRECT cannot have a title | [optional] 
**topic_placeholder** | **str** | The title of the conversation. Conversations of type DIRECT cannot have a title | [optional] 
**type** | **str** | The type of the conversation. It can be one of the following: DIRECT, GROUP, COMMUNITY or LARGE | [optional] 

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



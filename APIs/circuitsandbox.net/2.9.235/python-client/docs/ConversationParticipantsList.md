# ConversationParticipantsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | are more results available, then start another search with finer query | [optional] 
**participant_list** | [**List[ConversationParticipant]**](ConversationParticipant.md) | list of participants | [optional] 
**search_pointer** | **str** | pointer for stored search  | [optional] 

## Example

```python
from openapi_client.models.conversation_participants_list import ConversationParticipantsList

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationParticipantsList from a JSON string
conversation_participants_list_instance = ConversationParticipantsList.from_json(json)
# print the JSON string representation of the object
print(ConversationParticipantsList.to_json())

# convert the object into a dict
conversation_participants_list_dict = conversation_participants_list_instance.to_dict()
# create an instance of ConversationParticipantsList from a dict
conversation_participants_list_from_dict = ConversationParticipantsList.from_dict(conversation_participants_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



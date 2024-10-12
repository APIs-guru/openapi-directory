# ConversationParticipant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the participant. | [optional] 
**first_name** | **str** | The first name of the participant. | [optional] 
**is_deleted** | **bool** | If the participant is deleted. | [optional] 
**large_image_uri** | **str** | The large image uri of the participant. | [optional] 
**last_name** | **str** | The last name of the participant. | [optional] 
**small_image_uri** | **str** | The small image uri of the participant; | [optional] 
**type** | **str** | The type of the participant | [optional] 
**user_id** | **str** | The unique user id of the participant. | [optional] 

## Example

```python
from openapi_client.models.conversation_participant import ConversationParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationParticipant from a JSON string
conversation_participant_instance = ConversationParticipant.from_json(json)
# print the JSON string representation of the object
print(ConversationParticipant.to_json())

# convert the object into a dict
conversation_participant_dict = conversation_participant_instance.to_dict()
# create an instance of ConversationParticipant from a dict
conversation_participant_from_dict = ConversationParticipant.from_dict(conversation_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Get2DmConversationsWithParticipantIdDmEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DmEvent]**](DmEvent.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2DmConversationsIdDmEventsResponseMeta**](Get2DmConversationsIdDmEventsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_dm_conversations_with_participant_id_dm_events_response import Get2DmConversationsWithParticipantIdDmEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2DmConversationsWithParticipantIdDmEventsResponse from a JSON string
get2_dm_conversations_with_participant_id_dm_events_response_instance = Get2DmConversationsWithParticipantIdDmEventsResponse.from_json(json)
# print the JSON string representation of the object
print(Get2DmConversationsWithParticipantIdDmEventsResponse.to_json())

# convert the object into a dict
get2_dm_conversations_with_participant_id_dm_events_response_dict = get2_dm_conversations_with_participant_id_dm_events_response_instance.to_dict()
# create an instance of Get2DmConversationsWithParticipantIdDmEventsResponse from a dict
get2_dm_conversations_with_participant_id_dm_events_response_from_dict = Get2DmConversationsWithParticipantIdDmEventsResponse.from_dict(get2_dm_conversations_with_participant_id_dm_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



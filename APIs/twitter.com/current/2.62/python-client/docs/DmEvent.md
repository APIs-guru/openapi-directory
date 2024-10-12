# DmEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**DmEventAttachments**](DmEventAttachments.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**dm_conversation_id** | **str** | Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a &#39;-&#39; character in the case of one-on-one DM Conversations. | [optional] 
**event_type** | **str** |  | 
**id** | **str** | Unique identifier of a DM Event. | 
**participant_ids** | **List[str]** | A list of participants for a ParticipantsJoin or ParticipantsLeave event_type. | [optional] 
**referenced_tweets** | [**List[DmEventReferencedTweetsInner]**](DmEventReferencedTweetsInner.md) | A list of Tweets this DM refers to. | [optional] 
**sender_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.dm_event import DmEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DmEvent from a JSON string
dm_event_instance = DmEvent.from_json(json)
# print the JSON string representation of the object
print(DmEvent.to_json())

# convert the object into a dict
dm_event_dict = dm_event_instance.to_dict()
# create an instance of DmEvent from a dict
dm_event_from_dict = DmEvent.from_dict(dm_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



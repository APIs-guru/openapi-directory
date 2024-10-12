# Space



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Creation time of the Space. | [optional] 
**creator_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**ended_at** | **datetime** | End time of the Space. | [optional] 
**host_ids** | **List[str]** | The user ids for the hosts of the Space. | [optional] 
**id** | **str** | The unique identifier of this Space. | 
**invited_user_ids** | **List[str]** | An array of user ids for people who were invited to a Space. | [optional] 
**is_ticketed** | **bool** | Denotes if the Space is a ticketed Space. | [optional] 
**lang** | **str** | The language of the Space. | [optional] 
**participant_count** | **int** | The number of participants in a Space. | [optional] 
**scheduled_start** | **datetime** | A date time stamp for when a Space is scheduled to begin. | [optional] 
**speaker_ids** | **List[str]** | An array of user ids for people who were speakers in a Space. | [optional] 
**started_at** | **datetime** | When the Space was started as a date string. | [optional] 
**state** | **str** | The current state of the Space. | 
**subscriber_count** | **int** | The number of people who have either purchased a ticket or set a reminder for this Space. | [optional] 
**title** | **str** | The title of the Space. | [optional] 
**topics** | [**List[SpaceTopicsInner]**](SpaceTopicsInner.md) | The topics of a Space, as selected by its creator. | [optional] 
**updated_at** | **datetime** | When the Space was last updated. | [optional] 

## Example

```python
from openapi_client.models.space import Space

# TODO update the JSON string below
json = "{}"
# create an instance of Space from a JSON string
space_instance = Space.from_json(json)
# print the JSON string representation of the object
print(Space.to_json())

# convert the object into a dict
space_dict = space_instance.to_dict()
# create an instance of Space from a dict
space_from_dict = Space.from_dict(space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



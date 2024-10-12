# MeetingEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**id** | **str** | Meeting Identifier | [optional] 
**location** | **str** | Location | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**result** | **str** | Result | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Subject | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.meeting_entity import MeetingEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MeetingEntity from a JSON string
meeting_entity_instance = MeetingEntity.from_json(json)
# print the JSON string representation of the object
print(MeetingEntity.to_json())

# convert the object into a dict
meeting_entity_dict = meeting_entity_instance.to_dict()
# create an instance of MeetingEntity from a dict
meeting_entity_from_dict = MeetingEntity.from_dict(meeting_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



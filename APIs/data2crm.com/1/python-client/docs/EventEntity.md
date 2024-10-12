# EventEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**id** | **str** | Event Identifier | [optional] 
**is_all_day** | **bool** | Is All Day | [optional] 
**location** | **str** | Location | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Subject | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.event_entity import EventEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EventEntity from a JSON string
event_entity_instance = EventEntity.from_json(json)
# print the JSON string representation of the object
print(EventEntity.to_json())

# convert the object into a dict
event_entity_dict = event_entity_instance.to_dict()
# create an instance of EventEntity from a dict
event_entity_from_dict = EventEntity.from_dict(event_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



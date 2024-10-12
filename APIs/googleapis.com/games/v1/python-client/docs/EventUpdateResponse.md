# EventUpdateResponse

An event period update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_failures** | [**List[EventBatchRecordFailure]**](EventBatchRecordFailure.md) | Any batch-wide failures which occurred applying updates. | [optional] 
**event_failures** | [**List[EventRecordFailure]**](EventRecordFailure.md) | Any failures updating a particular event. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventUpdateResponse&#x60;. | [optional] 
**player_events** | [**List[PlayerEvent]**](PlayerEvent.md) | The current status of any updated events | [optional] 

## Example

```python
from openapi_client.models.event_update_response import EventUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventUpdateResponse from a JSON string
event_update_response_instance = EventUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(EventUpdateResponse.to_json())

# convert the object into a dict
event_update_response_dict = event_update_response_instance.to_dict()
# create an instance of EventUpdateResponse from a dict
event_update_response_from_dict = EventUpdateResponse.from_dict(event_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



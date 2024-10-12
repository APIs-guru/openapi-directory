# StatusActiveEvent

Active event type of emerging issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **str** | The cloud type of this active event. | [optional] 
**description** | **str** | The details of active event. | [optional] 
**impacts** | [**List[EmergingIssueImpact]**](EmergingIssueImpact.md) | The list of emerging issues impacts. | [optional] 
**last_modified_time** | **datetime** | The last time modified on this banner. | [optional] 
**published** | **bool** | The boolean value of this active event if published or not. | [optional] 
**severity** | **str** | The severity level of this active event. | [optional] 
**stage** | **str** | The stage of this active event. | [optional] 
**start_time** | **datetime** | The impact start time on this active event. | [optional] 
**title** | **str** | The active event title. | [optional] 
**tracking_id** | **str** | The tracking id of this active event. | [optional] 

## Example

```python
from openapi_client.models.status_active_event import StatusActiveEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StatusActiveEvent from a JSON string
status_active_event_instance = StatusActiveEvent.from_json(json)
# print the JSON string representation of the object
print(StatusActiveEvent.to_json())

# convert the object into a dict
status_active_event_dict = status_active_event_instance.to_dict()
# create an instance of StatusActiveEvent from a dict
status_active_event_from_dict = StatusActiveEvent.from_dict(status_active_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HealthEvent

The event of the health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**is_expired** | **bool** |  | [optional] 
**last_error_transition_at** | **str** |  | [optional] 
**last_modified_utc_timestamp** | **str** |  | [optional] 
**last_ok_transition_at** | **str** |  | [optional] 
**last_warning_transition_at** | **str** |  | [optional] 
**var_property** | **str** |  | [optional] 
**remove_when_expired** | **bool** |  | [optional] 
**sequence_number** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**source_utc_timestamp** | **str** |  | [optional] 
**time_to_live_in_milli_seconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.health_event import HealthEvent

# TODO update the JSON string below
json = "{}"
# create an instance of HealthEvent from a JSON string
health_event_instance = HealthEvent.from_json(json)
# print the JSON string representation of the object
print(HealthEvent.to_json())

# convert the object into a dict
health_event_dict = health_event_instance.to_dict()
# create an instance of HealthEvent from a dict
health_event_from_dict = HealthEvent.from_dict(health_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventPeriodUpdate

An event period update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventPeriodUpdate&#x60;. | [optional] 
**time_period** | [**EventPeriodRange**](EventPeriodRange.md) |  | [optional] 
**updates** | [**List[EventUpdateRequest]**](EventUpdateRequest.md) | The updates being made for this time period. | [optional] 

## Example

```python
from openapi_client.models.event_period_update import EventPeriodUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of EventPeriodUpdate from a JSON string
event_period_update_instance = EventPeriodUpdate.from_json(json)
# print the JSON string representation of the object
print(EventPeriodUpdate.to_json())

# convert the object into a dict
event_period_update_dict = event_period_update_instance.to_dict()
# create an instance of EventPeriodUpdate from a dict
event_period_update_from_dict = EventPeriodUpdate.from_dict(event_period_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



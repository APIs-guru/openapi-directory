# EventPeriodRange

An event period time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventPeriodRange&#x60;. | [optional] 
**period_end_millis** | **str** | The time when this update period ends, in millis, since 1970 UTC (Unix Epoch). | [optional] 
**period_start_millis** | **str** | The time when this update period begins, in millis, since 1970 UTC (Unix Epoch). | [optional] 

## Example

```python
from openapi_client.models.event_period_range import EventPeriodRange

# TODO update the JSON string below
json = "{}"
# create an instance of EventPeriodRange from a JSON string
event_period_range_instance = EventPeriodRange.from_json(json)
# print the JSON string representation of the object
print(EventPeriodRange.to_json())

# convert the object into a dict
event_period_range_dict = event_period_range_instance.to_dict()
# create an instance of EventPeriodRange from a dict
event_period_range_from_dict = EventPeriodRange.from_dict(event_period_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



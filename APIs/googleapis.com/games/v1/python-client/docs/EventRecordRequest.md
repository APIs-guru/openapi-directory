# EventRecordRequest

An event period update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_time_millis** | **str** | The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch). | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventRecordRequest&#x60;. | [optional] 
**request_id** | **str** | The request ID used to identify this attempt to record events. | [optional] 
**time_periods** | [**List[EventPeriodUpdate]**](EventPeriodUpdate.md) | A list of the time period updates being made in this request. | [optional] 

## Example

```python
from openapi_client.models.event_record_request import EventRecordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EventRecordRequest from a JSON string
event_record_request_instance = EventRecordRequest.from_json(json)
# print the JSON string representation of the object
print(EventRecordRequest.to_json())

# convert the object into a dict
event_record_request_dict = event_record_request_instance.to_dict()
# create an instance of EventRecordRequest from a dict
event_record_request_from_dict = EventRecordRequest.from_dict(event_record_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



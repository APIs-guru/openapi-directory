# EventUpdateRequest

An event period update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition_id** | **str** | The ID of the event being modified in this update. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventUpdateRequest&#x60;. | [optional] 
**update_count** | **str** | The number of times this event occurred in this time period. | [optional] 

## Example

```python
from openapi_client.models.event_update_request import EventUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EventUpdateRequest from a JSON string
event_update_request_instance = EventUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(EventUpdateRequest.to_json())

# convert the object into a dict
event_update_request_dict = event_update_request_instance.to_dict()
# create an instance of EventUpdateRequest from a dict
event_update_request_from_dict = EventUpdateRequest.from_dict(event_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



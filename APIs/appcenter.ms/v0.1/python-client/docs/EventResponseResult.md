# EventResponseResult

Object returned in response to accepting an event occurance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 

## Example

```python
from openapi_client.models.event_response_result import EventResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventResponseResult from a JSON string
event_response_result_instance = EventResponseResult.from_json(json)
# print the JSON string representation of the object
print(EventResponseResult.to_json())

# convert the object into a dict
event_response_result_dict = event_response_result_instance.to_dict()
# create an instance of EventResponseResult from a dict
event_response_result_from_dict = EventResponseResult.from_dict(event_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



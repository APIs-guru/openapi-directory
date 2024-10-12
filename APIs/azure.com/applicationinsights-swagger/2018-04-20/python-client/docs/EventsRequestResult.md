# EventsRequestResult

A request result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**EventsRequestInfo**](EventsRequestInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_request_result import EventsRequestResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsRequestResult from a JSON string
events_request_result_instance = EventsRequestResult.from_json(json)
# print the JSON string representation of the object
print(EventsRequestResult.to_json())

# convert the object into a dict
events_request_result_dict = events_request_result_instance.to_dict()
# create an instance of EventsRequestResult from a dict
events_request_result_from_dict = EventsRequestResult.from_dict(events_request_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



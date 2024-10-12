# EventListResult

The result of a request to list events for a webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of events. | [optional] 
**value** | [**List[Event]**](Event.md) | The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events. | [optional] 

## Example

```python
from openapi_client.models.event_list_result import EventListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventListResult from a JSON string
event_list_result_instance = EventListResult.from_json(json)
# print the JSON string representation of the object
print(EventListResult.to_json())

# convert the object into a dict
event_list_result_dict = event_list_result_instance.to_dict()
# create an instance of EventListResult from a dict
event_list_result_from_dict = EventListResult.from_dict(event_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



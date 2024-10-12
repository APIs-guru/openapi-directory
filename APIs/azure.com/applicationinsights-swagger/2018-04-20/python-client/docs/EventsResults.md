# EventsResults

An events query result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_messages** | [**List[ErrorInfo]**](ErrorInfo.md) | OData messages for this response. | [optional] 
**odata_context** | **str** | OData context metadata endpoint for this response | [optional] 
**value** | [**List[EventsResultData]**](EventsResultData.md) | Contents of the events query result. | [optional] 

## Example

```python
from openapi_client.models.events_results import EventsResults

# TODO update the JSON string below
json = "{}"
# create an instance of EventsResults from a JSON string
events_results_instance = EventsResults.from_json(json)
# print the JSON string representation of the object
print(EventsResults.to_json())

# convert the object into a dict
events_results_dict = events_results_instance.to_dict()
# create an instance of EventsResults from a dict
events_results_from_dict = EventsResults.from_dict(events_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



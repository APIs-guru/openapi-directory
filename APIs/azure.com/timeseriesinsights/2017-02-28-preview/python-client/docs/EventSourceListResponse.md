# EventSourceListResponse

The response of the List EventSources operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[EventSourceResource]**](EventSourceResource.md) | Result of the List EventSources operation. | [optional] 

## Example

```python
from openapi_client.models.event_source_list_response import EventSourceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceListResponse from a JSON string
event_source_list_response_instance = EventSourceListResponse.from_json(json)
# print the JSON string representation of the object
print(EventSourceListResponse.to_json())

# convert the object into a dict
event_source_list_response_dict = event_source_list_response_instance.to_dict()
# create an instance of EventSourceListResponse from a dict
event_source_list_response_from_dict = EventSourceListResponse.from_dict(event_source_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



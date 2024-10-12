# EventItemSearchResponse

The result set for the event item search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_items** | [**List[EventItem]**](EventItem.md) | A list of event items that match the search criteria. | [optional] 
**href** | **str** | The relative path to the current set of results. | [optional] 
**limit** | **int** | The maximum number of items, from the current result set, returned on a single page. Default: 20 | [optional] 
**next** | **str** | The relative path to the next set of results. | [optional] 
**offset** | **int** | The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 | [optional] 
**prev** | **str** | The relative path to the previous set of results. | [optional] 
**total** | **int** | The total number of matches for the specified search criteria. | [optional] 

## Example

```python
from openapi_client.models.event_item_search_response import EventItemSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventItemSearchResponse from a JSON string
event_item_search_response_instance = EventItemSearchResponse.from_json(json)
# print the JSON string representation of the object
print(EventItemSearchResponse.to_json())

# convert the object into a dict
event_item_search_response_dict = event_item_search_response_instance.to_dict()
# create an instance of EventItemSearchResponse from a dict
event_item_search_response_from_dict = EventItemSearchResponse.from_dict(event_item_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



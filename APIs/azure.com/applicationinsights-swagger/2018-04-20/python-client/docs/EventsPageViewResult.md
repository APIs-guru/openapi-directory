# EventsPageViewResult

A page view result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_view** | [**EventsPageViewInfo**](EventsPageViewInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_page_view_result import EventsPageViewResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsPageViewResult from a JSON string
events_page_view_result_instance = EventsPageViewResult.from_json(json)
# print the JSON string representation of the object
print(EventsPageViewResult.to_json())

# convert the object into a dict
events_page_view_result_dict = events_page_view_result_instance.to_dict()
# create an instance of EventsPageViewResult from a dict
events_page_view_result_from_dict = EventsPageViewResult.from_dict(events_page_view_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



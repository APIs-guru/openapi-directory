# EventsPageViewInfo

The page view information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The duration of the page view | [optional] 
**name** | **str** | The name of the page | [optional] 
**performance_bucket** | **str** | The performance bucket of the page view | [optional] 
**url** | **str** | The URL of the page | [optional] 

## Example

```python
from openapi_client.models.events_page_view_info import EventsPageViewInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsPageViewInfo from a JSON string
events_page_view_info_instance = EventsPageViewInfo.from_json(json)
# print the JSON string representation of the object
print(EventsPageViewInfo.to_json())

# convert the object into a dict
events_page_view_info_dict = events_page_view_info_instance.to_dict()
# create an instance of EventsPageViewInfo from a dict
events_page_view_info_from_dict = EventsPageViewInfo.from_dict(events_page_view_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



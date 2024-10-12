# CalendarResources

Public API: Resources.calendars

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[CalendarResource]**](CalendarResource.md) | The CalendarResources in this page of results. | [optional] 
**kind** | **str** | Identifies this as a collection of CalendarResources. This is always &#x60;admin#directory#resources#calendars#calendarResourcesList&#x60;. | [optional] [default to 'admin#directory#resources#calendars#calendarResourcesList']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.calendar_resources import CalendarResources

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarResources from a JSON string
calendar_resources_instance = CalendarResources.from_json(json)
# print the JSON string representation of the object
print(CalendarResources.to_json())

# convert the object into a dict
calendar_resources_dict = calendar_resources_instance.to_dict()
# create an instance of CalendarResources from a dict
calendar_resources_from_dict = CalendarResources.from_dict(calendar_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



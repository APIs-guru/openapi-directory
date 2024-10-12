# CalendarList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the collection. | [optional] 
**items** | [**List[CalendarListEntry]**](CalendarListEntry.md) | Calendars that are present on the user&#39;s calendar list. | [optional] 
**kind** | **str** | Type of the collection (\&quot;calendar#calendarList\&quot;). | [optional] [default to 'calendar#calendarList']
**next_page_token** | **str** | Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. | [optional] 
**next_sync_token** | **str** | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. | [optional] 

## Example

```python
from openapi_client.models.calendar_list import CalendarList

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarList from a JSON string
calendar_list_instance = CalendarList.from_json(json)
# print the JSON string representation of the object
print(CalendarList.to_json())

# convert the object into a dict
calendar_list_dict = calendar_list_instance.to_dict()
# create an instance of CalendarList from a dict
calendar_list_from_dict = CalendarList.from_dict(calendar_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



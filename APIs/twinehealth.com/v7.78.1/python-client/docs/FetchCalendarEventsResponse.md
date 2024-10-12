# FetchCalendarEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CalendarEventResource]**](CalendarEventResource.md) |  | [optional] 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [patient](#operation/fetchPatient)  | [optional] 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_calendar_events_response import FetchCalendarEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchCalendarEventsResponse from a JSON string
fetch_calendar_events_response_instance = FetchCalendarEventsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchCalendarEventsResponse.to_json())

# convert the object into a dict
fetch_calendar_events_response_dict = fetch_calendar_events_response_instance.to_dict()
# create an instance of FetchCalendarEventsResponse from a dict
fetch_calendar_events_response_from_dict = FetchCalendarEventsResponse.from_dict(fetch_calendar_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



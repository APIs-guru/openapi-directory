# UpdateCalendarEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CalendarEventResource**](CalendarEventResource.md) |  | [optional] 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_calendar_event_response import UpdateCalendarEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCalendarEventResponse from a JSON string
update_calendar_event_response_instance = UpdateCalendarEventResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCalendarEventResponse.to_json())

# convert the object into a dict
update_calendar_event_response_dict = update_calendar_event_response_instance.to_dict()
# create an instance of UpdateCalendarEventResponse from a dict
update_calendar_event_response_from_dict = UpdateCalendarEventResponse.from_dict(update_calendar_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



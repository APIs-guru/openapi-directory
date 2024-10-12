# UpdateCalendarEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCalendarEventRequestData**](UpdateCalendarEventRequestData.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_calendar_event_request import UpdateCalendarEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCalendarEventRequest from a JSON string
update_calendar_event_request_instance = UpdateCalendarEventRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCalendarEventRequest.to_json())

# convert the object into a dict
update_calendar_event_request_dict = update_calendar_event_request_instance.to_dict()
# create an instance of UpdateCalendarEventRequest from a dict
update_calendar_event_request_from_dict = UpdateCalendarEventRequest.from_dict(update_calendar_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



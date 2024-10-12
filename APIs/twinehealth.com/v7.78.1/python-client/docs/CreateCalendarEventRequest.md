# CreateCalendarEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCalendarEventRequestData**](CreateCalendarEventRequestData.md) |  | 

## Example

```python
from openapi_client.models.create_calendar_event_request import CreateCalendarEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventRequest from a JSON string
create_calendar_event_request_instance = CreateCalendarEventRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventRequest.to_json())

# convert the object into a dict
create_calendar_event_request_dict = create_calendar_event_request_instance.to_dict()
# create an instance of CreateCalendarEventRequest from a dict
create_calendar_event_request_from_dict = CreateCalendarEventRequest.from_dict(create_calendar_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



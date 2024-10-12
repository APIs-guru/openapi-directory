# CreateCalendarEventResponseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCalendarEventResponseRequestData**](CreateCalendarEventResponseRequestData.md) |  | 

## Example

```python
from openapi_client.models.create_calendar_event_response_request import CreateCalendarEventResponseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventResponseRequest from a JSON string
create_calendar_event_response_request_instance = CreateCalendarEventResponseRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventResponseRequest.to_json())

# convert the object into a dict
create_calendar_event_response_request_dict = create_calendar_event_response_request_instance.to_dict()
# create an instance of CreateCalendarEventResponseRequest from a dict
create_calendar_event_response_request_from_dict = CreateCalendarEventResponseRequest.from_dict(create_calendar_event_response_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



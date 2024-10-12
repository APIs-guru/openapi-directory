# CreateCalendarEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CalendarEventResource**](CalendarEventResource.md) |  | [optional] 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_calendar_event_response import CreateCalendarEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventResponse from a JSON string
create_calendar_event_response_instance = CreateCalendarEventResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventResponse.to_json())

# convert the object into a dict
create_calendar_event_response_dict = create_calendar_event_response_instance.to_dict()
# create an instance of CreateCalendarEventResponse from a dict
create_calendar_event_response_from_dict = CreateCalendarEventResponse.from_dict(create_calendar_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



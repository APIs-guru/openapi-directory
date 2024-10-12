# CreateCalendarEventResponseRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CalendarEventResponseResourceAttributes**](CalendarEventResponseResourceAttributes.md) |  | 
**relationships** | [**CreateCalendarEventResponseRequestDataRelationships**](CreateCalendarEventResponseRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.create_calendar_event_response_request_data import CreateCalendarEventResponseRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventResponseRequestData from a JSON string
create_calendar_event_response_request_data_instance = CreateCalendarEventResponseRequestData.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventResponseRequestData.to_json())

# convert the object into a dict
create_calendar_event_response_request_data_dict = create_calendar_event_response_request_data_instance.to_dict()
# create an instance of CreateCalendarEventResponseRequestData from a dict
create_calendar_event_response_request_data_from_dict = CreateCalendarEventResponseRequestData.from_dict(create_calendar_event_response_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateCalendarEventRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CalendarEventResourceAttributes**](CalendarEventResourceAttributes.md) |  | 
**relationships** | [**CreateCalendarEventRequestDataRelationships**](CreateCalendarEventRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.create_calendar_event_request_data import CreateCalendarEventRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventRequestData from a JSON string
create_calendar_event_request_data_instance = CreateCalendarEventRequestData.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventRequestData.to_json())

# convert the object into a dict
create_calendar_event_request_data_dict = create_calendar_event_request_data_instance.to_dict()
# create an instance of CreateCalendarEventRequestData from a dict
create_calendar_event_request_data_from_dict = CreateCalendarEventRequestData.from_dict(create_calendar_event_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



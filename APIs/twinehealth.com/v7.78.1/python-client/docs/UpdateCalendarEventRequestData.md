# UpdateCalendarEventRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CalendarEventResourceAttributes**](CalendarEventResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**UpdateCalendarEventRequestDataRelationships**](UpdateCalendarEventRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.update_calendar_event_request_data import UpdateCalendarEventRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCalendarEventRequestData from a JSON string
update_calendar_event_request_data_instance = UpdateCalendarEventRequestData.from_json(json)
# print the JSON string representation of the object
print(UpdateCalendarEventRequestData.to_json())

# convert the object into a dict
update_calendar_event_request_data_dict = update_calendar_event_request_data_instance.to_dict()
# create an instance of UpdateCalendarEventRequestData from a dict
update_calendar_event_request_data_from_dict = UpdateCalendarEventRequestData.from_dict(update_calendar_event_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



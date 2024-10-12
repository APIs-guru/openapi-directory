# CreateCalendarEventResponseRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_event** | [**CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent**](CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent.md) |  | [optional] 
**user** | [**CreateCalendarEventResponseRequestDataRelationshipsUser**](CreateCalendarEventResponseRequestDataRelationshipsUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_calendar_event_response_request_data_relationships import CreateCalendarEventResponseRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCalendarEventResponseRequestDataRelationships from a JSON string
create_calendar_event_response_request_data_relationships_instance = CreateCalendarEventResponseRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateCalendarEventResponseRequestDataRelationships.to_json())

# convert the object into a dict
create_calendar_event_response_request_data_relationships_dict = create_calendar_event_response_request_data_relationships_instance.to_dict()
# create an instance of CreateCalendarEventResponseRequestDataRelationships from a dict
create_calendar_event_response_request_data_relationships_from_dict = CreateCalendarEventResponseRequestDataRelationships.from_dict(create_calendar_event_response_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



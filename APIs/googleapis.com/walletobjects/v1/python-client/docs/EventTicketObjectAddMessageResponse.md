# EventTicketObjectAddMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**EventTicketObject**](EventTicketObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_ticket_object_add_message_response import EventTicketObjectAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventTicketObjectAddMessageResponse from a JSON string
event_ticket_object_add_message_response_instance = EventTicketObjectAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(EventTicketObjectAddMessageResponse.to_json())

# convert the object into a dict
event_ticket_object_add_message_response_dict = event_ticket_object_add_message_response_instance.to_dict()
# create an instance of EventTicketObjectAddMessageResponse from a dict
event_ticket_object_add_message_response_from_dict = EventTicketObjectAddMessageResponse.from_dict(event_ticket_object_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



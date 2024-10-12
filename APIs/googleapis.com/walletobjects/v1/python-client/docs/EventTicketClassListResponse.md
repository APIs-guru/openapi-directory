# EventTicketClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[EventTicketClass]**](EventTicketClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.event_ticket_class_list_response import EventTicketClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventTicketClassListResponse from a JSON string
event_ticket_class_list_response_instance = EventTicketClassListResponse.from_json(json)
# print the JSON string representation of the object
print(EventTicketClassListResponse.to_json())

# convert the object into a dict
event_ticket_class_list_response_dict = event_ticket_class_list_response_instance.to_dict()
# create an instance of EventTicketClassListResponse from a dict
event_ticket_class_list_response_from_dict = EventTicketClassListResponse.from_dict(event_ticket_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



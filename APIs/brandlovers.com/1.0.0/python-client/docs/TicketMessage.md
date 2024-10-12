# TicketMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Message text | 
**created_at** | **datetime** | Date created | 
**id** | **str** | Trouble Ticket Id. | 
**visibility** | **str** | Defines if this message is &#x60;CUSTOMER&#x60; (customer will receive a copy) or &#x60;INTERNAL&#x60; | 

## Example

```python
from openapi_client.models.ticket_message import TicketMessage

# TODO update the JSON string below
json = "{}"
# create an instance of TicketMessage from a JSON string
ticket_message_instance = TicketMessage.from_json(json)
# print the JSON string representation of the object
print(TicketMessage.to_json())

# convert the object into a dict
ticket_message_dict = ticket_message_instance.to_dict()
# create an instance of TicketMessage from a dict
ticket_message_from_dict = TicketMessage.from_dict(ticket_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



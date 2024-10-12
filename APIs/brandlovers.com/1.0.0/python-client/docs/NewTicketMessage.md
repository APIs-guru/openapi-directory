# NewTicketMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Message text | 
**visibility** | **str** | Defines if this message is &#x60;CUSTOMER&#x60; (customer will receive a copy) or &#x60;INTERNAL&#x60; | 

## Example

```python
from openapi_client.models.new_ticket_message import NewTicketMessage

# TODO update the JSON string below
json = "{}"
# create an instance of NewTicketMessage from a JSON string
new_ticket_message_instance = NewTicketMessage.from_json(json)
# print the JSON string representation of the object
print(NewTicketMessage.to_json())

# convert the object into a dict
new_ticket_message_dict = new_ticket_message_instance.to_dict()
# create an instance of NewTicketMessage from a dict
new_ticket_message_from_dict = NewTicketMessage.from_dict(new_ticket_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



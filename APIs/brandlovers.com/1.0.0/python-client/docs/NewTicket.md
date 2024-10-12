# NewTicket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Message to the customer | 
**customer** | [**CustomerReference**](CustomerReference.md) |  | [optional] 
**description** | **str** | Trouble ticked brief description | [optional] 
**var_from** | **str** | Friendly name of the person sending this message, if not provided the seller &#x60;name&#x60; will be used | 
**message** | [**NewTicketMessage**](NewTicketMessage.md) |  | [optional] 
**order_id** | **str** | Unique order Id that this trouble ticket belongs to | 
**type** | **str** | Trouble ticket type. | 

## Example

```python
from openapi_client.models.new_ticket import NewTicket

# TODO update the JSON string below
json = "{}"
# create an instance of NewTicket from a JSON string
new_ticket_instance = NewTicket.from_json(json)
# print the JSON string representation of the object
print(NewTicket.to_json())

# convert the object into a dict
new_ticket_dict = new_ticket_instance.to_dict()
# create an instance of NewTicket from a dict
new_ticket_from_dict = NewTicket.from_dict(new_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



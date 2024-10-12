# TicketCost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_message** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**face_value** | [**Money**](Money.md) |  | [optional] 
**purchase_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.ticket_cost import TicketCost

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCost from a JSON string
ticket_cost_instance = TicketCost.from_json(json)
# print the JSON string representation of the object
print(TicketCost.to_json())

# convert the object into a dict
ticket_cost_dict = ticket_cost_instance.to_dict()
# create an instance of TicketCost from a dict
ticket_cost_from_dict = TicketCost.from_dict(ticket_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



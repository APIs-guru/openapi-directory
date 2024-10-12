# TicketOfferInventory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **int** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.ticket_offer_inventory import TicketOfferInventory

# TODO update the JSON string below
json = "{}"
# create an instance of TicketOfferInventory from a JSON string
ticket_offer_inventory_instance = TicketOfferInventory.from_json(json)
# print the JSON string representation of the object
print(TicketOfferInventory.to_json())

# convert the object into a dict
ticket_offer_inventory_dict = ticket_offer_inventory_instance.to_dict()
# create an instance of TicketOfferInventory from a dict
ticket_offer_inventory_from_dict = TicketOfferInventory.from_dict(ticket_offer_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



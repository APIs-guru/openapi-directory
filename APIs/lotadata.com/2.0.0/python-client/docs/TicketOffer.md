# TicketOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**donation** | **bool** |  | [optional] 
**fee** | **float** |  | [optional] 
**high_price** | **float** |  | [optional] 
**inventory** | [**TicketOfferInventory**](TicketOfferInventory.md) |  | [optional] 
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**price_currency** | **str** |  | [optional] 
**price_unknown** | **bool** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ticket_offer import TicketOffer

# TODO update the JSON string below
json = "{}"
# create an instance of TicketOffer from a JSON string
ticket_offer_instance = TicketOffer.from_json(json)
# print the JSON string representation of the object
print(TicketOffer.to_json())

# convert the object into a dict
ticket_offer_dict = ticket_offer_instance.to_dict()
# create an instance of TicketOffer from a dict
ticket_offer_from_dict = TicketOffer.from_dict(ticket_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



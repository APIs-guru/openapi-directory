# Resources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_ticket_classes** | [**List[EventTicketClass]**](EventTicketClass.md) |  | [optional] 
**event_ticket_objects** | [**List[EventTicketObject]**](EventTicketObject.md) |  | [optional] 
**flight_classes** | [**List[FlightClass]**](FlightClass.md) |  | [optional] 
**flight_objects** | [**List[FlightObject]**](FlightObject.md) |  | [optional] 
**gift_card_classes** | [**List[GiftCardClass]**](GiftCardClass.md) |  | [optional] 
**gift_card_objects** | [**List[GiftCardObject]**](GiftCardObject.md) |  | [optional] 
**loyalty_classes** | [**List[LoyaltyClass]**](LoyaltyClass.md) |  | [optional] 
**loyalty_objects** | [**List[LoyaltyObject]**](LoyaltyObject.md) |  | [optional] 
**offer_classes** | [**List[OfferClass]**](OfferClass.md) |  | [optional] 
**offer_objects** | [**List[OfferObject]**](OfferObject.md) |  | [optional] 
**transit_classes** | [**List[TransitClass]**](TransitClass.md) |  | [optional] 
**transit_objects** | [**List[TransitObject]**](TransitObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.resources import Resources

# TODO update the JSON string below
json = "{}"
# create an instance of Resources from a JSON string
resources_instance = Resources.from_json(json)
# print the JSON string representation of the object
print(Resources.to_json())

# convert the object into a dict
resources_dict = resources_instance.to_dict()
# create an instance of Resources from a dict
resources_from_dict = Resources.from_dict(resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



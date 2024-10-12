# MissedParticipationCountDetails

Missed participation count broken down by reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotel_suspended_count** | **str** | The total number of missed participations due to one or more of your hotels being suspended due to price accuracy violations. | [optional] 
**no_availability_count** | **str** | The total number of missed participation due to the hotel/itinerary combination being unavailable, or the traveler was ineligible for the rates. To participate in these auctions, you may need to provide more pricing information. | [optional] 
**no_landing_page_count** | **str** | No landing page matched the user. | [optional] 
**no_price_count** | **str** | The total number of missed participations due to a price not being offered for the requested itinerary. | [optional] 
**no_price_count_details** | [**NoPriceCountDetails**](NoPriceCountDetails.md) |  | [optional] 
**no_tax_breakdown_count** | **str** | The total number of missed participation due to one or more of your hotels not specifying taxes and fees separately. | [optional] 
**other_reason_count** | **str** | Hotel did not participate for an unknown reason. | [optional] 
**price_missing_count** | **str** | The total number of missed participations due to either a price not being present in Google&#39;s cache or failing to successfully respond to live pricing. Comprised of the following: * Bandwidth depleted * Cache rate missing * Itinerary blocked * Live pricing not set up * Live pricing timeout * Live pricing error | [optional] 
**price_missing_count_details** | [**PriceMissingCountDetails**](PriceMissingCountDetails.md) |  | [optional] 
**price_problem_count** | **str** | The total number of missed participation due to an issue with the accuracy of the price provided for the itinerary. Comprised of the following: * Hotel suspended * Price unusually high * Price unusually low * Taxes and feeds missing | [optional] 
**price_problem_count_details** | [**PriceProblemCountDetails**](PriceProblemCountDetails.md) |  | [optional] 
**price_unavailable_count** | **str** | The total number of missed participation due to price listed as unavailable (-1) for the requested itinerary. Comprised of the following: * Price unavailable * Participation not likely * Other | [optional] 
**price_unavailable_count_details** | [**PriceUnavailableCountDetails**](PriceUnavailableCountDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.missed_participation_count_details import MissedParticipationCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MissedParticipationCountDetails from a JSON string
missed_participation_count_details_instance = MissedParticipationCountDetails.from_json(json)
# print the JSON string representation of the object
print(MissedParticipationCountDetails.to_json())

# convert the object into a dict
missed_participation_count_details_dict = missed_participation_count_details_instance.to_dict()
# create an instance of MissedParticipationCountDetails from a dict
missed_participation_count_details_from_dict = MissedParticipationCountDetails.from_dict(missed_participation_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



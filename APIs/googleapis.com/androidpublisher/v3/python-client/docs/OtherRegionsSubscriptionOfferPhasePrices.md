# OtherRegionsSubscriptionOfferPhasePrices

Pricing information for any new locations Play may launch in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eur_price** | [**Money**](Money.md) |  | [optional] 
**usd_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.other_regions_subscription_offer_phase_prices import OtherRegionsSubscriptionOfferPhasePrices

# TODO update the JSON string below
json = "{}"
# create an instance of OtherRegionsSubscriptionOfferPhasePrices from a JSON string
other_regions_subscription_offer_phase_prices_instance = OtherRegionsSubscriptionOfferPhasePrices.from_json(json)
# print the JSON string representation of the object
print(OtherRegionsSubscriptionOfferPhasePrices.to_json())

# convert the object into a dict
other_regions_subscription_offer_phase_prices_dict = other_regions_subscription_offer_phase_prices_instance.to_dict()
# create an instance of OtherRegionsSubscriptionOfferPhasePrices from a dict
other_regions_subscription_offer_phase_prices_from_dict = OtherRegionsSubscriptionOfferPhasePrices.from_dict(other_regions_subscription_offer_phase_prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



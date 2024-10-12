# RegionalSubscriptionOfferPhaseConfig

Configuration for a single phase of a subscription offer in a single region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute_discount** | [**Money**](Money.md) |  | [optional] 
**price** | [**Money**](Money.md) |  | [optional] 
**region_code** | **str** | Required. Immutable. The region to which this config applies. | [optional] 
**relative_discount** | **float** | The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region. | [optional] 

## Example

```python
from openapi_client.models.regional_subscription_offer_phase_config import RegionalSubscriptionOfferPhaseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalSubscriptionOfferPhaseConfig from a JSON string
regional_subscription_offer_phase_config_instance = RegionalSubscriptionOfferPhaseConfig.from_json(json)
# print the JSON string representation of the object
print(RegionalSubscriptionOfferPhaseConfig.to_json())

# convert the object into a dict
regional_subscription_offer_phase_config_dict = regional_subscription_offer_phase_config_instance.to_dict()
# create an instance of RegionalSubscriptionOfferPhaseConfig from a dict
regional_subscription_offer_phase_config_from_dict = RegionalSubscriptionOfferPhaseConfig.from_dict(regional_subscription_offer_phase_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



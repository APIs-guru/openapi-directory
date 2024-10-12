# SubscriptionOfferPhase

A single phase of a subscription offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format. | [optional] 
**other_regions_config** | [**OtherRegionsSubscriptionOfferPhaseConfig**](OtherRegionsSubscriptionOfferPhaseConfig.md) |  | [optional] 
**recurrence_count** | **int** | Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase. | [optional] 
**regional_configs** | [**List[RegionalSubscriptionOfferPhaseConfig]**](RegionalSubscriptionOfferPhaseConfig.md) | Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config. | [optional] 

## Example

```python
from openapi_client.models.subscription_offer_phase import SubscriptionOfferPhase

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionOfferPhase from a JSON string
subscription_offer_phase_instance = SubscriptionOfferPhase.from_json(json)
# print the JSON string representation of the object
print(SubscriptionOfferPhase.to_json())

# convert the object into a dict
subscription_offer_phase_dict = subscription_offer_phase_instance.to_dict()
# create an instance of SubscriptionOfferPhase from a dict
subscription_offer_phase_from_dict = SubscriptionOfferPhase.from_dict(subscription_offer_phase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



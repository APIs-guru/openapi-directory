# SubscriptionOfferTargeting

Defines the rule a user needs to satisfy to receive this offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisition_rule** | [**AcquisitionTargetingRule**](AcquisitionTargetingRule.md) |  | [optional] 
**upgrade_rule** | [**UpgradeTargetingRule**](UpgradeTargetingRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_offer_targeting import SubscriptionOfferTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionOfferTargeting from a JSON string
subscription_offer_targeting_instance = SubscriptionOfferTargeting.from_json(json)
# print the JSON string representation of the object
print(SubscriptionOfferTargeting.to_json())

# convert the object into a dict
subscription_offer_targeting_dict = subscription_offer_targeting_instance.to_dict()
# create an instance of SubscriptionOfferTargeting from a dict
subscription_offer_targeting_from_dict = SubscriptionOfferTargeting.from_dict(subscription_offer_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



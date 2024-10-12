# SubscriptionOffer

A single, temporary offer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. Immutable. The ID of the base plan to which this offer is an extension. | [optional] 
**offer_id** | **str** | Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. | [optional] 
**offer_tags** | [**List[OfferTag]**](OfferTag.md) | List of up to 20 custom tags specified for this offer, and returned to the app through the billing library. | [optional] 
**other_regions_config** | [**OtherRegionsSubscriptionOfferConfig**](OtherRegionsSubscriptionOfferConfig.md) |  | [optional] 
**package_name** | **str** | Required. Immutable. The package name of the app the parent subscription belongs to. | [optional] 
**phases** | [**List[SubscriptionOfferPhase]**](SubscriptionOfferPhase.md) | Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation. | [optional] 
**product_id** | **str** | Required. Immutable. The ID of the parent subscription this offer belongs to. | [optional] 
**regional_configs** | [**List[RegionalSubscriptionOfferConfig]**](RegionalSubscriptionOfferConfig.md) | Required. The region-specific configuration of this offer. Must contain at least one entry. | [optional] 
**state** | **str** | Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active. | [optional] [readonly] 
**targeting** | [**SubscriptionOfferTargeting**](SubscriptionOfferTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_offer import SubscriptionOffer

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionOffer from a JSON string
subscription_offer_instance = SubscriptionOffer.from_json(json)
# print the JSON string representation of the object
print(SubscriptionOffer.to_json())

# convert the object into a dict
subscription_offer_dict = subscription_offer_instance.to_dict()
# create an instance of SubscriptionOffer from a dict
subscription_offer_from_dict = SubscriptionOffer.from_dict(subscription_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



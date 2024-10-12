# Subscription

A single subscription for an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** | Output only. Deprecated: subscription archiving is not supported. | [optional] [readonly] 
**base_plans** | [**List[BasePlan]**](BasePlan.md) | The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply. | [optional] 
**listings** | [**List[SubscriptionListing]**](SubscriptionListing.md) | Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app. | [optional] 
**package_name** | **str** | Immutable. Package name of the parent app. | [optional] 
**product_id** | **str** | Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. | [optional] 
**tax_and_compliance_settings** | [**SubscriptionTaxAndComplianceSettings**](SubscriptionTaxAndComplianceSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



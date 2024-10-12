# BillingSubscription

A billing Subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingSubscriptionProperties**](BillingSubscriptionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_subscription import BillingSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of BillingSubscription from a JSON string
billing_subscription_instance = BillingSubscription.from_json(json)
# print the JSON string representation of the object
print(BillingSubscription.to_json())

# convert the object into a dict
billing_subscription_dict = billing_subscription_instance.to_dict()
# create an instance of BillingSubscription from a dict
billing_subscription_from_dict = BillingSubscription.from_dict(billing_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



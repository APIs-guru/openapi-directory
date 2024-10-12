# Subscription

Subscription information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_source** | **str** | The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, &#39;Legacy, RoleBased&#39;. | [optional] 
**display_name** | **str** | The subscription display name. | [optional] [readonly] 
**id** | **str** | The fully qualified ID for the subscription. For example, /subscriptions/00000000-0000-0000-0000-000000000000. | [optional] [readonly] 
**state** | **str** | The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 
**subscription_policies** | [**SubscriptionPolicies**](SubscriptionPolicies.md) |  | [optional] 

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



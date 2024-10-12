# Subscription

Subscription information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Gets or sets the subscription display name | [optional] 
**id** | **str** | Gets or sets the ID of the resource (/subscriptions/SubscriptionId). | [optional] 
**state** | **str** | Gets or sets the subscription state | [optional] 
**subscription_id** | **str** | Gets or sets the subscription Id. | [optional] 
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



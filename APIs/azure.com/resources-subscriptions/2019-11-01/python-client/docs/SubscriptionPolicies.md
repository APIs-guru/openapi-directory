# SubscriptionPolicies

Subscription policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_placement_id** | **str** | The subscription location placement ID. The ID indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions. | [optional] [readonly] 
**quota_id** | **str** | The subscription quota ID. | [optional] [readonly] 
**spending_limit** | **str** | The subscription spending limit. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_policies import SubscriptionPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPolicies from a JSON string
subscription_policies_instance = SubscriptionPolicies.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPolicies.to_json())

# convert the object into a dict
subscription_policies_dict = subscription_policies_instance.to_dict()
# create an instance of SubscriptionPolicies from a dict
subscription_policies_from_dict = SubscriptionPolicies.from_dict(subscription_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



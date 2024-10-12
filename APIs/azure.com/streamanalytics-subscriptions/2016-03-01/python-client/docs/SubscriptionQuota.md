# SubscriptionQuota

Describes the current quota for the subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Describes the properties of the quota. | [optional] [readonly] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_quota import SubscriptionQuota

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionQuota from a JSON string
subscription_quota_instance = SubscriptionQuota.from_json(json)
# print the JSON string representation of the object
print(SubscriptionQuota.to_json())

# convert the object into a dict
subscription_quota_dict = subscription_quota_instance.to_dict()
# create an instance of SubscriptionQuota from a dict
subscription_quota_from_dict = SubscriptionQuota.from_dict(subscription_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



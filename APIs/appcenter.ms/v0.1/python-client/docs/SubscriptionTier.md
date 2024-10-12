# SubscriptionTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the tier | [optional] 

## Example

```python
from openapi_client.models.subscription_tier import SubscriptionTier

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionTier from a JSON string
subscription_tier_instance = SubscriptionTier.from_json(json)
# print the JSON string representation of the object
print(SubscriptionTier.to_json())

# convert the object into a dict
subscription_tier_dict = subscription_tier_instance.to_dict()
# create an instance of SubscriptionTier from a dict
subscription_tier_from_dict = SubscriptionTier.from_dict(subscription_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



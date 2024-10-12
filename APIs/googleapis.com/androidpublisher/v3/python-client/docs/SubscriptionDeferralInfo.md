# SubscriptionDeferralInfo

A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired_expiry_time_millis** | **str** | The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. | [optional] 
**expected_expiry_time_millis** | **str** | The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. | [optional] 

## Example

```python
from openapi_client.models.subscription_deferral_info import SubscriptionDeferralInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDeferralInfo from a JSON string
subscription_deferral_info_instance = SubscriptionDeferralInfo.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDeferralInfo.to_json())

# convert the object into a dict
subscription_deferral_info_dict = subscription_deferral_info_instance.to_dict()
# create an instance of SubscriptionDeferralInfo from a dict
subscription_deferral_info_from_dict = SubscriptionDeferralInfo.from_dict(subscription_deferral_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



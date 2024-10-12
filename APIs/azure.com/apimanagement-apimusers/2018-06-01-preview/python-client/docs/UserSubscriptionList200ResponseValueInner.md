# UserSubscriptionList200ResponseValueInner

Subscription details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserSubscriptionList200ResponseValueInnerProperties**](UserSubscriptionList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_subscription_list200_response_value_inner import UserSubscriptionList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserSubscriptionList200ResponseValueInner from a JSON string
user_subscription_list200_response_value_inner_instance = UserSubscriptionList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(UserSubscriptionList200ResponseValueInner.to_json())

# convert the object into a dict
user_subscription_list200_response_value_inner_dict = user_subscription_list200_response_value_inner_instance.to_dict()
# create an instance of UserSubscriptionList200ResponseValueInner from a dict
user_subscription_list200_response_value_inner_from_dict = UserSubscriptionList200ResponseValueInner.from_dict(user_subscription_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SubscriptionList200ResponseValueInner

Subscription details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionList200ResponseValueInnerProperties**](SubscriptionList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_list200_response_value_inner import SubscriptionList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionList200ResponseValueInner from a JSON string
subscription_list200_response_value_inner_instance = SubscriptionList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(SubscriptionList200ResponseValueInner.to_json())

# convert the object into a dict
subscription_list200_response_value_inner_dict = subscription_list200_response_value_inner_instance.to_dict()
# create an instance of SubscriptionList200ResponseValueInner from a dict
subscription_list200_response_value_inner_from_dict = SubscriptionList200ResponseValueInner.from_dict(subscription_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



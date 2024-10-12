# SubscriptionsAppPkgSubscription

'The data type represents the input parameters of \"subscription operation\" to notification of application package management for the onboarding, or operational state change of application package.'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI referring to the subscription. | 
**subsctiption_type** | [**SubsctiptionTypeAppPkg**](SubsctiptionTypeAppPkg.md) |  | 

## Example

```python
from openapi_client.models.subscriptions_app_pkg_subscription import SubscriptionsAppPkgSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsAppPkgSubscription from a JSON string
subscriptions_app_pkg_subscription_instance = SubscriptionsAppPkgSubscription.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsAppPkgSubscription.to_json())

# convert the object into a dict
subscriptions_app_pkg_subscription_dict = subscriptions_app_pkg_subscription_instance.to_dict()
# create an instance of SubscriptionsAppPkgSubscription from a dict
subscriptions_app_pkg_subscription_from_dict = SubscriptionsAppPkgSubscription.from_dict(subscriptions_app_pkg_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



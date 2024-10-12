# SubscriptionUsage

Usage Metric of a Subscription in a Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionUsageProperties**](SubscriptionUsageProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_usage import SubscriptionUsage

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUsage from a JSON string
subscription_usage_instance = SubscriptionUsage.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUsage.to_json())

# convert the object into a dict
subscription_usage_dict = subscription_usage_instance.to_dict()
# create an instance of SubscriptionUsage from a dict
subscription_usage_from_dict = SubscriptionUsage.from_dict(subscription_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



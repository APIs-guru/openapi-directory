# SubscriptionUsageProperties

Properties of a subscription usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | Current value of the metric. | [optional] [readonly] 
**display_name** | **str** | User-readable name of the metric. | [optional] [readonly] 
**limit** | **float** | Boundary value of the metric. | [optional] [readonly] 
**unit** | **str** | Unit of the metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_usage_properties import SubscriptionUsageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUsageProperties from a JSON string
subscription_usage_properties_instance = SubscriptionUsageProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUsageProperties.to_json())

# convert the object into a dict
subscription_usage_properties_dict = subscription_usage_properties_instance.to_dict()
# create an instance of SubscriptionUsageProperties from a dict
subscription_usage_properties_from_dict = SubscriptionUsageProperties.from_dict(subscription_usage_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



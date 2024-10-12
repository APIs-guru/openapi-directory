# SubscriptionUsageListResult

A list of subscription usage metrics in a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SubscriptionUsage]**](SubscriptionUsage.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_usage_list_result import SubscriptionUsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUsageListResult from a JSON string
subscription_usage_list_result_instance = SubscriptionUsageListResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUsageListResult.to_json())

# convert the object into a dict
subscription_usage_list_result_dict = subscription_usage_list_result_instance.to_dict()
# create an instance of SubscriptionUsageListResult from a dict
subscription_usage_list_result_from_dict = SubscriptionUsageListResult.from_dict(subscription_usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SubscriptionListResult

The response to the List Subscriptions operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of subscriptions. | [optional] 
**value** | [**List[SubscriptionResource]**](SubscriptionResource.md) | Result of the List Subscriptions operation. | [optional] 

## Example

```python
from openapi_client.models.subscription_list_result import SubscriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResult from a JSON string
subscription_list_result_instance = SubscriptionListResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListResult.to_json())

# convert the object into a dict
subscription_list_result_dict = subscription_list_result_instance.to_dict()
# create an instance of SubscriptionListResult from a dict
subscription_list_result_from_dict = SubscriptionListResult.from_dict(subscription_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



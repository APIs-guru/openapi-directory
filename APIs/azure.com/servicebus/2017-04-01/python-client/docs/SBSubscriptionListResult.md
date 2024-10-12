# SBSubscriptionListResult

The response to the List Subscriptions operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of subscriptions. | [optional] 
**value** | [**List[SBSubscription]**](SBSubscription.md) | Result of the List Subscriptions operation. | [optional] 

## Example

```python
from openapi_client.models.sb_subscription_list_result import SBSubscriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SBSubscriptionListResult from a JSON string
sb_subscription_list_result_instance = SBSubscriptionListResult.from_json(json)
# print the JSON string representation of the object
print(SBSubscriptionListResult.to_json())

# convert the object into a dict
sb_subscription_list_result_dict = sb_subscription_list_result_instance.to_dict()
# create an instance of SBSubscriptionListResult from a dict
sb_subscription_list_result_from_dict = SBSubscriptionListResult.from_dict(sb_subscription_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



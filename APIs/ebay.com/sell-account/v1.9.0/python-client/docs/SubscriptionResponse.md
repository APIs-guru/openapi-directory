# SubscriptionResponse

This type is used by the response payload for the <b>getSubscription</b> method.<br /><br /><span class=\"tablenote\"><b>Note</b>: Pagination has not yet been enabled for <b>getSubscription</b>, so all of the pagination-related fields are for future use.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | This field is for future use. | [optional] 
**limit** | **int** | This field is for future use. | [optional] 
**next** | **str** | This field is for future use. | [optional] 
**subscriptions** | [**List[Subscription]**](Subscription.md) | An array of subscriptions associated with the seller account. | [optional] 
**total** | **int** | The total number of subscriptions displayed on the current page of results. | [optional] 

## Example

```python
from openapi_client.models.subscription_response import SubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionResponse from a JSON string
subscription_response_instance = SubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionResponse.to_json())

# convert the object into a dict
subscription_response_dict = subscription_response_instance.to_dict()
# create an instance of SubscriptionResponse from a dict
subscription_response_from_dict = SubscriptionResponse.from_dict(subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



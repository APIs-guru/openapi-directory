# BillingSubscriptionsListResult

Result of listing billing subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[BillingSubscription]**](BillingSubscription.md) | The list of billing subscriptions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_subscriptions_list_result import BillingSubscriptionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingSubscriptionsListResult from a JSON string
billing_subscriptions_list_result_instance = BillingSubscriptionsListResult.from_json(json)
# print the JSON string representation of the object
print(BillingSubscriptionsListResult.to_json())

# convert the object into a dict
billing_subscriptions_list_result_dict = billing_subscriptions_list_result_instance.to_dict()
# create an instance of BillingSubscriptionsListResult from a dict
billing_subscriptions_list_result_from_dict = BillingSubscriptionsListResult.from_dict(billing_subscriptions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



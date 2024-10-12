# SubscriptionList

List of subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Subscription]**](Subscription.md) | Subscription definition. | [optional] 

## Example

```python
from openapi_client.models.subscription_list import SubscriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionList from a JSON string
subscription_list_instance = SubscriptionList.from_json(json)
# print the JSON string representation of the object
print(SubscriptionList.to_json())

# convert the object into a dict
subscription_list_dict = subscription_list_instance.to_dict()
# create an instance of SubscriptionList from a dict
subscription_list_from_dict = SubscriptionList.from_dict(subscription_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



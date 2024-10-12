# SubscriptionArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**List[Subscription]**](Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_array import SubscriptionArray

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionArray from a JSON string
subscription_array_instance = SubscriptionArray.from_json(json)
# print the JSON string representation of the object
print(SubscriptionArray.to_json())

# convert the object into a dict
subscription_array_dict = subscription_array_instance.to_dict()
# create an instance of SubscriptionArray from a dict
subscription_array_from_dict = SubscriptionArray.from_dict(subscription_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



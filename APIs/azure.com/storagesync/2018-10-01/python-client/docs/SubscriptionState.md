# SubscriptionState

Subscription State object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**istransitioning** | **bool** | Is Transitioning | [optional] [readonly] 
**properties** | **object** | Subscription State properties. | [optional] 
**state** | **str** | State of Azure Subscription | [optional] 

## Example

```python
from openapi_client.models.subscription_state import SubscriptionState

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionState from a JSON string
subscription_state_instance = SubscriptionState.from_json(json)
# print the JSON string representation of the object
print(SubscriptionState.to_json())

# convert the object into a dict
subscription_state_dict = subscription_state_instance.to_dict()
# create an instance of SubscriptionState from a dict
subscription_state_from_dict = SubscriptionState.from_dict(subscription_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



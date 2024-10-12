# Subscription

List of supported operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Subscription name. | [optional] 
**id** | **str** | Fully qualified identifier. | [optional] 
**offer_id** | **str** | Identifier of the offer under the scope of a delegated provider. | [optional] 
**state** | [**SubscriptionState**](SubscriptionState.md) |  | [optional] 
**subscription_id** | **str** | Subscription identifier. | [optional] 
**tenant_id** | **str** | Directory tenant identifier. | [optional] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



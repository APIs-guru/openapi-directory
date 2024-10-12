# SubscriptionName

The new name of the subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_name** | **str** | New subscription name | [optional] 

## Example

```python
from openapi_client.models.subscription_name import SubscriptionName

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionName from a JSON string
subscription_name_instance = SubscriptionName.from_json(json)
# print the JSON string representation of the object
print(SubscriptionName.to_json())

# convert the object into a dict
subscription_name_dict = subscription_name_instance.to_dict()
# create an instance of SubscriptionName from a dict
subscription_name_from_dict = SubscriptionName.from_dict(subscription_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



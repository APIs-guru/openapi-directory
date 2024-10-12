# SubscriptionCreateOrUpdateParameters

Parameters supplied to the Create Or Update Subscription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Subscription data center location. | 
**properties** | [**SubscriptionProperties**](SubscriptionProperties.md) |  | [optional] 
**type** | **str** | Resource manager type of the resource. | [optional] 

## Example

```python
from openapi_client.models.subscription_create_or_update_parameters import SubscriptionCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateOrUpdateParameters from a JSON string
subscription_create_or_update_parameters_instance = SubscriptionCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreateOrUpdateParameters.to_json())

# convert the object into a dict
subscription_create_or_update_parameters_dict = subscription_create_or_update_parameters_instance.to_dict()
# create an instance of SubscriptionCreateOrUpdateParameters from a dict
subscription_create_or_update_parameters_from_dict = SubscriptionCreateOrUpdateParameters.from_dict(subscription_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



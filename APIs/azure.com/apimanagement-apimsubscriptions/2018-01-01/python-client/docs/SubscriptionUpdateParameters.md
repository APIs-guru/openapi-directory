# SubscriptionUpdateParameters

Subscription update details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionUpdateParameterProperties**](SubscriptionUpdateParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_update_parameters import SubscriptionUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUpdateParameters from a JSON string
subscription_update_parameters_instance = SubscriptionUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUpdateParameters.to_json())

# convert the object into a dict
subscription_update_parameters_dict = subscription_update_parameters_instance.to_dict()
# create an instance of SubscriptionUpdateParameters from a dict
subscription_update_parameters_from_dict = SubscriptionUpdateParameters.from_dict(subscription_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



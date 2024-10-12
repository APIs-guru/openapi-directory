# SubscriptionCreateParameters

Subscription create details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionCreateParameterProperties**](SubscriptionCreateParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_create_parameters import SubscriptionCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateParameters from a JSON string
subscription_create_parameters_instance = SubscriptionCreateParameters.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreateParameters.to_json())

# convert the object into a dict
subscription_create_parameters_dict = subscription_create_parameters_instance.to_dict()
# create an instance of SubscriptionCreateParameters from a dict
subscription_create_parameters_from_dict = SubscriptionCreateParameters.from_dict(subscription_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



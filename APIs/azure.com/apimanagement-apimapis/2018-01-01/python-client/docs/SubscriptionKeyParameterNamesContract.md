# SubscriptionKeyParameterNamesContract

Subscription key parameter names details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | Subscription key header name. | [optional] 
**query** | **str** | Subscription key query string parameter name. | [optional] 

## Example

```python
from openapi_client.models.subscription_key_parameter_names_contract import SubscriptionKeyParameterNamesContract

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionKeyParameterNamesContract from a JSON string
subscription_key_parameter_names_contract_instance = SubscriptionKeyParameterNamesContract.from_json(json)
# print the JSON string representation of the object
print(SubscriptionKeyParameterNamesContract.to_json())

# convert the object into a dict
subscription_key_parameter_names_contract_dict = subscription_key_parameter_names_contract_instance.to_dict()
# create an instance of SubscriptionKeyParameterNamesContract from a dict
subscription_key_parameter_names_contract_from_dict = SubscriptionKeyParameterNamesContract.from_dict(subscription_key_parameter_names_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApiEntityBaseContractSubscriptionKeyParameterNames

Subscription key parameter names details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | Subscription key header name. | [optional] 
**query** | **str** | Subscription key query string parameter name. | [optional] 

## Example

```python
from openapi_client.models.api_entity_base_contract_subscription_key_parameter_names import ApiEntityBaseContractSubscriptionKeyParameterNames

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntityBaseContractSubscriptionKeyParameterNames from a JSON string
api_entity_base_contract_subscription_key_parameter_names_instance = ApiEntityBaseContractSubscriptionKeyParameterNames.from_json(json)
# print the JSON string representation of the object
print(ApiEntityBaseContractSubscriptionKeyParameterNames.to_json())

# convert the object into a dict
api_entity_base_contract_subscription_key_parameter_names_dict = api_entity_base_contract_subscription_key_parameter_names_instance.to_dict()
# create an instance of ApiEntityBaseContractSubscriptionKeyParameterNames from a dict
api_entity_base_contract_subscription_key_parameter_names_from_dict = ApiEntityBaseContractSubscriptionKeyParameterNames.from_dict(api_entity_base_contract_subscription_key_parameter_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



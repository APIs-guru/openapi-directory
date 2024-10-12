# DeliveryRuleRequestSchemeCondition

Defines the RequestScheme condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RequestSchemeMatchConditionParameters**](RequestSchemeMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_scheme_condition import DeliveryRuleRequestSchemeCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestSchemeCondition from a JSON string
delivery_rule_request_scheme_condition_instance = DeliveryRuleRequestSchemeCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestSchemeCondition.to_json())

# convert the object into a dict
delivery_rule_request_scheme_condition_dict = delivery_rule_request_scheme_condition_instance.to_dict()
# create an instance of DeliveryRuleRequestSchemeCondition from a dict
delivery_rule_request_scheme_condition_from_dict = DeliveryRuleRequestSchemeCondition.from_dict(delivery_rule_request_scheme_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



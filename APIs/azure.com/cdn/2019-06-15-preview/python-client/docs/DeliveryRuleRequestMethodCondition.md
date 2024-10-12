# DeliveryRuleRequestMethodCondition

Defines the RequestMethod condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RequestMethodMatchConditionParameters**](RequestMethodMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_method_condition import DeliveryRuleRequestMethodCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestMethodCondition from a JSON string
delivery_rule_request_method_condition_instance = DeliveryRuleRequestMethodCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestMethodCondition.to_json())

# convert the object into a dict
delivery_rule_request_method_condition_dict = delivery_rule_request_method_condition_instance.to_dict()
# create an instance of DeliveryRuleRequestMethodCondition from a dict
delivery_rule_request_method_condition_from_dict = DeliveryRuleRequestMethodCondition.from_dict(delivery_rule_request_method_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



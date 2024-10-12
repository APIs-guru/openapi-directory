# DeliveryRuleRequestBodyCondition

Defines the RequestBody condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RequestBodyMatchConditionParameters**](RequestBodyMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_body_condition import DeliveryRuleRequestBodyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestBodyCondition from a JSON string
delivery_rule_request_body_condition_instance = DeliveryRuleRequestBodyCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestBodyCondition.to_json())

# convert the object into a dict
delivery_rule_request_body_condition_dict = delivery_rule_request_body_condition_instance.to_dict()
# create an instance of DeliveryRuleRequestBodyCondition from a dict
delivery_rule_request_body_condition_from_dict = DeliveryRuleRequestBodyCondition.from_dict(delivery_rule_request_body_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



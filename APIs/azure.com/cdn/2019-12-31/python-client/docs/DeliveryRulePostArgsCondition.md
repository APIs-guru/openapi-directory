# DeliveryRulePostArgsCondition

Defines the PostArgs condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**PostArgsMatchConditionParameters**](PostArgsMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_post_args_condition import DeliveryRulePostArgsCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRulePostArgsCondition from a JSON string
delivery_rule_post_args_condition_instance = DeliveryRulePostArgsCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRulePostArgsCondition.to_json())

# convert the object into a dict
delivery_rule_post_args_condition_dict = delivery_rule_post_args_condition_instance.to_dict()
# create an instance of DeliveryRulePostArgsCondition from a dict
delivery_rule_post_args_condition_from_dict = DeliveryRulePostArgsCondition.from_dict(delivery_rule_post_args_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



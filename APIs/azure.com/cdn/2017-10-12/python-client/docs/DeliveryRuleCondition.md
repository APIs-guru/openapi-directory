# DeliveryRuleCondition

A condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the condition for the delivery rule. | 

## Example

```python
from openapi_client.models.delivery_rule_condition import DeliveryRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleCondition from a JSON string
delivery_rule_condition_instance = DeliveryRuleCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleCondition.to_json())

# convert the object into a dict
delivery_rule_condition_dict = delivery_rule_condition_instance.to_dict()
# create an instance of DeliveryRuleCondition from a dict
delivery_rule_condition_from_dict = DeliveryRuleCondition.from_dict(delivery_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



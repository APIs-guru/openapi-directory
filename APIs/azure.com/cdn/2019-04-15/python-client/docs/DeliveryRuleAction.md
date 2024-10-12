# DeliveryRuleAction

An action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the action for the delivery rule. | 

## Example

```python
from openapi_client.models.delivery_rule_action import DeliveryRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleAction from a JSON string
delivery_rule_action_instance = DeliveryRuleAction.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleAction.to_json())

# convert the object into a dict
delivery_rule_action_dict = delivery_rule_action_instance.to_dict()
# create an instance of DeliveryRuleAction from a dict
delivery_rule_action_from_dict = DeliveryRuleAction.from_dict(delivery_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



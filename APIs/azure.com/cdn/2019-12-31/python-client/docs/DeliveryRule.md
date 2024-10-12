# DeliveryRule

A rule that specifies a set of actions and conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[DeliveryRuleAction]**](DeliveryRuleAction.md) | A list of actions that are executed when all the conditions of a rule are satisfied. | 
**conditions** | [**List[DeliveryRuleCondition]**](DeliveryRuleCondition.md) | A list of conditions that must be matched for the actions to be executed | [optional] 
**name** | **str** | Name of the rule | [optional] 
**order** | **int** | The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied. | 

## Example

```python
from openapi_client.models.delivery_rule import DeliveryRule

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRule from a JSON string
delivery_rule_instance = DeliveryRule.from_json(json)
# print the JSON string representation of the object
print(DeliveryRule.to_json())

# convert the object into a dict
delivery_rule_dict = delivery_rule_instance.to_dict()
# create an instance of DeliveryRule from a dict
delivery_rule_from_dict = DeliveryRule.from_dict(delivery_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



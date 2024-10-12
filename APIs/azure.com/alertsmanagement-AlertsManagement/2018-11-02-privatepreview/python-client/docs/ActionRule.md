# ActionRule

Action rule object containing target scope, conditions and suppression logic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActionRuleProperties**](ActionRuleProperties.md) |  | [optional] 
**location** | **str** | Resource location | 
**tags** | **object** | Resource tags | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.action_rule import ActionRule

# TODO update the JSON string below
json = "{}"
# create an instance of ActionRule from a JSON string
action_rule_instance = ActionRule.from_json(json)
# print the JSON string representation of the object
print(ActionRule.to_json())

# convert the object into a dict
action_rule_dict = action_rule_instance.to_dict()
# create an instance of ActionRule from a dict
action_rule_from_dict = ActionRule.from_dict(action_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



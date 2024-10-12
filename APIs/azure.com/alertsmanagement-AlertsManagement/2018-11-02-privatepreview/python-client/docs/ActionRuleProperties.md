# ActionRuleProperties

Action rule properties defining scope, conditions, suppression logic for action rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Conditions**](Conditions.md) |  | [optional] 
**created_at** | **datetime** | Creation time of action rule. Date-Time in ISO-8601 format. | [optional] [readonly] 
**created_by** | **str** | Created by user name. | [optional] [readonly] 
**description** | **str** | Description of action rule | [optional] 
**last_modified_at** | **datetime** | Last updated time of action rule. Date-Time in ISO-8601 format. | [optional] [readonly] 
**last_modified_by** | **str** | Last modified by user name. | [optional] [readonly] 
**resource_group** | **str** | Resource group where action rule is stored | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) |  | [optional] 
**status** | **str** | Indicates if the given action rule is enabled or disabled | [optional] 
**suppression_config** | [**SuppressionConfig**](SuppressionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_rule_properties import ActionRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ActionRuleProperties from a JSON string
action_rule_properties_instance = ActionRuleProperties.from_json(json)
# print the JSON string representation of the object
print(ActionRuleProperties.to_json())

# convert the object into a dict
action_rule_properties_dict = action_rule_properties_instance.to_dict()
# create an instance of ActionRuleProperties from a dict
action_rule_properties_from_dict = ActionRuleProperties.from_dict(action_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



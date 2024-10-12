# ManagedRuleGroupDefinition

Describes a managed rule group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the managed rule group. | [optional] [readonly] 
**rule_group_name** | **str** | Name of the managed rule group. | [optional] [readonly] 
**rules** | [**List[ManagedRuleDefinition]**](ManagedRuleDefinition.md) | List of rules within the managed rule group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_group_definition import ManagedRuleGroupDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleGroupDefinition from a JSON string
managed_rule_group_definition_instance = ManagedRuleGroupDefinition.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleGroupDefinition.to_json())

# convert the object into a dict
managed_rule_group_definition_dict = managed_rule_group_definition_instance.to_dict()
# create an instance of ManagedRuleGroupDefinition from a dict
managed_rule_group_definition_from_dict = ManagedRuleGroupDefinition.from_dict(managed_rule_group_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ManagedRuleDefinition

Describes a managed rule definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Describes the functionality of the managed rule. | [optional] [readonly] 
**rule_id** | **str** | Identifier for the managed rule. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_definition import ManagedRuleDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleDefinition from a JSON string
managed_rule_definition_instance = ManagedRuleDefinition.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleDefinition.to_json())

# convert the object into a dict
managed_rule_definition_dict = managed_rule_definition_instance.to_dict()
# create an instance of ManagedRuleDefinition from a dict
managed_rule_definition_from_dict = ManagedRuleDefinition.from_dict(managed_rule_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ManagedRuleSetDefinitionProperties

Properties for a managed rule set definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Provisioning state of the managed rule set. | [optional] [readonly] 
**rule_groups** | [**List[ManagedRuleGroupDefinition]**](ManagedRuleGroupDefinition.md) | Rule groups of the managed rule set. | [optional] [readonly] 
**rule_set_type** | **str** | Type of the managed rule set. | [optional] [readonly] 
**rule_set_version** | **str** | Version of the managed rule set type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_set_definition_properties import ManagedRuleSetDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSetDefinitionProperties from a JSON string
managed_rule_set_definition_properties_instance = ManagedRuleSetDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSetDefinitionProperties.to_json())

# convert the object into a dict
managed_rule_set_definition_properties_dict = managed_rule_set_definition_properties_instance.to_dict()
# create an instance of ManagedRuleSetDefinitionProperties from a dict
managed_rule_set_definition_properties_from_dict = ManagedRuleSetDefinitionProperties.from_dict(managed_rule_set_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



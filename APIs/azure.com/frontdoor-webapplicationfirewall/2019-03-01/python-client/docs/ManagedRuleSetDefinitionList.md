# ManagedRuleSetDefinitionList

List of managed rule set definitions available for use in a policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to retrieve next set of managed rule set definitions. | [optional] 
**value** | [**List[ManagedRuleSetDefinition]**](ManagedRuleSetDefinition.md) | List of managed rule set definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_set_definition_list import ManagedRuleSetDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSetDefinitionList from a JSON string
managed_rule_set_definition_list_instance = ManagedRuleSetDefinitionList.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSetDefinitionList.to_json())

# convert the object into a dict
managed_rule_set_definition_list_dict = managed_rule_set_definition_list_instance.to_dict()
# create an instance of ManagedRuleSetDefinitionList from a dict
managed_rule_set_definition_list_from_dict = ManagedRuleSetDefinitionList.from_dict(managed_rule_set_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



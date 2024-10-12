# MappingRuleFilter

A filter defining the entities that a mapping rule should be applied to. When more than one field is specified, the rule is applied only to entities which match all the fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | **List[str]** | Optional. The rule should be applied to specific entities defined by their fully qualified names. | [optional] 
**entity_name_contains** | **str** | Optional. The rule should be applied to entities whose non-qualified name contains the given string. | [optional] 
**entity_name_prefix** | **str** | Optional. The rule should be applied to entities whose non-qualified name starts with the given prefix. | [optional] 
**entity_name_suffix** | **str** | Optional. The rule should be applied to entities whose non-qualified name ends with the given suffix. | [optional] 
**parent_entity** | **str** | Optional. The rule should be applied to entities whose parent entity (fully qualified name) matches the given value. For example, if the rule applies to a table entity, the expected value should be a schema (schema). If the rule applies to a column or index entity, the expected value can be either a schema (schema) or a table (schema.table) | [optional] 

## Example

```python
from openapi_client.models.mapping_rule_filter import MappingRuleFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MappingRuleFilter from a JSON string
mapping_rule_filter_instance = MappingRuleFilter.from_json(json)
# print the JSON string representation of the object
print(MappingRuleFilter.to_json())

# convert the object into a dict
mapping_rule_filter_dict = mapping_rule_filter_instance.to_dict()
# create an instance of MappingRuleFilter from a dict
mapping_rule_filter_from_dict = MappingRuleFilter.from_dict(mapping_rule_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



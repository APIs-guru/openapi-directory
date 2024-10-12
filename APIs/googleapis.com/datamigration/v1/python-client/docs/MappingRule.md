# MappingRule

Definition of a transformation that is to be applied to a group of entities in the source schema. Several such transformations can be applied to an entity sequentially to define the corresponding entity in the target schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditional_column_set_value** | [**ConditionalColumnSetValue**](ConditionalColumnSetValue.md) |  | [optional] 
**convert_rowid_column** | [**ConvertRowIdToColumn**](ConvertRowIdToColumn.md) |  | [optional] 
**display_name** | **str** | Optional. A human readable name | [optional] 
**entity_move** | [**EntityMove**](EntityMove.md) |  | [optional] 
**filter** | [**MappingRuleFilter**](MappingRuleFilter.md) |  | [optional] 
**filter_table_columns** | [**FilterTableColumns**](FilterTableColumns.md) |  | [optional] 
**multi_column_data_type_change** | [**MultiColumnDatatypeChange**](MultiColumnDatatypeChange.md) |  | [optional] 
**multi_entity_rename** | [**MultiEntityRename**](MultiEntityRename.md) |  | [optional] 
**name** | **str** | Full name of the mapping rule resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{set}/mappingRule/{rule}. | [optional] 
**revision_create_time** | **str** | Output only. The timestamp that the revision was created. | [optional] [readonly] 
**revision_id** | **str** | Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string. | [optional] [readonly] 
**rule_order** | **str** | Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden. | [optional] 
**rule_scope** | **str** | Required. The rule scope | [optional] 
**set_table_primary_key** | [**SetTablePrimaryKey**](SetTablePrimaryKey.md) |  | [optional] 
**single_column_change** | [**SingleColumnChange**](SingleColumnChange.md) |  | [optional] 
**single_entity_rename** | [**SingleEntityRename**](SingleEntityRename.md) |  | [optional] 
**single_package_change** | [**SinglePackageChange**](SinglePackageChange.md) |  | [optional] 
**source_sql_change** | [**SourceSqlChange**](SourceSqlChange.md) |  | [optional] 
**state** | **str** | Optional. The mapping rule state | [optional] 

## Example

```python
from openapi_client.models.mapping_rule import MappingRule

# TODO update the JSON string below
json = "{}"
# create an instance of MappingRule from a JSON string
mapping_rule_instance = MappingRule.from_json(json)
# print the JSON string representation of the object
print(MappingRule.to_json())

# convert the object into a dict
mapping_rule_dict = mapping_rule_instance.to_dict()
# create an instance of MappingRule from a dict
mapping_rule_from_dict = MappingRule.from_dict(mapping_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



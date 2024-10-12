# MultiEntityRename

Options to configure rule type MultiEntityRename. The rule is used to rename multiple entities. The rule filter field can refer to one or more entities. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_name_pattern** | **str** | Optional. The pattern used to generate the new entity&#39;s name. This pattern must include the characters &#39;{name}&#39;, which will be replaced with the name of the original entity. For example, the pattern &#39;t_{name}&#39; for an entity name jobs would be converted to &#39;t_jobs&#39;. If unspecified, the default value for this field is &#39;{name}&#39; | [optional] 
**source_name_transformation** | **str** | Optional. Additional transformation that can be done on the source entity name before it is being used by the new_name_pattern, for example lower case. If no transformation is desired, use NO_TRANSFORMATION | [optional] 

## Example

```python
from openapi_client.models.multi_entity_rename import MultiEntityRename

# TODO update the JSON string below
json = "{}"
# create an instance of MultiEntityRename from a JSON string
multi_entity_rename_instance = MultiEntityRename.from_json(json)
# print the JSON string representation of the object
print(MultiEntityRename.to_json())

# convert the object into a dict
multi_entity_rename_dict = multi_entity_rename_instance.to_dict()
# create an instance of MultiEntityRename from a dict
multi_entity_rename_from_dict = MultiEntityRename.from_dict(multi_entity_rename_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



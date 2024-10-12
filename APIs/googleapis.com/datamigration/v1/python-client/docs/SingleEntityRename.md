# SingleEntityRename

Options to configure rule type SingleEntityRename. The rule is used to rename an entity. The rule filter field can refer to only one entity. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT, Synonym

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_name** | **str** | Required. The new name of the destination entity | [optional] 

## Example

```python
from openapi_client.models.single_entity_rename import SingleEntityRename

# TODO update the JSON string below
json = "{}"
# create an instance of SingleEntityRename from a JSON string
single_entity_rename_instance = SingleEntityRename.from_json(json)
# print the JSON string representation of the object
print(SingleEntityRename.to_json())

# convert the object into a dict
single_entity_rename_dict = single_entity_rename_instance.to_dict()
# create an instance of SingleEntityRename from a dict
single_entity_rename_from_dict = SingleEntityRename.from_dict(single_entity_rename_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



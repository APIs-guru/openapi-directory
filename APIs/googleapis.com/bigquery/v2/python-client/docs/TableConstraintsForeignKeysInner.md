# TableConstraintsForeignKeysInner

Represents a foreign key constraint on a table's columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_references** | [**List[TableConstraintsForeignKeysInnerColumnReferencesInner]**](TableConstraintsForeignKeysInnerColumnReferencesInner.md) | Required. The columns that compose the foreign key. | [optional] 
**name** | **str** | Optional. Set only if the foreign key constraint is named. | [optional] 
**referenced_table** | [**TableConstraintsForeignKeysInnerReferencedTable**](TableConstraintsForeignKeysInnerReferencedTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_constraints_foreign_keys_inner import TableConstraintsForeignKeysInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableConstraintsForeignKeysInner from a JSON string
table_constraints_foreign_keys_inner_instance = TableConstraintsForeignKeysInner.from_json(json)
# print the JSON string representation of the object
print(TableConstraintsForeignKeysInner.to_json())

# convert the object into a dict
table_constraints_foreign_keys_inner_dict = table_constraints_foreign_keys_inner_instance.to_dict()
# create an instance of TableConstraintsForeignKeysInner from a dict
table_constraints_foreign_keys_inner_from_dict = TableConstraintsForeignKeysInner.from_dict(table_constraints_foreign_keys_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



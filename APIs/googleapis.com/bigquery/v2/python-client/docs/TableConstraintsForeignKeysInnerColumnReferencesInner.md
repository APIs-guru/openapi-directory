# TableConstraintsForeignKeysInnerColumnReferencesInner

The pair of the foreign key column and primary key column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenced_column** | **str** | Required. The column in the primary key that are referenced by the referencing_column. | [optional] 
**referencing_column** | **str** | Required. The column that composes the foreign key. | [optional] 

## Example

```python
from openapi_client.models.table_constraints_foreign_keys_inner_column_references_inner import TableConstraintsForeignKeysInnerColumnReferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableConstraintsForeignKeysInnerColumnReferencesInner from a JSON string
table_constraints_foreign_keys_inner_column_references_inner_instance = TableConstraintsForeignKeysInnerColumnReferencesInner.from_json(json)
# print the JSON string representation of the object
print(TableConstraintsForeignKeysInnerColumnReferencesInner.to_json())

# convert the object into a dict
table_constraints_foreign_keys_inner_column_references_inner_dict = table_constraints_foreign_keys_inner_column_references_inner_instance.to_dict()
# create an instance of TableConstraintsForeignKeysInnerColumnReferencesInner from a dict
table_constraints_foreign_keys_inner_column_references_inner_from_dict = TableConstraintsForeignKeysInnerColumnReferencesInner.from_dict(table_constraints_foreign_keys_inner_column_references_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



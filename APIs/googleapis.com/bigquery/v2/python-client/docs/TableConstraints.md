# TableConstraints

The TableConstraints defines the primary key and foreign key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**foreign_keys** | [**List[TableConstraintsForeignKeysInner]**](TableConstraintsForeignKeysInner.md) | Optional. Present only if the table has a foreign key. The foreign key is not enforced. | [optional] 
**primary_key** | [**TableConstraintsPrimaryKey**](TableConstraintsPrimaryKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_constraints import TableConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of TableConstraints from a JSON string
table_constraints_instance = TableConstraints.from_json(json)
# print the JSON string representation of the object
print(TableConstraints.to_json())

# convert the object into a dict
table_constraints_dict = table_constraints_instance.to_dict()
# create an instance of TableConstraints from a dict
table_constraints_from_dict = TableConstraints.from_dict(table_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



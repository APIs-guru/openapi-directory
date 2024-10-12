# TableConstraintsPrimaryKey

Represents the primary key constraint on a table's columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Required. The columns that are composed of the primary key constraint. | [optional] 

## Example

```python
from openapi_client.models.table_constraints_primary_key import TableConstraintsPrimaryKey

# TODO update the JSON string below
json = "{}"
# create an instance of TableConstraintsPrimaryKey from a JSON string
table_constraints_primary_key_instance = TableConstraintsPrimaryKey.from_json(json)
# print the JSON string representation of the object
print(TableConstraintsPrimaryKey.to_json())

# convert the object into a dict
table_constraints_primary_key_dict = table_constraints_primary_key_instance.to_dict()
# create an instance of TableConstraintsPrimaryKey from a dict
table_constraints_primary_key_from_dict = TableConstraintsPrimaryKey.from_dict(table_constraints_primary_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



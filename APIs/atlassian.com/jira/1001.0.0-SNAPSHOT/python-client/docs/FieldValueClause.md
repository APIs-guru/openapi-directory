# FieldValueClause

A clause that asserts the current value of a field. For example, `summary ~ test`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**JqlQueryField**](JqlQueryField.md) |  | 
**operand** | [**JqlQueryClauseOperand**](JqlQueryClauseOperand.md) |  | 
**operator** | **str** | The operator between the field and operand. | 

## Example

```python
from openapi_client.models.field_value_clause import FieldValueClause

# TODO update the JSON string below
json = "{}"
# create an instance of FieldValueClause from a JSON string
field_value_clause_instance = FieldValueClause.from_json(json)
# print the JSON string representation of the object
print(FieldValueClause.to_json())

# convert the object into a dict
field_value_clause_dict = field_value_clause_instance.to_dict()
# create an instance of FieldValueClause from a dict
field_value_clause_from_dict = FieldValueClause.from_dict(field_value_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



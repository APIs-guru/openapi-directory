# FieldWasClause

A clause that asserts a previous value of a field. For example, `status WAS \"Resolved\" BY currentUser() BEFORE \"2019/02/02\"`. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**JqlQueryField**](JqlQueryField.md) |  | 
**operand** | [**JqlQueryClauseOperand**](JqlQueryClauseOperand.md) |  | 
**operator** | **str** | The operator between the field and operand. | 
**predicates** | [**List[JqlQueryClauseTimePredicate]**](JqlQueryClauseTimePredicate.md) | The list of time predicates. | 

## Example

```python
from openapi_client.models.field_was_clause import FieldWasClause

# TODO update the JSON string below
json = "{}"
# create an instance of FieldWasClause from a JSON string
field_was_clause_instance = FieldWasClause.from_json(json)
# print the JSON string representation of the object
print(FieldWasClause.to_json())

# convert the object into a dict
field_was_clause_dict = field_was_clause_instance.to_dict()
# create an instance of FieldWasClause from a dict
field_was_clause_from_dict = FieldWasClause.from_dict(field_was_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



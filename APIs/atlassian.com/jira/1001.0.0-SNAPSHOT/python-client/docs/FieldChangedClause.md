# FieldChangedClause

A clause that asserts whether a field was changed. For example, `status CHANGED AFTER startOfMonth(-1M)`.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**JqlQueryField**](JqlQueryField.md) |  | 
**operator** | **str** | The operator applied to the field. | 
**predicates** | [**List[JqlQueryClauseTimePredicate]**](JqlQueryClauseTimePredicate.md) | The list of time predicates. | 

## Example

```python
from openapi_client.models.field_changed_clause import FieldChangedClause

# TODO update the JSON string below
json = "{}"
# create an instance of FieldChangedClause from a JSON string
field_changed_clause_instance = FieldChangedClause.from_json(json)
# print the JSON string representation of the object
print(FieldChangedClause.to_json())

# convert the object into a dict
field_changed_clause_dict = field_changed_clause_instance.to_dict()
# create an instance of FieldChangedClause from a dict
field_changed_clause_from_dict = FieldChangedClause.from_dict(field_changed_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



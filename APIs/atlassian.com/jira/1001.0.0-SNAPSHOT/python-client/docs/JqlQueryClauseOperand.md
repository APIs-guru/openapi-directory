# JqlQueryClauseOperand

Details of an operand in a JQL clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_operand** | **str** | Encoded operand, which can be used directly in a JQL query. | [optional] 
**values** | [**List[JqlQueryUnitaryOperand]**](JqlQueryUnitaryOperand.md) | The list of operand values. | 
**encoded_value** | **str** | Encoded value, which can be used directly in a JQL query. | [optional] 
**value** | **str** | The operand value. | 
**arguments** | **List[str]** | The list of function arguments. | 
**function** | **str** | The name of the function. | 
**keyword** | **str** | The keyword that is the operand value. | 

## Example

```python
from openapi_client.models.jql_query_clause_operand import JqlQueryClauseOperand

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryClauseOperand from a JSON string
jql_query_clause_operand_instance = JqlQueryClauseOperand.from_json(json)
# print the JSON string representation of the object
print(JqlQueryClauseOperand.to_json())

# convert the object into a dict
jql_query_clause_operand_dict = jql_query_clause_operand_instance.to_dict()
# create an instance of JqlQueryClauseOperand from a dict
jql_query_clause_operand_from_dict = JqlQueryClauseOperand.from_dict(jql_query_clause_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



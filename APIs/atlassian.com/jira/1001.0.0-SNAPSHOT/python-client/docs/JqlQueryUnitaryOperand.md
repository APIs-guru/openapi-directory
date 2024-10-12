# JqlQueryUnitaryOperand

An operand that can be part of a list operand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_value** | **str** | Encoded value, which can be used directly in a JQL query. | [optional] 
**value** | **str** | The operand value. | 
**arguments** | **List[str]** | The list of function arguments. | 
**encoded_operand** | **str** | Encoded operand, which can be used directly in a JQL query. | [optional] 
**function** | **str** | The name of the function. | 
**keyword** | **str** | The keyword that is the operand value. | 

## Example

```python
from openapi_client.models.jql_query_unitary_operand import JqlQueryUnitaryOperand

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryUnitaryOperand from a JSON string
jql_query_unitary_operand_instance = JqlQueryUnitaryOperand.from_json(json)
# print the JSON string representation of the object
print(JqlQueryUnitaryOperand.to_json())

# convert the object into a dict
jql_query_unitary_operand_dict = jql_query_unitary_operand_instance.to_dict()
# create an instance of JqlQueryUnitaryOperand from a dict
jql_query_unitary_operand_from_dict = JqlQueryUnitaryOperand.from_dict(jql_query_unitary_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



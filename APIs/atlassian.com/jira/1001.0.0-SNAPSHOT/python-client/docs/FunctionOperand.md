# FunctionOperand

An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** | The list of function arguments. | 
**encoded_operand** | **str** | Encoded operand, which can be used directly in a JQL query. | [optional] 
**function** | **str** | The name of the function. | 

## Example

```python
from openapi_client.models.function_operand import FunctionOperand

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionOperand from a JSON string
function_operand_instance = FunctionOperand.from_json(json)
# print the JSON string representation of the object
print(FunctionOperand.to_json())

# convert the object into a dict
function_operand_dict = function_operand_instance.to_dict()
# create an instance of FunctionOperand from a dict
function_operand_from_dict = FunctionOperand.from_dict(function_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListOperand

An operand that is a list of values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_operand** | **str** | Encoded operand, which can be used directly in a JQL query. | [optional] 
**values** | [**List[JqlQueryUnitaryOperand]**](JqlQueryUnitaryOperand.md) | The list of operand values. | 

## Example

```python
from openapi_client.models.list_operand import ListOperand

# TODO update the JSON string below
json = "{}"
# create an instance of ListOperand from a JSON string
list_operand_instance = ListOperand.from_json(json)
# print the JSON string representation of the object
print(ListOperand.to_json())

# convert the object into a dict
list_operand_dict = list_operand_instance.to_dict()
# create an instance of ListOperand from a dict
list_operand_from_dict = ListOperand.from_dict(list_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



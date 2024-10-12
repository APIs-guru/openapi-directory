# ValueOperand

An operand that is a user-provided value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_value** | **str** | Encoded value, which can be used directly in a JQL query. | [optional] 
**value** | **str** | The operand value. | 

## Example

```python
from openapi_client.models.value_operand import ValueOperand

# TODO update the JSON string below
json = "{}"
# create an instance of ValueOperand from a JSON string
value_operand_instance = ValueOperand.from_json(json)
# print the JSON string representation of the object
print(ValueOperand.to_json())

# convert the object into a dict
value_operand_dict = value_operand_instance.to_dict()
# create an instance of ValueOperand from a dict
value_operand_from_dict = ValueOperand.from_dict(value_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



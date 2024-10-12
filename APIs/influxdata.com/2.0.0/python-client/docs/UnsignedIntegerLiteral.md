# UnsignedIntegerLiteral

Represents integer numbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unsigned_integer_literal import UnsignedIntegerLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of UnsignedIntegerLiteral from a JSON string
unsigned_integer_literal_instance = UnsignedIntegerLiteral.from_json(json)
# print the JSON string representation of the object
print(UnsignedIntegerLiteral.to_json())

# convert the object into a dict
unsigned_integer_literal_dict = unsigned_integer_literal_instance.to_dict()
# create an instance of UnsignedIntegerLiteral from a dict
unsigned_integer_literal_from_dict = UnsignedIntegerLiteral.from_dict(unsigned_integer_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



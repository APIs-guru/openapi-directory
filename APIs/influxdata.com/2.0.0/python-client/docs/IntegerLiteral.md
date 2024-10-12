# IntegerLiteral

Represents integer numbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.integer_literal import IntegerLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerLiteral from a JSON string
integer_literal_instance = IntegerLiteral.from_json(json)
# print the JSON string representation of the object
print(IntegerLiteral.to_json())

# convert the object into a dict
integer_literal_dict = integer_literal_instance.to_dict()
# create an instance of IntegerLiteral from a dict
integer_literal_from_dict = IntegerLiteral.from_dict(integer_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



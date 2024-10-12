# StringLiteral

Expressions begin and end with double quote marks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.string_literal import StringLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of StringLiteral from a JSON string
string_literal_instance = StringLiteral.from_json(json)
# print the JSON string representation of the object
print(StringLiteral.to_json())

# convert the object into a dict
string_literal_dict = string_literal_instance.to_dict()
# create an instance of StringLiteral from a dict
string_literal_from_dict = StringLiteral.from_dict(string_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



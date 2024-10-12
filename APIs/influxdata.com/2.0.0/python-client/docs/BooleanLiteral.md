# BooleanLiteral

Represents boolean values

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.boolean_literal import BooleanLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanLiteral from a JSON string
boolean_literal_instance = BooleanLiteral.from_json(json)
# print the JSON string representation of the object
print(BooleanLiteral.to_json())

# convert the object into a dict
boolean_literal_dict = boolean_literal_instance.to_dict()
# create an instance of BooleanLiteral from a dict
boolean_literal_from_dict = BooleanLiteral.from_dict(boolean_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



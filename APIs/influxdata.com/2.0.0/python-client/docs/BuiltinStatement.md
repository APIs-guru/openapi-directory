# BuiltinStatement

Declares a builtin identifier and its type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Identifier**](Identifier.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.builtin_statement import BuiltinStatement

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltinStatement from a JSON string
builtin_statement_instance = BuiltinStatement.from_json(json)
# print the JSON string representation of the object
print(BuiltinStatement.to_json())

# convert the object into a dict
builtin_statement_dict = builtin_statement_instance.to_dict()
# create an instance of BuiltinStatement from a dict
builtin_statement_from_dict = BuiltinStatement.from_dict(builtin_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



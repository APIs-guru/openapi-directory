# ReturnStatement

Defines an expression to return

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.return_statement import ReturnStatement

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnStatement from a JSON string
return_statement_instance = ReturnStatement.from_json(json)
# print the JSON string representation of the object
print(ReturnStatement.to_json())

# convert the object into a dict
return_statement_dict = return_statement_instance.to_dict()
# create an instance of ReturnStatement from a dict
return_statement_from_dict = ReturnStatement.from_dict(return_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



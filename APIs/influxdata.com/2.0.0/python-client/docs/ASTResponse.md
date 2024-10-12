# ASTResponse

Contains the AST for the supplied Flux query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ast** | [**Package**](Package.md) |  | [optional] 

## Example

```python
from openapi_client.models.ast_response import ASTResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ASTResponse from a JSON string
ast_response_instance = ASTResponse.from_json(json)
# print the JSON string representation of the object
print(ASTResponse.to_json())

# convert the object into a dict
ast_response_dict = ast_response_instance.to_dict()
# create an instance of ASTResponse from a dict
ast_response_from_dict = ASTResponse.from_dict(ast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



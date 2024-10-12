# ImportDeclaration

Declares a package import

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_as** | [**Identifier**](Identifier.md) |  | [optional] 
**path** | [**StringLiteral**](StringLiteral.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.import_declaration import ImportDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDeclaration from a JSON string
import_declaration_instance = ImportDeclaration.from_json(json)
# print the JSON string representation of the object
print(ImportDeclaration.to_json())

# convert the object into a dict
import_declaration_dict = import_declaration_instance.to_dict()
# create an instance of ImportDeclaration from a dict
import_declaration_from_dict = ImportDeclaration.from_dict(import_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



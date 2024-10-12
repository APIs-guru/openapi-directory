# File

Represents a source from a single file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**List[Statement]**](Statement.md) | List of Flux statements | [optional] 
**imports** | [**List[ImportDeclaration]**](ImportDeclaration.md) | A list of package imports | [optional] 
**name** | **str** | The name of the file. | [optional] 
**package** | [**PackageClause**](PackageClause.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



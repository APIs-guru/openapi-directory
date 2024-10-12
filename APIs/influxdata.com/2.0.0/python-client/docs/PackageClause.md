# PackageClause

Defines a package identifier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**Identifier**](Identifier.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.package_clause import PackageClause

# TODO update the JSON string below
json = "{}"
# create an instance of PackageClause from a JSON string
package_clause_instance = PackageClause.from_json(json)
# print the JSON string representation of the object
print(PackageClause.to_json())

# convert the object into a dict
package_clause_dict = package_clause_instance.to_dict()
# create an instance of PackageClause from a dict
package_clause_from_dict = PackageClause.from_dict(package_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Package

Represents a complete package source tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[File]**](File.md) | Package files | [optional] 
**package** | **str** | Package name | [optional] 
**path** | **str** | Package import path | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.package import Package

# TODO update the JSON string below
json = "{}"
# create an instance of Package from a JSON string
package_instance = Package.from_json(json)
# print the JSON string representation of the object
print(Package.to_json())

# convert the object into a dict
package_dict = package_instance.to_dict()
# create an instance of Package from a dict
package_from_dict = Package.from_dict(package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



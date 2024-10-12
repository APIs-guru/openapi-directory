# Package

Package is a generic definition of a package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpe_uri** | **str** | The CPE URI where the vulnerability was detected. | [optional] 
**package_name** | **str** | The name of the package where the vulnerability was detected. | [optional] 
**package_type** | **str** | Type of package, for example, os, maven, or go. | [optional] 
**package_version** | **str** | The version of the package. | [optional] 

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



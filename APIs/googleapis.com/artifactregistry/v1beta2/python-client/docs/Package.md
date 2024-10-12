# Package

Packages are named collections of versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the package was created. | [optional] 
**display_name** | **str** | The display name of the package. | [optional] 
**name** | **str** | The name of the package, for example: &#x60;projects/p1/locations/us-central1/repositories/repo1/packages/pkg1&#x60;. If the package ID part contains slashes, the slashes are escaped. | [optional] 
**update_time** | **str** | The time when the package was last updated. This includes publishing a new version of the package. | [optional] 

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



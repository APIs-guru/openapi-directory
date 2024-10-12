# PackageVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | **List[str]** | The licenses associated with this package. Note that this has to go on the PackageVersion level, because we can have cases with images with the same source having different licences. E.g. in Alpine, musl and musl-utils both have the same origin musl, but have different sets of licenses. | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.package_version import PackageVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PackageVersion from a JSON string
package_version_instance = PackageVersion.from_json(json)
# print the JSON string representation of the object
print(PackageVersion.to_json())

# convert the object into a dict
package_version_dict = package_version_instance.to_dict()
# create an instance of PackageVersion from a dict
package_version_from_dict = PackageVersion.from_dict(package_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



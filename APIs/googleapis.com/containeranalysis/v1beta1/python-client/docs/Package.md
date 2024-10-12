# Package

Package represents a particular package version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. | [optional] 
**cpe_uri** | **str** | The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. | [optional] 
**description** | **str** | The description of this package. | [optional] 
**digest** | [**List[Digest]**](Digest.md) | Hash value, typically a file digest, that allows unique identification a specific package. | [optional] 
**distribution** | [**List[Distribution]**](Distribution.md) | The various channels by which a package is distributed. | [optional] 
**license** | [**License**](License.md) |  | [optional] 
**maintainer** | **str** | A freeform text denoting the maintainer of this package. | [optional] 
**name** | **str** | Required. Immutable. The name of the package. | [optional] 
**package_type** | **str** | The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). | [optional] 
**url** | **str** | The homepage for this package. | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 

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



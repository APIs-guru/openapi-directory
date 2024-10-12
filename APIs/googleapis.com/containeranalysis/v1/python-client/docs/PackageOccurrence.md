# PackageOccurrence

Details on how a particular software package was installed on a system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. | [optional] [readonly] 
**cpe_uri** | **str** | Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. | [optional] [readonly] 
**license** | [**License**](License.md) |  | [optional] 
**location** | [**List[Location]**](Location.md) | All of the places within the filesystem versions of this package have been found. | [optional] 
**name** | **str** | Required. Output only. The name of the installed package. | [optional] [readonly] 
**package_type** | **str** | Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). | [optional] [readonly] 
**version** | [**Version**](Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.package_occurrence import PackageOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of PackageOccurrence from a JSON string
package_occurrence_instance = PackageOccurrence.from_json(json)
# print the JSON string representation of the object
print(PackageOccurrence.to_json())

# convert the object into a dict
package_occurrence_dict = package_occurrence_instance.to_dict()
# create an instance of PackageOccurrence from a dict
package_occurrence_from_dict = PackageOccurrence.from_dict(package_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



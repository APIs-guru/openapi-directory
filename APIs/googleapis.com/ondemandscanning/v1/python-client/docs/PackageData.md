# PackageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The architecture of the package. | [optional] 
**binary_source_info** | [**List[BinarySourceInfo]**](BinarySourceInfo.md) | A bundle containing the binary and source information. | [optional] 
**binary_version** | [**PackageVersion**](PackageVersion.md) |  | [optional] 
**cpe_uri** | **str** | The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar. | [optional] 
**dependency_chain** | [**List[LanguagePackageDependency]**](LanguagePackageDependency.md) | The dependency chain between this package and the user&#39;s artifact. List in order from the customer&#39;s package under review first, to the current package last. Inclusive of the original package and the current package. | [optional] 
**file_location** | [**List[FileLocation]**](FileLocation.md) | The path to the jar file / go binary file. | [optional] 
**hash_digest** | **str** | HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages. | [optional] 
**licenses** | **List[str]** | The list of licenses found that are related to a given package. Note that licenses may also be stored on the BinarySourceInfo. If there is no BinarySourceInfo (because there&#39;s no concept of source vs binary), then it will be stored here, while if there are BinarySourceInfos, it will be stored there, as one source can have multiple binaries with different licenses. | [optional] 
**maintainer** | [**Maintainer**](Maintainer.md) |  | [optional] 
**os** | **str** | The OS affected by a vulnerability Used to generate the cpe_uri for OS packages | [optional] 
**os_version** | **str** | The version of the OS Used to generate the cpe_uri for OS packages | [optional] 
**package** | **str** | The package being analysed for vulnerabilities | [optional] 
**package_type** | **str** | The type of package: os, maven, go, etc. | [optional] 
**patched_cve** | **List[str]** | CVEs that this package is no longer vulnerable to go/drydock-dd-custom-binary-scanning | [optional] 
**source_version** | [**PackageVersion**](PackageVersion.md) |  | [optional] 
**unused** | **str** |  | [optional] 
**version** | **str** | The version of the package being analysed | [optional] 

## Example

```python
from openapi_client.models.package_data import PackageData

# TODO update the JSON string below
json = "{}"
# create an instance of PackageData from a JSON string
package_data_instance = PackageData.from_json(json)
# print the JSON string representation of the object
print(PackageData.to_json())

# convert the object into a dict
package_data_dict = package_data_instance.to_dict()
# create an instance of PackageData from a dict
package_data_from_dict = PackageData.from_dict(package_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



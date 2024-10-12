# PackageInfoOccurrence

PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | A place for the SPDX file creator to record any general comments about the package being described | [optional] 
**filename** | **str** | Provide the actual file name of the package, or path of the directory being treated as a package | [optional] 
**home_page** | **str** | Output only. Provide a place for the SPDX file creator to record a web site that serves as the package&#39;s home page | [optional] [readonly] 
**id** | **str** | Uniquely identify any element in an SPDX document which may be referenced by other elements | [optional] 
**license_concluded** | [**License**](License.md) |  | [optional] 
**package_type** | **str** | Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc. | [optional] [readonly] 
**source_info** | **str** | Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package | [optional] 
**summary_description** | **str** | Output only. A short description of the package | [optional] [readonly] 
**title** | **str** | Output only. Identify the full name of the package as given by the Package Originator | [optional] [readonly] 
**version** | **str** | Output only. Identify the version of the package | [optional] [readonly] 

## Example

```python
from openapi_client.models.package_info_occurrence import PackageInfoOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of PackageInfoOccurrence from a JSON string
package_info_occurrence_instance = PackageInfoOccurrence.from_json(json)
# print the JSON string representation of the object
print(PackageInfoOccurrence.to_json())

# convert the object into a dict
package_info_occurrence_dict = package_info_occurrence_instance.to_dict()
# create an instance of PackageInfoOccurrence from a dict
package_info_occurrence_from_dict = PackageInfoOccurrence.from_dict(package_info_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



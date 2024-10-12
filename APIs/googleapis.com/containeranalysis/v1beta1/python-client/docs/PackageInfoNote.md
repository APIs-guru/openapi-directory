# PackageInfoNote

PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzed** | **bool** | Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document | [optional] 
**attribution** | **str** | A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts | [optional] 
**checksum** | **str** | Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file | [optional] 
**copyright** | **str** | Identify the copyright holders of the package, as well as any dates present | [optional] 
**detailed_description** | **str** | A more detailed description of the package | [optional] 
**download_location** | **str** | This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created | [optional] 
**external_refs** | [**List[ExternalRef]**](ExternalRef.md) | ExternalRef | [optional] 
**files_license_info** | **List[str]** | Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found | [optional] 
**home_page** | **str** | Provide a place for the SPDX file creator to record a web site that serves as the package&#39;s home page | [optional] 
**license_declared** | [**License**](License.md) |  | [optional] 
**originator** | **str** | If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came | [optional] 
**package_type** | **str** | The type of package: OS, MAVEN, GO, GO_STDLIB, etc. | [optional] 
**summary_description** | **str** | A short description of the package | [optional] 
**supplier** | **str** | Identify the actual distribution source for the package/directory identified in the SPDX file | [optional] 
**title** | **str** | Identify the full name of the package as given by the Package Originator | [optional] 
**verification_code** | **str** | This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file | [optional] 
**version** | **str** | Identify the version of the package | [optional] 

## Example

```python
from openapi_client.models.package_info_note import PackageInfoNote

# TODO update the JSON string below
json = "{}"
# create an instance of PackageInfoNote from a JSON string
package_info_note_instance = PackageInfoNote.from_json(json)
# print the JSON string representation of the object
print(PackageInfoNote.to_json())

# convert the object into a dict
package_info_note_dict = package_info_note_instance.to_dict()
# create an instance of PackageInfoNote from a dict
package_info_note_from_dict = PackageInfoNote.from_dict(package_info_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SoftwarePackage

Software package information of the operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt_package** | [**VersionedPackage**](VersionedPackage.md) |  | [optional] 
**cos_package** | [**VersionedPackage**](VersionedPackage.md) |  | [optional] 
**googet_package** | [**VersionedPackage**](VersionedPackage.md) |  | [optional] 
**qfe_package** | [**WindowsQuickFixEngineeringPackage**](WindowsQuickFixEngineeringPackage.md) |  | [optional] 
**windows_application** | [**WindowsApplication**](WindowsApplication.md) |  | [optional] 
**wua_package** | [**WindowsUpdatePackage**](WindowsUpdatePackage.md) |  | [optional] 
**yum_package** | [**VersionedPackage**](VersionedPackage.md) |  | [optional] 
**zypper_package** | [**VersionedPackage**](VersionedPackage.md) |  | [optional] 
**zypper_patch** | [**ZypperPatch**](ZypperPatch.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_package import SoftwarePackage

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwarePackage from a JSON string
software_package_instance = SoftwarePackage.from_json(json)
# print the JSON string representation of the object
print(SoftwarePackage.to_json())

# convert the object into a dict
software_package_dict = software_package_instance.to_dict()
# create an instance of SoftwarePackage from a dict
software_package_from_dict = SoftwarePackage.from_dict(software_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BranchConfigurationsGet200ResponseAllOfToolsetsXcode

Build configuration when Xcode is part of the build steps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_extension_provisioning_profile_files** | [**List[BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner]**](BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner.md) |  | [optional] 
**archive_configuration** | **str** | The build configuration of the target to archive | [optional] 
**automatic_signing** | **bool** |  | [optional] 
**cartfile_path** | **str** | Path to Carthage file, if present | [optional] 
**certificate_encoded** | **str** |  | [optional] 
**certificate_file_id** | **str** |  | [optional] 
**certificate_filename** | **str** |  | [optional] 
**certificate_password** | **str** |  | [optional] 
**certificate_upload_id** | **str** |  | [optional] 
**force_legacy_build_system** | **bool** | Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used. By default new build system is used if workspace setting is not committed to the repository. Only used for iOS React Native app, with Xcode 10.  | [optional] 
**podfile_path** | **str** | Path to CococaPods file, if present | [optional] 
**project_or_workspace_path** | **str** | Xcode project/workspace path | [optional] 
**provisioning_profile_encoded** | **str** |  | [optional] 
**provisioning_profile_file_id** | **str** |  | [optional] 
**provisioning_profile_filename** | **str** |  | [optional] 
**provisioning_profile_upload_id** | **str** |  | [optional] 
**scheme** | **str** |  | [optional] 
**target_to_archive** | **str** | The target id of the selected scheme to archive | [optional] 
**team_id** | **str** |  | [optional] 
**xcode_project_sha** | **str** | The selected pbxproject hash to the repositroy | [optional] 
**xcode_version** | **str** | Xcode version used to build. Available versions can be found in \&quot;/xcode_versions\&quot; API. Default is latest stable version, at the time when the configuration is set. | [optional] 

## Example

```python
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets_xcode import BranchConfigurationsGet200ResponseAllOfToolsetsXcode

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXcode from a JSON string
branch_configurations_get200_response_all_of_toolsets_xcode_instance = BranchConfigurationsGet200ResponseAllOfToolsetsXcode.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsetsXcode.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_xcode_dict = branch_configurations_get200_response_all_of_toolsets_xcode_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXcode from a dict
branch_configurations_get200_response_all_of_toolsets_xcode_from_dict = BranchConfigurationsGet200ResponseAllOfToolsetsXcode.from_dict(branch_configurations_get200_response_all_of_toolsets_xcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



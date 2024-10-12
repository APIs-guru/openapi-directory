# BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner

Provisioning profile fetch and store information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | File id from secure file storage | [optional] 
**file_name** | **str** | Name of uploaded provisioning profile | [optional] 
**target_bundle_identifier** | **str** | Target the provisioning profile is used to sign | [optional] 
**upload_id** | **str** | Upload id to App Center File Upload Store | [optional] 

## Example

```python
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner import BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner from a JSON string
branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner_instance = BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner_dict = branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner from a dict
branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner_from_dict = BranchConfigurationsGet200ResponseAllOfToolsetsXcodeAppExtensionProvisioningProfileFilesInner.from_dict(branch_configurations_get200_response_all_of_toolsets_xcode_app_extension_provisioning_profile_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BranchConfigurationsGet200ResponseAllOfToolsetsXamarin

Build configuration for Xamarin projects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **str** |  | [optional] 
**configuration** | **str** |  | [optional] 
**is_sim_build** | **bool** |  | [optional] 
**mono_version** | **str** |  | [optional] 
**p12_file** | **str** |  | [optional] 
**p12_pwd** | **str** |  | [optional] 
**prov_profile** | **str** |  | [optional] 
**sdk_bundle** | **str** |  | [optional] 
**sln_path** | **str** |  | [optional] 
**symlink** | **str** | Symlink of the SDK Bundle and Mono installation. The build will use the associated Mono bundled with related Xamarin SDK. If both symlink and monoVersion or sdkBundle are passed, the symlink is taking precedence. If non-existing symlink is passed, the current stable Mono version will be configured for building.  | [optional] 

## Example

```python
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets_xamarin import BranchConfigurationsGet200ResponseAllOfToolsetsXamarin

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXamarin from a JSON string
branch_configurations_get200_response_all_of_toolsets_xamarin_instance = BranchConfigurationsGet200ResponseAllOfToolsetsXamarin.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsetsXamarin.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_xamarin_dict = branch_configurations_get200_response_all_of_toolsets_xamarin_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsXamarin from a dict
branch_configurations_get200_response_all_of_toolsets_xamarin_from_dict = BranchConfigurationsGet200ResponseAllOfToolsetsXamarin.from_dict(branch_configurations_get200_response_all_of_toolsets_xamarin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



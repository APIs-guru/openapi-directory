# BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_extension_targets** | [**List[BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerAppExtensionTargetsInner]**](BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerAppExtensionTargetsInner.md) | Information regarding project app extensions, if present | [optional] 
**cartfile_path** | **str** | Path to Carthage file, if present | [optional] 
**path** | **str** | Path to project | 
**podfile_path** | **str** | Path to CocoaPods file, if present | [optional] 
**shared_schemes** | [**List[BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerSharedSchemesInner]**](BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerSharedSchemesInner.md) | Project schemes | 
**workspace_project_paths** | **str** | Related projects paths for xcworkspace | [optional] 
**xcode_project_sha** | **str** | repo object Id of the pbxproject | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner import BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner from a JSON string
builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner_instance = BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner_dict = builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner_instance.to_dict()
# create an instance of BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner from a dict
builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner_from_dict = BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner.from_dict(builds_list_toolset_projects200_response_xcode_xcode_scheme_containers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



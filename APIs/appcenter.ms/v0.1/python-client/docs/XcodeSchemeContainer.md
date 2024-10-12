# XcodeSchemeContainer


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
from openapi_client.models.xcode_scheme_container import XcodeSchemeContainer

# TODO update the JSON string below
json = "{}"
# create an instance of XcodeSchemeContainer from a JSON string
xcode_scheme_container_instance = XcodeSchemeContainer.from_json(json)
# print the JSON string representation of the object
print(XcodeSchemeContainer.to_json())

# convert the object into a dict
xcode_scheme_container_dict = xcode_scheme_container_instance.to_dict()
# create an instance of XcodeSchemeContainer from a dict
xcode_scheme_container_from_dict = XcodeSchemeContainer.from_dict(xcode_scheme_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



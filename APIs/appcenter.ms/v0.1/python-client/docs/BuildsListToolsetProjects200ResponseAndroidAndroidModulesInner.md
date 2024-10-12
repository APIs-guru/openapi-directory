# BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_configurations** | [**List[BuildsListToolsetProjects200ResponseAndroidAndroidModulesInnerBuildConfigurationsInner]**](BuildsListToolsetProjects200ResponseAndroidAndroidModulesInnerBuildConfigurationsInner.md) | The detected build configurations of the Android module | [optional] 
**build_types** | **List[str]** | The detected build types of the Android module | [optional] 
**build_variants** | **List[str]** | The detected build variants of the Android module (matrix of product flavor + build type (debug|release)) | [optional] 
**has_bundle** | **bool** | Module contains bundle settings | [optional] 
**is_root** | **bool** | Whether the module is at the root level of the project | [optional] 
**name** | **str** | Name of the Android module | 
**product_flavors** | **List[str]** | The product flavors of the Android module | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response_android_android_modules_inner import BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner from a JSON string
builds_list_toolset_projects200_response_android_android_modules_inner_instance = BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_android_android_modules_inner_dict = builds_list_toolset_projects200_response_android_android_modules_inner_instance.to_dict()
# create an instance of BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner from a dict
builds_list_toolset_projects200_response_android_android_modules_inner_from_dict = BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner.from_dict(builds_list_toolset_projects200_response_android_android_modules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



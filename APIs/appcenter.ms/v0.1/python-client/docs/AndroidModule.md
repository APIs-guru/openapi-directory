# AndroidModule


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
from openapi_client.models.android_module import AndroidModule

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidModule from a JSON string
android_module_instance = AndroidModule.from_json(json)
# print the JSON string representation of the object
print(AndroidModule.to_json())

# convert the object into a dict
android_module_dict = android_module_instance.to_dict()
# create an instance of AndroidModule from a dict
android_module_from_dict = AndroidModule.from_dict(android_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



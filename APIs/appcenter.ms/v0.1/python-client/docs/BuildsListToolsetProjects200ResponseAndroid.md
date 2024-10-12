# BuildsListToolsetProjects200ResponseAndroid


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_modules** | [**List[BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner]**](BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner.md) | Android Gradle modules | 
**gradle_wrapper_path** | **str** | The path of the Gradle wrapper | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response_android import BuildsListToolsetProjects200ResponseAndroid

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200ResponseAndroid from a JSON string
builds_list_toolset_projects200_response_android_instance = BuildsListToolsetProjects200ResponseAndroid.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200ResponseAndroid.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_android_dict = builds_list_toolset_projects200_response_android_instance.to_dict()
# create an instance of BuildsListToolsetProjects200ResponseAndroid from a dict
builds_list_toolset_projects200_response_android_from_dict = BuildsListToolsetProjects200ResponseAndroid.from_dict(builds_list_toolset_projects200_response_android_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



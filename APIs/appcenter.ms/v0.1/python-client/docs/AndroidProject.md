# AndroidProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_modules** | [**List[BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner]**](BuildsListToolsetProjects200ResponseAndroidAndroidModulesInner.md) | Android Gradle modules | 
**gradle_wrapper_path** | **str** | The path of the Gradle wrapper | [optional] 

## Example

```python
from openapi_client.models.android_project import AndroidProject

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidProject from a JSON string
android_project_instance = AndroidProject.from_json(json)
# print the JSON string representation of the object
print(AndroidProject.to_json())

# convert the object into a dict
android_project_dict = android_project_instance.to_dict()
# create an instance of AndroidProject from a dict
android_project_from_dict = AndroidProject.from_dict(android_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



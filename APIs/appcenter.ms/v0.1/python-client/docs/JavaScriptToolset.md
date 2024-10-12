# JavaScriptToolset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**javascript_solutions** | [**List[BuildsListToolsetProjects200ResponseJavascriptJavascriptSolutionsInner]**](BuildsListToolsetProjects200ResponseJavascriptJavascriptSolutionsInner.md) | The React Native solutions detected | [optional] 
**package_json_paths** | **List[str]** | Paths for detected package.json files | 

## Example

```python
from openapi_client.models.java_script_toolset import JavaScriptToolset

# TODO update the JSON string below
json = "{}"
# create an instance of JavaScriptToolset from a JSON string
java_script_toolset_instance = JavaScriptToolset.from_json(json)
# print the JSON string representation of the object
print(JavaScriptToolset.to_json())

# convert the object into a dict
java_script_toolset_dict = java_script_toolset_instance.to_dict()
# create an instance of JavaScriptToolset from a dict
java_script_toolset_from_dict = JavaScriptToolset.from_dict(java_script_toolset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



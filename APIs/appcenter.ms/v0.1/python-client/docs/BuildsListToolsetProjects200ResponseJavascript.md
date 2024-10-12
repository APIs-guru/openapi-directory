# BuildsListToolsetProjects200ResponseJavascript


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**javascript_solutions** | [**List[BuildsListToolsetProjects200ResponseJavascriptJavascriptSolutionsInner]**](BuildsListToolsetProjects200ResponseJavascriptJavascriptSolutionsInner.md) | The React Native solutions detected | [optional] 
**package_json_paths** | **List[str]** | Paths for detected package.json files | 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response_javascript import BuildsListToolsetProjects200ResponseJavascript

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200ResponseJavascript from a JSON string
builds_list_toolset_projects200_response_javascript_instance = BuildsListToolsetProjects200ResponseJavascript.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200ResponseJavascript.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_javascript_dict = builds_list_toolset_projects200_response_javascript_instance.to_dict()
# create an instance of BuildsListToolsetProjects200ResponseJavascript from a dict
builds_list_toolset_projects200_response_javascript_from_dict = BuildsListToolsetProjects200ResponseJavascript.from_dict(builds_list_toolset_projects200_response_javascript_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



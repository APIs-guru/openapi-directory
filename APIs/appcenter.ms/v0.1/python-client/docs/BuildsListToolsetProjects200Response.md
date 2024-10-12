# BuildsListToolsetProjects200Response

A collection of projects for each type of toolset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android** | [**BuildsListToolsetProjects200ResponseAndroid**](BuildsListToolsetProjects200ResponseAndroid.md) |  | [optional] 
**buildscripts** | [**Dict[str, BuildsListToolsetProjects200ResponseBuildscriptsValue]**](BuildsListToolsetProjects200ResponseBuildscriptsValue.md) | A collection of detected pre/post buildscripts for current platform toolset | [optional] 
**commit** | **str** | The commit hash of the analyzed commit | [optional] 
**javascript** | [**BuildsListToolsetProjects200ResponseJavascript**](BuildsListToolsetProjects200ResponseJavascript.md) |  | [optional] 
**testcloud** | [**BuildsListToolsetProjects200ResponseTestcloud**](BuildsListToolsetProjects200ResponseTestcloud.md) |  | [optional] 
**uwp** | [**BuildsListToolsetProjects200ResponseUwp**](BuildsListToolsetProjects200ResponseUwp.md) |  | [optional] 
**xamarin** | [**BuildsListToolsetProjects200ResponseXamarin**](BuildsListToolsetProjects200ResponseXamarin.md) |  | [optional] 
**xcode** | [**BuildsListToolsetProjects200ResponseXcode**](BuildsListToolsetProjects200ResponseXcode.md) |  | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response import BuildsListToolsetProjects200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200Response from a JSON string
builds_list_toolset_projects200_response_instance = BuildsListToolsetProjects200Response.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200Response.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_dict = builds_list_toolset_projects200_response_instance.to_dict()
# create an instance of BuildsListToolsetProjects200Response from a dict
builds_list_toolset_projects200_response_from_dict = BuildsListToolsetProjects200Response.from_dict(builds_list_toolset_projects200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



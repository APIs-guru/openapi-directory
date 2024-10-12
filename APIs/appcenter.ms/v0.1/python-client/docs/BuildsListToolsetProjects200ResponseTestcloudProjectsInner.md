# BuildsListToolsetProjects200ResponseTestcloudProjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**framework_properties** | [**BuildsListToolsetProjects200ResponseTestcloudProjectsInnerFrameworkProperties**](BuildsListToolsetProjects200ResponseTestcloudProjectsInnerFrameworkProperties.md) |  | [optional] 
**framework_type** | **str** |  | 
**path** | **str** | The path to the TestCloud project | 

## Example

```python
from openapi_client.models.builds_list_toolset_projects200_response_testcloud_projects_inner import BuildsListToolsetProjects200ResponseTestcloudProjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsetProjects200ResponseTestcloudProjectsInner from a JSON string
builds_list_toolset_projects200_response_testcloud_projects_inner_instance = BuildsListToolsetProjects200ResponseTestcloudProjectsInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsetProjects200ResponseTestcloudProjectsInner.to_json())

# convert the object into a dict
builds_list_toolset_projects200_response_testcloud_projects_inner_dict = builds_list_toolset_projects200_response_testcloud_projects_inner_instance.to_dict()
# create an instance of BuildsListToolsetProjects200ResponseTestcloudProjectsInner from a dict
builds_list_toolset_projects200_response_testcloud_projects_inner_from_dict = BuildsListToolsetProjects200ResponseTestcloudProjectsInner.from_dict(builds_list_toolset_projects200_response_testcloud_projects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



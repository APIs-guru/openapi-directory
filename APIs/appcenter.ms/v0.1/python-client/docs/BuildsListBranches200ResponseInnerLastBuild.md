# BuildsListBranches200ResponseInnerLastBuild


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number** | **str** | The build number | 
**finish_time** | **str** | The time the build was finished | [optional] 
**id** | **int** | The build ID | 
**last_changed_date** | **str** | The time the build status was last changed | [optional] 
**queue_time** | **str** | The time the build was queued | 
**result** | **str** | The build result | 
**source_branch** | **str** | The source branch name | 
**source_version** | **str** | The source SHA | 
**start_time** | **str** | The time the build was started | [optional] 
**status** | **str** | The build status | 

## Example

```python
from openapi_client.models.builds_list_branches200_response_inner_last_build import BuildsListBranches200ResponseInnerLastBuild

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListBranches200ResponseInnerLastBuild from a JSON string
builds_list_branches200_response_inner_last_build_instance = BuildsListBranches200ResponseInnerLastBuild.from_json(json)
# print the JSON string representation of the object
print(BuildsListBranches200ResponseInnerLastBuild.to_json())

# convert the object into a dict
builds_list_branches200_response_inner_last_build_dict = builds_list_branches200_response_inner_last_build_instance.to_dict()
# create an instance of BuildsListBranches200ResponseInnerLastBuild from a dict
builds_list_branches200_response_inner_last_build_from_dict = BuildsListBranches200ResponseInnerLastBuild.from_dict(builds_list_branches200_response_inner_last_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



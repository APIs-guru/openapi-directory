# ProjectUsernameProjectTreeBranchPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_parameters** | **object** | Additional environment variables to inject into the build environment. A map of names to values.  | [optional] 
**parallel** | **str** | The number of containers to use to run the build. Default is null and the project default is used.  | [optional] 
**revision** | **str** | The specific revision to build. Default is null and the head of the branch is used. Cannot be used with tag parameter.  | [optional] 

## Example

```python
from openapi_client.models.project_username_project_tree_branch_post_request import ProjectUsernameProjectTreeBranchPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectUsernameProjectTreeBranchPostRequest from a JSON string
project_username_project_tree_branch_post_request_instance = ProjectUsernameProjectTreeBranchPostRequest.from_json(json)
# print the JSON string representation of the object
print(ProjectUsernameProjectTreeBranchPostRequest.to_json())

# convert the object into a dict
project_username_project_tree_branch_post_request_dict = project_username_project_tree_branch_post_request_instance.to_dict()
# create an instance of ProjectUsernameProjectTreeBranchPostRequest from a dict
project_username_project_tree_branch_post_request_from_dict = ProjectUsernameProjectTreeBranchPostRequest.from_dict(project_username_project_tree_branch_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



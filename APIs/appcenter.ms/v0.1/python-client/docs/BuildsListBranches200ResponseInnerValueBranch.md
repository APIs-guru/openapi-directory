# BuildsListBranches200ResponseInnerValueBranch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit** | [**BuildsListBranches200ResponseInnerValueBranchCommit**](BuildsListBranches200ResponseInnerValueBranchCommit.md) |  | 
**name** | **str** | The branch name | 

## Example

```python
from openapi_client.models.builds_list_branches200_response_inner_value_branch import BuildsListBranches200ResponseInnerValueBranch

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListBranches200ResponseInnerValueBranch from a JSON string
builds_list_branches200_response_inner_value_branch_instance = BuildsListBranches200ResponseInnerValueBranch.from_json(json)
# print the JSON string representation of the object
print(BuildsListBranches200ResponseInnerValueBranch.to_json())

# convert the object into a dict
builds_list_branches200_response_inner_value_branch_dict = builds_list_branches200_response_inner_value_branch_instance.to_dict()
# create an instance of BuildsListBranches200ResponseInnerValueBranch from a dict
builds_list_branches200_response_inner_value_branch_from_dict = BuildsListBranches200ResponseInnerValueBranch.from_dict(builds_list_branches200_response_inner_value_branch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



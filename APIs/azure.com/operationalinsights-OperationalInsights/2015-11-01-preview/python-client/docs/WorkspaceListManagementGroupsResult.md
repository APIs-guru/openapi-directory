# WorkspaceListManagementGroupsResult

The list workspace management groups operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ManagementGroup]**](ManagementGroup.md) | Gets or sets a list of management groups attached to the workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_list_management_groups_result import WorkspaceListManagementGroupsResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceListManagementGroupsResult from a JSON string
workspace_list_management_groups_result_instance = WorkspaceListManagementGroupsResult.from_json(json)
# print the JSON string representation of the object
print(WorkspaceListManagementGroupsResult.to_json())

# convert the object into a dict
workspace_list_management_groups_result_dict = workspace_list_management_groups_result_instance.to_dict()
# create an instance of WorkspaceListManagementGroupsResult from a dict
workspace_list_management_groups_result_from_dict = WorkspaceListManagementGroupsResult.from_dict(workspace_list_management_groups_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



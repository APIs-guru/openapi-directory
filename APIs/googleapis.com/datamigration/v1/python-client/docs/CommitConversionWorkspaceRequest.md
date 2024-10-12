# CommitConversionWorkspaceRequest

Request message for 'CommitConversionWorkspace' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_name** | **str** | Optional. Optional name of the commit. | [optional] 

## Example

```python
from openapi_client.models.commit_conversion_workspace_request import CommitConversionWorkspaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitConversionWorkspaceRequest from a JSON string
commit_conversion_workspace_request_instance = CommitConversionWorkspaceRequest.from_json(json)
# print the JSON string representation of the object
print(CommitConversionWorkspaceRequest.to_json())

# convert the object into a dict
commit_conversion_workspace_request_dict = commit_conversion_workspace_request_instance.to_dict()
# create an instance of CommitConversionWorkspaceRequest from a dict
commit_conversion_workspace_request_from_dict = CommitConversionWorkspaceRequest.from_dict(commit_conversion_workspace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



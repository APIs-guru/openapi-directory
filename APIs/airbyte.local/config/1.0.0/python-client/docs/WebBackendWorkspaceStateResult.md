# WebBackendWorkspaceStateResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_connections** | **bool** |  | 
**has_destinations** | **bool** |  | 
**has_sources** | **bool** |  | 

## Example

```python
from openapi_client.models.web_backend_workspace_state_result import WebBackendWorkspaceStateResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendWorkspaceStateResult from a JSON string
web_backend_workspace_state_result_instance = WebBackendWorkspaceStateResult.from_json(json)
# print the JSON string representation of the object
print(WebBackendWorkspaceStateResult.to_json())

# convert the object into a dict
web_backend_workspace_state_result_dict = web_backend_workspace_state_result_instance.to_dict()
# create an instance of WebBackendWorkspaceStateResult from a dict
web_backend_workspace_state_result_from_dict = WebBackendWorkspaceStateResult.from_dict(web_backend_workspace_state_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



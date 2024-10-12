# GetAllWorkspacesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllWorkspacesResponseListInner]**](GetAllWorkspacesResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_workspaces_response import GetAllWorkspacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllWorkspacesResponse from a JSON string
get_all_workspaces_response_instance = GetAllWorkspacesResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllWorkspacesResponse.to_json())

# convert the object into a dict
get_all_workspaces_response_dict = get_all_workspaces_response_instance.to_dict()
# create an instance of GetAllWorkspacesResponse from a dict
get_all_workspaces_response_from_dict = GetAllWorkspacesResponse.from_dict(get_all_workspaces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



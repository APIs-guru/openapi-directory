# FetchRemoteBranchesResponse

`FetchRemoteBranches` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branches** | **List[str]** | The remote repository&#39;s branch names. | [optional] 

## Example

```python
from openapi_client.models.fetch_remote_branches_response import FetchRemoteBranchesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRemoteBranchesResponse from a JSON string
fetch_remote_branches_response_instance = FetchRemoteBranchesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRemoteBranchesResponse.to_json())

# convert the object into a dict
fetch_remote_branches_response_dict = fetch_remote_branches_response_instance.to_dict()
# create an instance of FetchRemoteBranchesResponse from a dict
fetch_remote_branches_response_from_dict = FetchRemoteBranchesResponse.from_dict(fetch_remote_branches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



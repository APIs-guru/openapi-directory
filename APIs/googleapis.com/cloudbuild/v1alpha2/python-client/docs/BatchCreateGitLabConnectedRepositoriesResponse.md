# BatchCreateGitLabConnectedRepositoriesResponse

Response of BatchCreateGitLabConnectedRepositories RPC method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gitlab_connected_repositories** | [**List[GitLabConnectedRepository]**](GitLabConnectedRepository.md) | The GitLab connected repository requests&#39; responses. | [optional] 

## Example

```python
from openapi_client.models.batch_create_git_lab_connected_repositories_response import BatchCreateGitLabConnectedRepositoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateGitLabConnectedRepositoriesResponse from a JSON string
batch_create_git_lab_connected_repositories_response_instance = BatchCreateGitLabConnectedRepositoriesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateGitLabConnectedRepositoriesResponse.to_json())

# convert the object into a dict
batch_create_git_lab_connected_repositories_response_dict = batch_create_git_lab_connected_repositories_response_instance.to_dict()
# create an instance of BatchCreateGitLabConnectedRepositoriesResponse from a dict
batch_create_git_lab_connected_repositories_response_from_dict = BatchCreateGitLabConnectedRepositoriesResponse.from_dict(batch_create_git_lab_connected_repositories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



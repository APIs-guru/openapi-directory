# GitLabConnectedRepository

GitLabConnectedRepository represents a GitLab connected repository request response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | The name of the &#x60;GitLabConfig&#x60; that added connected repository. Format: &#x60;projects/{project}/locations/{location}/gitLabConfigs/{config}&#x60; | [optional] 
**repo** | [**GitLabRepositoryId**](GitLabRepositoryId.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.git_lab_connected_repository import GitLabConnectedRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GitLabConnectedRepository from a JSON string
git_lab_connected_repository_instance = GitLabConnectedRepository.from_json(json)
# print the JSON string representation of the object
print(GitLabConnectedRepository.to_json())

# convert the object into a dict
git_lab_connected_repository_dict = git_lab_connected_repository_instance.to_dict()
# create an instance of GitLabConnectedRepository from a dict
git_lab_connected_repository_from_dict = GitLabConnectedRepository.from_dict(git_lab_connected_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GitLabRepositoryId

GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required. Identifier for the repository. example: \&quot;namespace/project-slug\&quot;, namespace is usually the username or group ID | [optional] 
**webhook_id** | **int** | Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo. | [optional] [readonly] 

## Example

```python
from openapi_client.models.git_lab_repository_id import GitLabRepositoryId

# TODO update the JSON string below
json = "{}"
# create an instance of GitLabRepositoryId from a JSON string
git_lab_repository_id_instance = GitLabRepositoryId.from_json(json)
# print the JSON string representation of the object
print(GitLabRepositoryId.to_json())

# convert the object into a dict
git_lab_repository_id_dict = git_lab_repository_id_instance.to_dict()
# create an instance of GitLabRepositoryId from a dict
git_lab_repository_id_from_dict = GitLabRepositoryId.from_dict(git_lab_repository_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



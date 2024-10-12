# GitRepoVolume

Represents a volume that is populated with the contents of a git repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** | Target directory name. Must not contain or start with &#39;..&#39;.  If &#39;.&#39; is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. | [optional] 
**repository** | **str** | Repository URL | 
**revision** | **str** | Commit hash for the specified revision. | [optional] 

## Example

```python
from openapi_client.models.git_repo_volume import GitRepoVolume

# TODO update the JSON string below
json = "{}"
# create an instance of GitRepoVolume from a JSON string
git_repo_volume_instance = GitRepoVolume.from_json(json)
# print the JSON string representation of the object
print(GitRepoVolume.to_json())

# convert the object into a dict
git_repo_volume_dict = git_repo_volume_instance.to_dict()
# create an instance of GitRepoVolume from a dict
git_repo_volume_from_dict = GitRepoVolume.from_dict(git_repo_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



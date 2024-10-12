# GitCommitTrigger

The git commit trigger that caused a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | The branch name in the repository. | [optional] 
**commit_id** | **str** | The unique ID that identifies a commit. | [optional] 
**id** | **str** | The unique ID of the trigger. | [optional] 
**provider_type** | **str** | The source control provider type. | [optional] 
**repository_url** | **str** | The repository URL. | [optional] 

## Example

```python
from openapi_client.models.git_commit_trigger import GitCommitTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of GitCommitTrigger from a JSON string
git_commit_trigger_instance = GitCommitTrigger.from_json(json)
# print the JSON string representation of the object
print(GitCommitTrigger.to_json())

# convert the object into a dict
git_commit_trigger_dict = git_commit_trigger_instance.to_dict()
# create an instance of GitCommitTrigger from a dict
git_commit_trigger_from_dict = GitCommitTrigger.from_dict(git_commit_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



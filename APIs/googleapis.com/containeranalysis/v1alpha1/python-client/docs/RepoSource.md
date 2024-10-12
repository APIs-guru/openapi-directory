# RepoSource

RepoSource describes the location of the source in a Google Cloud Source Repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | Name of the branch to build. | [optional] 
**commit_sha** | **str** | Explicit commit SHA to build. | [optional] 
**project_id** | **str** | ID of the project that owns the repo. | [optional] 
**repo_name** | **str** | Name of the repo. | [optional] 
**tag_name** | **str** | Name of the tag to build. | [optional] 

## Example

```python
from openapi_client.models.repo_source import RepoSource

# TODO update the JSON string below
json = "{}"
# create an instance of RepoSource from a JSON string
repo_source_instance = RepoSource.from_json(json)
# print the JSON string representation of the object
print(RepoSource.to_json())

# convert the object into a dict
repo_source_dict = repo_source_instance.to_dict()
# create an instance of RepoSource from a dict
repo_source_from_dict = RepoSource.from_dict(repo_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RepoId

A unique identifier for a cloud repo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_repo_id** | [**ProjectRepoId**](ProjectRepoId.md) |  | [optional] 
**uid** | **str** | A server-assigned, globally unique identifier. | [optional] 

## Example

```python
from openapi_client.models.repo_id import RepoId

# TODO update the JSON string below
json = "{}"
# create an instance of RepoId from a JSON string
repo_id_instance = RepoId.from_json(json)
# print the JSON string representation of the object
print(RepoId.to_json())

# convert the object into a dict
repo_id_dict = repo_id_instance.to_dict()
# create an instance of RepoId from a dict
repo_id_from_dict = RepoId.from_dict(repo_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



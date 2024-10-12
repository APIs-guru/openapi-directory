# GitPatternRepository

Git repository property payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_key** | **str** | Public sshKey of git repository. | [optional] 
**host_key_algorithm** | **str** | SshKey algorithm of git repository. | [optional] 
**label** | **str** | Label of the repository | [optional] 
**name** | **str** | Name of the repository | 
**password** | **str** | Password of git repository basic auth. | [optional] 
**pattern** | **List[str]** | Collection of pattern of the repository | [optional] 
**private_key** | **str** | Private sshKey algorithm of git repository. | [optional] 
**search_paths** | **List[str]** | Searching path of the repository | [optional] 
**strict_host_key_checking** | **bool** | Strict host key checking or not. | [optional] 
**uri** | **str** | URI of the repository | 
**username** | **str** | Username of git repository basic auth. | [optional] 

## Example

```python
from openapi_client.models.git_pattern_repository import GitPatternRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GitPatternRepository from a JSON string
git_pattern_repository_instance = GitPatternRepository.from_json(json)
# print the JSON string representation of the object
print(GitPatternRepository.to_json())

# convert the object into a dict
git_pattern_repository_dict = git_pattern_repository_instance.to_dict()
# create an instance of GitPatternRepository from a dict
git_pattern_repository_from_dict = GitPatternRepository.from_dict(git_pattern_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



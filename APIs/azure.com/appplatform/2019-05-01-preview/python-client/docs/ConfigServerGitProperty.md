# ConfigServerGitProperty

Property of git.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_key** | **str** | Public sshKey of git repository. | [optional] 
**host_key_algorithm** | **str** | SshKey algorithm of git repository. | [optional] 
**label** | **str** | Label of the repository | [optional] 
**password** | **str** | Password of git repository basic auth. | [optional] 
**private_key** | **str** | Private sshKey algorithm of git repository. | [optional] 
**repositories** | [**List[GitPatternRepository]**](GitPatternRepository.md) | Repositories of git. | [optional] 
**search_paths** | **List[str]** | Searching path of the repository | [optional] 
**strict_host_key_checking** | **bool** | Strict host key checking or not. | [optional] 
**uri** | **str** | URI of the repository | 
**username** | **str** | Username of git repository basic auth. | [optional] 

## Example

```python
from openapi_client.models.config_server_git_property import ConfigServerGitProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigServerGitProperty from a JSON string
config_server_git_property_instance = ConfigServerGitProperty.from_json(json)
# print the JSON string representation of the object
print(ConfigServerGitProperty.to_json())

# convert the object into a dict
config_server_git_property_dict = config_server_git_property_instance.to_dict()
# create an instance of ConfigServerGitProperty from a dict
config_server_git_property_from_dict = ConfigServerGitProperty.from_dict(config_server_git_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



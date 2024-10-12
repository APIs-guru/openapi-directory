# RemoteRepositoryConfig

Remote repository configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt_repository** | [**AptRepository**](AptRepository.md) |  | [optional] 
**description** | **str** | The description of the remote source. | [optional] 
**docker_repository** | [**DockerRepository**](DockerRepository.md) |  | [optional] 
**maven_repository** | [**MavenRepository**](MavenRepository.md) |  | [optional] 
**npm_repository** | [**NpmRepository**](NpmRepository.md) |  | [optional] 
**python_repository** | [**PythonRepository**](PythonRepository.md) |  | [optional] 
**upstream_credentials** | [**UpstreamCredentials**](UpstreamCredentials.md) |  | [optional] 
**yum_repository** | [**YumRepository**](YumRepository.md) |  | [optional] 

## Example

```python
from openapi_client.models.remote_repository_config import RemoteRepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteRepositoryConfig from a JSON string
remote_repository_config_instance = RemoteRepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(RemoteRepositoryConfig.to_json())

# convert the object into a dict
remote_repository_config_dict = remote_repository_config_instance.to_dict()
# create an instance of RemoteRepositoryConfig from a dict
remote_repository_config_from_dict = RemoteRepositoryConfig.from_dict(remote_repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



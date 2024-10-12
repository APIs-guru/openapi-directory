# DockerRepositoryConfig

DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**immutable_tags** | **bool** | The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created. | [optional] 

## Example

```python
from openapi_client.models.docker_repository_config import DockerRepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DockerRepositoryConfig from a JSON string
docker_repository_config_instance = DockerRepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(DockerRepositoryConfig.to_json())

# convert the object into a dict
docker_repository_config_dict = docker_repository_config_instance.to_dict()
# create an instance of DockerRepositoryConfig from a dict
docker_repository_config_from_dict = DockerRepositoryConfig.from_dict(docker_repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



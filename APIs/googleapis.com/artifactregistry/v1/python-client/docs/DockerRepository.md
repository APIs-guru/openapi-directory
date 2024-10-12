# DockerRepository

Configuration for a Docker remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | **str** | One of the publicly available Docker repositories supported by Artifact Registry. | [optional] 

## Example

```python
from openapi_client.models.docker_repository import DockerRepository

# TODO update the JSON string below
json = "{}"
# create an instance of DockerRepository from a JSON string
docker_repository_instance = DockerRepository.from_json(json)
# print the JSON string representation of the object
print(DockerRepository.to_json())

# convert the object into a dict
docker_repository_dict = docker_repository_instance.to_dict()
# create an instance of DockerRepository from a dict
docker_repository_from_dict = DockerRepository.from_dict(docker_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



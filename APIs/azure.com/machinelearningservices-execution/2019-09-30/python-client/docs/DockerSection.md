# DockerSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** | Extra arguments to the Docker run command. | [optional] 
**base_dockerfile** | **str** | Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. | [optional] 
**base_image** | **str** | Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. | [optional] 
**base_image_registry** | [**ContainerRegistry**](ContainerRegistry.md) |  | [optional] 
**enabled** | **bool** | Set true to perform this run inside a Docker container. | [optional] 
**shared_volumes** | **bool** | Set false to disable AzureML&#39;s usage of the Docker shared volumes feature to work around bugs in certain versions of Docker for Windows. | [optional] 

## Example

```python
from openapi_client.models.docker_section import DockerSection

# TODO update the JSON string below
json = "{}"
# create an instance of DockerSection from a JSON string
docker_section_instance = DockerSection.from_json(json)
# print the JSON string representation of the object
print(DockerSection.to_json())

# convert the object into a dict
docker_section_dict = docker_section_instance.to_dict()
# create an instance of DockerSection from a dict
docker_section_from_dict = DockerSection.from_dict(docker_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



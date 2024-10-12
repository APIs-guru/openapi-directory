# ModelDockerSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** | Extra arguments to the Docker run command. | [optional] 
**base_dockerfile** | **str** | Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. | [optional] 
**base_image** | **str** | Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. | [optional] 
**base_image_registry** | [**ContainerRegistry**](ContainerRegistry.md) |  | [optional] 
**enabled** | **bool** | Set True to perform this run inside a Docker container. | [optional] 
**gpu_support** | **bool** | Run with NVidia Docker extension to support GPUs. | [optional] 
**shared_volumes** | **bool** | Set False if necessary to work around shared volume bugs on Windows. | [optional] 
**shm_size** | **str** | The shared memory size setting for NVidia GPUs. | [optional] 

## Example

```python
from openapi_client.models.model_docker_section import ModelDockerSection

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDockerSection from a JSON string
model_docker_section_instance = ModelDockerSection.from_json(json)
# print the JSON string representation of the object
print(ModelDockerSection.to_json())

# convert the object into a dict
model_docker_section_dict = model_docker_section_instance.to_dict()
# create an instance of ModelDockerSection from a dict
model_docker_section_from_dict = ModelDockerSection.from_dict(model_docker_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



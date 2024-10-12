# DockerBuildStep

The Docker build step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**List[Argument]**](Argument.md) | The collection of override arguments to be used when executing this build step. | [optional] 
**docker_file_path** | **str** | The Docker file path relative to the source context. | 
**image_names** | **List[str]** | The fully qualified image names including the repository and tag. | [optional] 
**is_push_enabled** | **bool** | The value of this property indicates whether the image built should be pushed to the registry or not. | [optional] [default to True]
**no_cache** | **bool** | The value of this property indicates whether the image cache is enabled or not. | [optional] [default to False]
**target** | **str** | The name of the target build stage for the docker build. | [optional] 

## Example

```python
from openapi_client.models.docker_build_step import DockerBuildStep

# TODO update the JSON string below
json = "{}"
# create an instance of DockerBuildStep from a JSON string
docker_build_step_instance = DockerBuildStep.from_json(json)
# print the JSON string representation of the object
print(DockerBuildStep.to_json())

# convert the object into a dict
docker_build_step_dict = docker_build_step_instance.to_dict()
# create an instance of DockerBuildStep from a dict
docker_build_step_from_dict = DockerBuildStep.from_dict(docker_build_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



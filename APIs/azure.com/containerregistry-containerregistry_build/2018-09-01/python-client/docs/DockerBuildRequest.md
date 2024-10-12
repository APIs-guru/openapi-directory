# DockerBuildRequest

The parameters for a docker quick build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**arguments** | [**List[Argument]**](Argument.md) | The collection of override arguments to be used when executing the run. | [optional] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**docker_file_path** | **str** | The Docker file path relative to the source location. | 
**image_names** | **List[str]** | The fully qualified image names including the repository and tag. | [optional] 
**is_push_enabled** | **bool** | The value of this property indicates whether the image built should be pushed to the registry or not. | [optional] [default to True]
**no_cache** | **bool** | The value of this property indicates whether the image cache is enabled or not. | [optional] [default to False]
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**source_location** | **str** | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.  If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | [optional] 
**target** | **str** | The name of the target build stage for the docker build. | [optional] 
**timeout** | **int** | Run timeout in seconds. | [optional] [default to 3600]

## Example

```python
from openapi_client.models.docker_build_request import DockerBuildRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DockerBuildRequest from a JSON string
docker_build_request_instance = DockerBuildRequest.from_json(json)
# print the JSON string representation of the object
print(DockerBuildRequest.to_json())

# convert the object into a dict
docker_build_request_dict = docker_build_request_instance.to_dict()
# create an instance of DockerBuildRequest from a dict
docker_build_request_from_dict = DockerBuildRequest.from_dict(docker_build_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



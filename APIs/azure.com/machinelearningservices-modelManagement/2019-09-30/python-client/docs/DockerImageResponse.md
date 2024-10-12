# DockerImageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[EnvironmentImageAsset]**](EnvironmentImageAsset.md) | The list of assets. | [optional] 
**docker_file_uri** | **str** | The Uri to the docker file. | [optional] 
**driver_program** | **str** | The name of the driver file. | [optional] 
**generated_docker_file_uri** | **str** | The Uri to the generated docker file. | [optional] 
**target_runtime** | [**TargetRuntime**](TargetRuntime.md) |  | [optional] 

## Example

```python
from openapi_client.models.docker_image_response import DockerImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DockerImageResponse from a JSON string
docker_image_response_instance = DockerImageResponse.from_json(json)
# print the JSON string representation of the object
print(DockerImageResponse.to_json())

# convert the object into a dict
docker_image_response_dict = docker_image_response_instance.to_dict()
# create an instance of DockerImageResponse from a dict
docker_image_response_from_dict = DockerImageResponse.from_dict(docker_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



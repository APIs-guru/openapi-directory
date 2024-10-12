# ListDockerImagesResponse

The response from listing docker images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_images** | [**List[DockerImage]**](DockerImage.md) | The docker images returned. | [optional] 
**next_page_token** | **str** | The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. | [optional] 

## Example

```python
from openapi_client.models.list_docker_images_response import ListDockerImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDockerImagesResponse from a JSON string
list_docker_images_response_instance = ListDockerImagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDockerImagesResponse.to_json())

# convert the object into a dict
list_docker_images_response_dict = list_docker_images_response_instance.to_dict()
# create an instance of ListDockerImagesResponse from a dict
list_docker_images_response_from_dict = ListDockerImagesResponse.from_dict(list_docker_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



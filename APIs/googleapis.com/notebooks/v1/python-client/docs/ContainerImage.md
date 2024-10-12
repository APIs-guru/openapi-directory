# ContainerImage

Definition of a container image for starting a notebook instance with the environment installed in a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | **str** | Required. The path to the container image repository. For example: &#x60;gcr.io/{project_id}/{image_name}&#x60; | [optional] 
**tag** | **str** | The tag of the container image. If not specified, this defaults to the latest tag. | [optional] 

## Example

```python
from openapi_client.models.container_image import ContainerImage

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerImage from a JSON string
container_image_instance = ContainerImage.from_json(json)
# print the JSON string representation of the object
print(ContainerImage.to_json())

# convert the object into a dict
container_image_dict = container_image_instance.to_dict()
# create an instance of ContainerImage from a dict
container_image_from_dict = ContainerImage.from_dict(container_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContainerConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_image_names** | **List[str]** | This is the full image reference, as would be specified to \&quot;docker pull\&quot;. An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry. | [optional] 
**container_registries** | [**List[ContainerRegistry]**](ContainerRegistry.md) | If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.container_configuration import ContainerConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerConfiguration from a JSON string
container_configuration_instance = ContainerConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContainerConfiguration.to_json())

# convert the object into a dict
container_configuration_dict = container_configuration_instance.to_dict()
# create an instance of ContainerConfiguration from a dict
container_configuration_from_dict = ContainerConfiguration.from_dict(container_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContainerProperties

The container instance properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **List[str]** | The commands to execute within the container instance in exec form. | [optional] 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | The environment variables to set in the container instance. | [optional] 
**image** | **str** | The name of the image used to create the container instance. | 
**instance_view** | [**ContainerPropertiesInstanceView**](ContainerPropertiesInstanceView.md) |  | [optional] 
**ports** | [**List[ContainerPort]**](ContainerPort.md) | The exposed ports on the container instance. | [optional] 
**resources** | [**ResourceRequirements**](ResourceRequirements.md) |  | 
**volume_mounts** | [**List[VolumeMount]**](VolumeMount.md) | The volume mounts available to the container instance. | [optional] 

## Example

```python
from openapi_client.models.container_properties import ContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerProperties from a JSON string
container_properties_instance = ContainerProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerProperties.to_json())

# convert the object into a dict
container_properties_dict = container_properties_instance.to_dict()
# create an instance of ContainerProperties from a dict
container_properties_from_dict = ContainerProperties.from_dict(container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



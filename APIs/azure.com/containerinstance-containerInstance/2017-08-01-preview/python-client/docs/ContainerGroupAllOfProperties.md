# ContainerGroupAllOfProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[Container]**](Container.md) | The containers within the container group. | 
**image_registry_credentials** | [**List[ImageRegistryCredential]**](ImageRegistryCredential.md) | The image registry credentials by which the container group is created from. | [optional] 
**ip_address** | [**IpAddress**](IpAddress.md) |  | [optional] 
**os_type** | **str** | The operating system type required by the containers in the container group. | 
**provisioning_state** | **str** | The provisioning state of the container group. This only appears in the response. | [optional] [readonly] 
**restart_policy** | **str** | Restart policy for all containers within the container group. Currently the only available option is &#x60;always&#x60;. | [optional] 
**state** | **str** | The current state of the container group. This is only valid for the response. | [optional] [readonly] 
**volumes** | [**List[Volume]**](Volume.md) | The list of volumes that can be mounted by containers in this container group. | [optional] 

## Example

```python
from openapi_client.models.container_group_all_of_properties import ContainerGroupAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupAllOfProperties from a JSON string
container_group_all_of_properties_instance = ContainerGroupAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupAllOfProperties.to_json())

# convert the object into a dict
container_group_all_of_properties_dict = container_group_all_of_properties_instance.to_dict()
# create an instance of ContainerGroupAllOfProperties from a dict
container_group_all_of_properties_from_dict = ContainerGroupAllOfProperties.from_dict(container_group_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



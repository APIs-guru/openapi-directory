# ContainerGroupAllOfProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[Container]**](Container.md) | The containers within the container group. | 
**diagnostics** | [**ContainerGroupDiagnostics**](ContainerGroupDiagnostics.md) |  | [optional] 
**dns_config** | [**DnsConfiguration**](DnsConfiguration.md) |  | [optional] 
**image_registry_credentials** | [**List[ImageRegistryCredential]**](ImageRegistryCredential.md) | The image registry credentials by which the container group is created from. | [optional] 
**instance_view** | [**ContainerGroupAllOfPropertiesInstanceView**](ContainerGroupAllOfPropertiesInstanceView.md) |  | [optional] 
**ip_address** | [**IpAddress**](IpAddress.md) |  | [optional] 
**network_profile** | [**ContainerGroupNetworkProfile**](ContainerGroupNetworkProfile.md) |  | [optional] 
**os_type** | **str** | The operating system type required by the containers in the container group. | 
**provisioning_state** | **str** | The provisioning state of the container group. This only appears in the response. | [optional] [readonly] 
**restart_policy** | **str** | Restart policy for all containers within the container group.  - &#x60;Always&#x60; Always restart - &#x60;OnFailure&#x60; Restart on failure - &#x60;Never&#x60; Never restart  | [optional] 
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



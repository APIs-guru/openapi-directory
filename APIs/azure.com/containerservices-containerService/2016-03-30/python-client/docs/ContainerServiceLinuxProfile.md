# ContainerServiceLinuxProfile

Profile for Linux VMs in the container service cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_username** | **str** | The administrator username to use for all Linux VMs | 
**ssh** | [**ContainerServiceSshConfiguration**](ContainerServiceSshConfiguration.md) |  | 

## Example

```python
from openapi_client.models.container_service_linux_profile import ContainerServiceLinuxProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceLinuxProfile from a JSON string
container_service_linux_profile_instance = ContainerServiceLinuxProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceLinuxProfile.to_json())

# convert the object into a dict
container_service_linux_profile_dict = container_service_linux_profile_instance.to_dict()
# create an instance of ContainerServiceLinuxProfile from a dict
container_service_linux_profile_from_dict = ContainerServiceLinuxProfile.from_dict(container_service_linux_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



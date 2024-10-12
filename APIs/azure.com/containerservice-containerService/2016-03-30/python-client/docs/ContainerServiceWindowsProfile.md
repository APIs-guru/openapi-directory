# ContainerServiceWindowsProfile

Profile for Windows VMs in the container service cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_password** | **str** | The administrator password to use for Windows VMs | 
**admin_username** | **str** | The administrator username to use for Windows VMs | 

## Example

```python
from openapi_client.models.container_service_windows_profile import ContainerServiceWindowsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceWindowsProfile from a JSON string
container_service_windows_profile_instance = ContainerServiceWindowsProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceWindowsProfile.to_json())

# convert the object into a dict
container_service_windows_profile_dict = container_service_windows_profile_instance.to_dict()
# create an instance of ContainerServiceWindowsProfile from a dict
container_service_windows_profile_from_dict = ContainerServiceWindowsProfile.from_dict(container_service_windows_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



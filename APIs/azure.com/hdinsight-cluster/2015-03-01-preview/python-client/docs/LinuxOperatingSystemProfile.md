# LinuxOperatingSystemProfile

The ssh username, password, and ssh public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password. | [optional] 
**ssh_profile** | [**SshProfile**](SshProfile.md) |  | [optional] 
**username** | **str** | The username. | [optional] 

## Example

```python
from openapi_client.models.linux_operating_system_profile import LinuxOperatingSystemProfile

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxOperatingSystemProfile from a JSON string
linux_operating_system_profile_instance = LinuxOperatingSystemProfile.from_json(json)
# print the JSON string representation of the object
print(LinuxOperatingSystemProfile.to_json())

# convert the object into a dict
linux_operating_system_profile_dict = linux_operating_system_profile_instance.to_dict()
# create an instance of LinuxOperatingSystemProfile from a dict
linux_operating_system_profile_from_dict = LinuxOperatingSystemProfile.from_dict(linux_operating_system_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



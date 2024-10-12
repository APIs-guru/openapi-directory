# ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile

The ssh username, password, and ssh public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password. | [optional] 
**ssh_profile** | [**ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile**](ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile.md) |  | [optional] 
**username** | **str** | The username. | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile import ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile from a JSON string
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_instance = ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_dict = application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile from a dict
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_from_dict = ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfile.from_dict(application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



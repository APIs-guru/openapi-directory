# ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile

The list of SSH public keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfilePublicKeysInner]**](ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfilePublicKeysInner.md) | The list of SSH public keys. | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile import ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile from a JSON string
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile_instance = ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile_dict = application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile from a dict
application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile_from_dict = ApplicationPropertiesComputeProfileRolesInnerOsProfileLinuxOperatingSystemProfileSshProfile.from_dict(application_properties_compute_profile_roles_inner_os_profile_linux_operating_system_profile_ssh_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



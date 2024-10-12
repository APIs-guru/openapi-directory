# ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile

The virtual network properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the virtual network. | [optional] 
**subnet** | **str** | The name of the subnet. | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_virtual_network_profile import ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile from a JSON string
application_properties_compute_profile_roles_inner_virtual_network_profile_instance = ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_virtual_network_profile_dict = application_properties_compute_profile_roles_inner_virtual_network_profile_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile from a dict
application_properties_compute_profile_roles_inner_virtual_network_profile_from_dict = ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile.from_dict(application_properties_compute_profile_roles_inner_virtual_network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



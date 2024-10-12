# ApplicationPropertiesComputeProfileRolesInner

Describes a role on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscale** | [**ApplicationPropertiesComputeProfileRolesInnerAutoscale**](ApplicationPropertiesComputeProfileRolesInnerAutoscale.md) |  | [optional] 
**data_disks_groups** | [**List[ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner]**](ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner.md) | The data disks groups for the role. | [optional] 
**hardware_profile** | [**ApplicationPropertiesComputeProfileRolesInnerHardwareProfile**](ApplicationPropertiesComputeProfileRolesInnerHardwareProfile.md) |  | [optional] 
**min_instance_count** | **int** | The minimum instance count of the cluster. | [optional] 
**name** | **str** | The name of the role. | [optional] 
**os_profile** | [**ApplicationPropertiesComputeProfileRolesInnerOsProfile**](ApplicationPropertiesComputeProfileRolesInnerOsProfile.md) |  | [optional] 
**script_actions** | [**List[ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner]**](ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner.md) | The list of script actions on the role. | [optional] 
**target_instance_count** | **int** | The instance count of the cluster. | [optional] 
**virtual_network_profile** | [**ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile**](ApplicationPropertiesComputeProfileRolesInnerVirtualNetworkProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner import ApplicationPropertiesComputeProfileRolesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInner from a JSON string
application_properties_compute_profile_roles_inner_instance = ApplicationPropertiesComputeProfileRolesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInner.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_dict = application_properties_compute_profile_roles_inner_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInner from a dict
application_properties_compute_profile_roles_inner_from_dict = ApplicationPropertiesComputeProfileRolesInner.from_dict(application_properties_compute_profile_roles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



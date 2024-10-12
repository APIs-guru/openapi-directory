# Role

Describes a role on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscale** | [**Autoscale**](Autoscale.md) |  | [optional] 
**data_disks_groups** | [**List[DataDisksGroups]**](DataDisksGroups.md) | The data disks groups for the role. | [optional] 
**hardware_profile** | [**HardwareProfile**](HardwareProfile.md) |  | [optional] 
**min_instance_count** | **int** | The minimum instance count of the cluster. | [optional] 
**name** | **str** | The name of the role. | [optional] 
**os_profile** | [**OsProfile**](OsProfile.md) |  | [optional] 
**script_actions** | [**List[RoleScriptActionsInner]**](RoleScriptActionsInner.md) | The list of script actions on the role. | [optional] 
**target_instance_count** | **int** | The instance count of the cluster. | [optional] 
**virtual_network_profile** | [**VirtualNetworkProfile**](VirtualNetworkProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.role import Role

# TODO update the JSON string below
json = "{}"
# create an instance of Role from a JSON string
role_instance = Role.from_json(json)
# print the JSON string representation of the object
print(Role.to_json())

# convert the object into a dict
role_dict = role_instance.to_dict()
# create an instance of Role from a dict
role_from_dict = Role.from_dict(role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



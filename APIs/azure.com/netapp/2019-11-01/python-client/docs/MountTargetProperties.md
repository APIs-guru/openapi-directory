# MountTargetProperties

Mount target properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_system_id** | **str** | UUID v4 used to identify the MountTarget | 
**ip_address** | **str** | The mount target&#39;s IPv4 address | [optional] [readonly] 
**mount_target_id** | **str** | UUID v4 used to identify the MountTarget | [optional] [readonly] 
**smb_server_fqdn** | **str** | The SMB server&#39;s Fully Qualified Domain Name, FQDN | [optional] 

## Example

```python
from openapi_client.models.mount_target_properties import MountTargetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MountTargetProperties from a JSON string
mount_target_properties_instance = MountTargetProperties.from_json(json)
# print the JSON string representation of the object
print(MountTargetProperties.to_json())

# convert the object into a dict
mount_target_properties_dict = mount_target_properties_instance.to_dict()
# create an instance of MountTargetProperties from a dict
mount_target_properties_from_dict = MountTargetProperties.from_dict(mount_target_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



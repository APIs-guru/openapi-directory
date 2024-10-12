# MountPointMap

The share mount point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_point** | **str** | Mount point for the share. | [optional] [readonly] 
**role_id** | **str** | ID of the role to which share is mounted. | [optional] [readonly] 
**role_type** | **str** | Role type. | [optional] [readonly] 
**share_id** | **str** | ID of the share mounted to the role VM. | 

## Example

```python
from openapi_client.models.mount_point_map import MountPointMap

# TODO update the JSON string below
json = "{}"
# create an instance of MountPointMap from a JSON string
mount_point_map_instance = MountPointMap.from_json(json)
# print the JSON string representation of the object
print(MountPointMap.to_json())

# convert the object into a dict
mount_point_map_dict = mount_point_map_instance.to_dict()
# create an instance of MountPointMap from a dict
mount_point_map_from_dict = MountPointMap.from_dict(mount_point_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



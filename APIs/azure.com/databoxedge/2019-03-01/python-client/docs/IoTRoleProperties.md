# IoTRoleProperties

IoT role properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_platform** | **str** | Host OS supported by the IoT role. | 
**io_t_device_details** | [**IoTDeviceInfo**](IoTDeviceInfo.md) |  | 
**io_t_edge_device_details** | [**IoTDeviceInfo**](IoTDeviceInfo.md) |  | 
**role_status** | **str** | Role status. | 
**share_mappings** | [**List[MountPointMap]**](MountPointMap.md) | Mount points of shares in role(s). | [optional] 

## Example

```python
from openapi_client.models.io_t_role_properties import IoTRoleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTRoleProperties from a JSON string
io_t_role_properties_instance = IoTRoleProperties.from_json(json)
# print the JSON string representation of the object
print(IoTRoleProperties.to_json())

# convert the object into a dict
io_t_role_properties_dict = io_t_role_properties_instance.to_dict()
# create an instance of IoTRoleProperties from a dict
io_t_role_properties_from_dict = IoTRoleProperties.from_dict(io_t_role_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



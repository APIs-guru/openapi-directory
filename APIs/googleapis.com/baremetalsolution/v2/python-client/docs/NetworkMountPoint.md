# NetworkMountPoint

Mount point for a network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_gateway** | **bool** | Network should be a default gateway. | [optional] 
**instance** | **str** | Instance to attach network to. | [optional] 
**ip_address** | **str** | Ip address of the server. | [optional] 
**logical_interface** | **str** | Logical interface to detach from. | [optional] 

## Example

```python
from openapi_client.models.network_mount_point import NetworkMountPoint

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkMountPoint from a JSON string
network_mount_point_instance = NetworkMountPoint.from_json(json)
# print the JSON string representation of the object
print(NetworkMountPoint.to_json())

# convert the object into a dict
network_mount_point_dict = network_mount_point_instance.to_dict()
# create an instance of NetworkMountPoint from a dict
network_mount_point_from_dict = NetworkMountPoint.from_dict(network_mount_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



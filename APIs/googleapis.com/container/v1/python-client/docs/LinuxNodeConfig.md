# LinuxNodeConfig

Parameters that can be configured on Linux nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cgroup_mode** | **str** | cgroup_mode specifies the cgroup mode to be used on the node. | [optional] 
**sysctls** | **Dict[str, str]** | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse | [optional] 

## Example

```python
from openapi_client.models.linux_node_config import LinuxNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxNodeConfig from a JSON string
linux_node_config_instance = LinuxNodeConfig.from_json(json)
# print the JSON string representation of the object
print(LinuxNodeConfig.to_json())

# convert the object into a dict
linux_node_config_dict = linux_node_config_instance.to_dict()
# create an instance of LinuxNodeConfig from a dict
linux_node_config_from_dict = LinuxNodeConfig.from_dict(linux_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



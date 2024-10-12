# VmwareNetworkConfig

Specifies network config for the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_v2_config** | [**VmwareControlPlaneV2Config**](VmwareControlPlaneV2Config.md) |  | [optional] 
**dhcp_ip_config** | [**VmwareDhcpIpConfig**](VmwareDhcpIpConfig.md) |  | [optional] 
**host_config** | [**VmwareHostConfig**](VmwareHostConfig.md) |  | [optional] 
**pod_address_cidr_blocks** | **List[str]** | Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. | [optional] 
**service_address_cidr_blocks** | **List[str]** | Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. | [optional] 
**static_ip_config** | [**VmwareStaticIpConfig**](VmwareStaticIpConfig.md) |  | [optional] 
**vcenter_network** | **str** | vcenter_network specifies vCenter network name. Inherited from the admin cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_network_config import VmwareNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareNetworkConfig from a JSON string
vmware_network_config_instance = VmwareNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareNetworkConfig.to_json())

# convert the object into a dict
vmware_network_config_dict = vmware_network_config_instance.to_dict()
# create an instance of VmwareNetworkConfig from a dict
vmware_network_config_from_dict = VmwareNetworkConfig.from_dict(vmware_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



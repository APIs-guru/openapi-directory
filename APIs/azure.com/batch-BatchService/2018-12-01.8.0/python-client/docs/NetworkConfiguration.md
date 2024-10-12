# NetworkConfiguration

The network configuration for a pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_v_net_assignment_scope** | **str** |  | [optional] 
**endpoint_configuration** | [**PoolEndpointConfiguration**](PoolEndpointConfiguration.md) |  | [optional] 
**subnet_id** | **str** | This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn&#39;t have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. For pools created with virtualMachineConfiguration only ARM virtual networks (&#39;Microsoft.Network/virtualNetworks&#39;) are supported, but for pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. For more details, see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration | [optional] 

## Example

```python
from openapi_client.models.network_configuration import NetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfiguration from a JSON string
network_configuration_instance = NetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(NetworkConfiguration.to_json())

# convert the object into a dict
network_configuration_dict = network_configuration_instance.to_dict()
# create an instance of NetworkConfiguration from a dict
network_configuration_from_dict = NetworkConfiguration.from_dict(network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



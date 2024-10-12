# NetworkConfiguration

The network configuration for a pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_configuration** | [**PoolEndpointConfiguration**](PoolEndpointConfiguration.md) |  | [optional] 
**public_ips** | **List[str]** | The number of IPs specified here limits the maximum size of the Pool - 50 dedicated nodes or 20 low-priority nodes can be allocated for each public IP. For example, a pool needing 150 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}. | [optional] 
**subnet_id** | **str** | The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn&#39;t have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The &#39;MicrosoftAzureBatch&#39; service principal must have the &#39;Classic Virtual Machine Contributor&#39; Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration | [optional] 

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



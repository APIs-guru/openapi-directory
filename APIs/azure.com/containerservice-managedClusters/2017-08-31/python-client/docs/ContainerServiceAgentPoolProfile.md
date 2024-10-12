# ContainerServiceAgentPoolProfile

Profile for the container service agent pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.  | [optional] [default to 1]
**dns_prefix** | **str** | DNS prefix to be used to create the FQDN for the agent pool. | [optional] 
**fqdn** | **str** | FQDN for the agent pool. | [optional] [readonly] 
**name** | **str** | Unique name of the agent pool profile in the context of the subscription and resource group. | 
**os_disk_size_gb** | **int** | OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified. | [optional] 
**os_type** | [**OSType**](OSType.md) |  | [optional] [default to OSType.LINUX]
**ports** | **List[int]** | Ports number array used to expose on this agent pool. The default opened ports are different based on your choice of orchestrator. | [optional] 
**storage_profile** | [**ContainerServiceStorageProfile**](ContainerServiceStorageProfile.md) |  | [optional] 
**vm_size** | [**ContainerServiceVMSize**](ContainerServiceVMSize.md) |  | 
**vnet_subnet_id** | **str** | VNet SubnetID specifies the VNet&#39;s subnet identifier. | [optional] 

## Example

```python
from openapi_client.models.container_service_agent_pool_profile import ContainerServiceAgentPoolProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceAgentPoolProfile from a JSON string
container_service_agent_pool_profile_instance = ContainerServiceAgentPoolProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceAgentPoolProfile.to_json())

# convert the object into a dict
container_service_agent_pool_profile_dict = container_service_agent_pool_profile_instance.to_dict()
# create an instance of ContainerServiceAgentPoolProfile from a dict
container_service_agent_pool_profile_from_dict = ContainerServiceAgentPoolProfile.from_dict(container_service_agent_pool_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



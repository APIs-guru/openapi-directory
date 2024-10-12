# ManagedClusterAgentPoolProfileProperties

Properties for the container service agent pool profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_zones** | **List[str]** | (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType. | [optional] 
**count** | **int** | Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.  | [default to 1]
**enable_auto_scaling** | **bool** | Whether to enable auto-scaler | [optional] 
**max_count** | **int** | Maximum number of nodes for auto-scaling | [optional] 
**max_pods** | **int** | Maximum number of pods that can run on a node. | [optional] 
**min_count** | **int** | Minimum number of nodes for auto-scaling | [optional] 
**orchestrator_version** | **str** | Version of orchestrator specified when creating the managed cluster. | [optional] 
**os_disk_size_gb** | **int** | OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified. | [optional] 
**os_type** | [**OSType**](OSType.md) |  | [optional] [default to OSType.LINUX]
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 
**type** | [**AgentPoolType**](AgentPoolType.md) |  | [optional] 
**vm_size** | [**ContainerServiceVMSize**](ContainerServiceVMSize.md) |  | 
**vnet_subnet_id** | **str** | VNet SubnetID specifies the VNet&#39;s subnet identifier. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_agent_pool_profile_properties import ManagedClusterAgentPoolProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterAgentPoolProfileProperties from a JSON string
managed_cluster_agent_pool_profile_properties_instance = ManagedClusterAgentPoolProfileProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterAgentPoolProfileProperties.to_json())

# convert the object into a dict
managed_cluster_agent_pool_profile_properties_dict = managed_cluster_agent_pool_profile_properties_instance.to_dict()
# create an instance of ManagedClusterAgentPoolProfileProperties from a dict
managed_cluster_agent_pool_profile_properties_from_dict = ManagedClusterAgentPoolProfileProperties.from_dict(managed_cluster_agent_pool_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



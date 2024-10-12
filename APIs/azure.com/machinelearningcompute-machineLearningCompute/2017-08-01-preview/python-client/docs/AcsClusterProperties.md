# AcsClusterProperties

Information about the container service backing the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_count** | **int** | The number of agent nodes in the Container Service. This can be changed to scale the cluster. | [optional] 
**agent_vm_size** | **str** | The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created. This list is non exhaustive; refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for the possible VM sizes. | [optional] [default to 'D3_v2']
**cluster_fqdn** | **str** | The FQDN of the cluster.  | [optional] [readonly] 
**master_count** | **int** | The number of master nodes in the container service. | [optional] 
**orchestrator_properties** | [**KubernetesClusterProperties**](KubernetesClusterProperties.md) |  | [optional] 
**orchestrator_type** | **str** | Type of orchestrator. It cannot be changed once the cluster is created. | 
**system_services** | [**List[SystemService]**](SystemService.md) | The system services deployed to the cluster | [optional] 

## Example

```python
from openapi_client.models.acs_cluster_properties import AcsClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AcsClusterProperties from a JSON string
acs_cluster_properties_instance = AcsClusterProperties.from_json(json)
# print the JSON string representation of the object
print(AcsClusterProperties.to_json())

# convert the object into a dict
acs_cluster_properties_dict = acs_cluster_properties_instance.to_dict()
# create an instance of AcsClusterProperties from a dict
acs_cluster_properties_from_dict = AcsClusterProperties.from_dict(acs_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



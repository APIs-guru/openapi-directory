# ClusterProperties

Cluster properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_state** | **str** | Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster. | [optional] [readonly] 
**allocation_state_transition_time** | **datetime** | The time at which the cluster entered its current allocation state. | [optional] [readonly] 
**creation_time** | **datetime** | The time when the cluster was created. | [optional] [readonly] 
**current_node_count** | **int** | The number of compute nodes currently assigned to the cluster. | [optional] [readonly] 
**errors** | [**List[BatchAIError]**](BatchAIError.md) | Collection of errors encountered by various compute nodes during node setup. | [optional] [readonly] 
**node_setup** | [**NodeSetup**](NodeSetup.md) |  | [optional] 
**node_state_counts** | [**NodeStateCounts**](NodeStateCounts.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted. | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** | Time when the provisioning state was changed. | [optional] [readonly] 
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**user_account_settings** | [**UserAccountSettings**](UserAccountSettings.md) |  | [optional] 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 
**vm_priority** | **str** | VM priority of cluster nodes. | [optional] [default to 'dedicated']
**vm_size** | **str** | The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. | [optional] 

## Example

```python
from openapi_client.models.cluster_properties import ClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterProperties from a JSON string
cluster_properties_instance = ClusterProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterProperties.to_json())

# convert the object into a dict
cluster_properties_dict = cluster_properties_instance.to_dict()
# create an instance of ClusterProperties from a dict
cluster_properties_from_dict = ClusterProperties.from_dict(cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



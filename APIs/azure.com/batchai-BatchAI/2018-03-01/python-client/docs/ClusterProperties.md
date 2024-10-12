# ClusterProperties

Job specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_state** | **str** | Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster. | [optional] [readonly] 
**allocation_state_transition_time** | **datetime** |  | [optional] [readonly] 
**creation_time** | **datetime** |  | [optional] [readonly] 
**current_node_count** | **int** |  | [optional] [readonly] 
**errors** | [**List[BatchAIError]**](BatchAIError.md) | This element contains all the errors encountered by various compute nodes during node setup. | [optional] 
**node_setup** | [**NodeSetup**](NodeSetup.md) |  | [optional] 
**node_state_counts** | [**NodeStateCounts**](NodeStateCounts.md) |  | [optional] 
**provisioning_state** | **str** | Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted. | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** |  | [optional] [readonly] 
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**user_account_settings** | [**UserAccountSettings**](UserAccountSettings.md) |  | [optional] 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 
**vm_priority** | **str** | The default value is dedicated. The node can get preempted while the task is running if lowpriority is chosen. This is best suited if the workload is checkpointing and can be restarted. | [optional] [default to 'dedicated']
**vm_size** | **str** | All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). | [optional] 

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



# ComputeNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_id** | **str** | Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere. | [optional] 
**allocation_time** | **datetime** | This is the time when the node was initially allocated and doesn&#39;t change once set. It is not updated when the node is service healed or preempted. | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**endpoint_configuration** | [**ComputeNodeEndpointConfiguration**](ComputeNodeEndpointConfiguration.md) |  | [optional] 
**errors** | [**List[ComputeNodeError]**](ComputeNodeError.md) |  | [optional] 
**id** | **str** | Every node that is added to a pool is assigned a unique ID. Whenever a node is removed from a pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new nodes. | [optional] 
**ip_address** | **str** | Every node that is added to a pool is assigned a unique IP address. Whenever a node is removed from a pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new nodes. | [optional] 
**is_dedicated** | **bool** |  | [optional] 
**last_boot_time** | **datetime** | This property may not be present if the node state is unusable. | [optional] 
**node_agent_info** | [**NodeAgentInformation**](NodeAgentInformation.md) |  | [optional] 
**recent_tasks** | [**List[TaskInformation]**](TaskInformation.md) | This property is present only if at least one task has run on this node since it was assigned to the pool. | [optional] 
**running_tasks_count** | **int** |  | [optional] 
**scheduling_state** | **str** |  | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 
**start_task_info** | [**StartTaskInformation**](StartTaskInformation.md) |  | [optional] 
**state** | **str** | The low-priority node has been preempted. Tasks which were running on the node when it was preempted will be rescheduled when another node becomes available. | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**total_tasks_run** | **int** |  | [optional] 
**total_tasks_succeeded** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**vm_size** | **str** | For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). | [optional] 

## Example

```python
from openapi_client.models.compute_node import ComputeNode

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNode from a JSON string
compute_node_instance = ComputeNode.from_json(json)
# print the JSON string representation of the object
print(ComputeNode.to_json())

# convert the object into a dict
compute_node_dict = compute_node_instance.to_dict()
# create an instance of ComputeNode from a dict
compute_node_from_dict = ComputeNode.from_dict(compute_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



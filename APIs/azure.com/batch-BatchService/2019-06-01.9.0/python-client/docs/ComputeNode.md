# ComputeNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_id** | **str** | Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. | [optional] 
**allocation_time** | **datetime** | This is the time when the Compute Node was initially allocated and doesn&#39;t change once set. It is not updated when the Compute Node is service healed or preempted. | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. | [optional] 
**endpoint_configuration** | [**ComputeNodeEndpointConfiguration**](ComputeNodeEndpointConfiguration.md) |  | [optional] 
**errors** | [**List[ComputeNodeError]**](ComputeNodeError.md) |  | [optional] 
**id** | **str** | Every Compute Node that is added to a Pool is assigned a unique ID. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new Compute Nodes. | [optional] 
**ip_address** | **str** | Every Compute Node that is added to a Pool is assigned a unique IP address. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new Compute Nodes. | [optional] 
**is_dedicated** | **bool** |  | [optional] 
**last_boot_time** | **datetime** | This property may not be present if the Compute Node state is unusable. | [optional] 
**node_agent_info** | [**NodeAgentInformation**](NodeAgentInformation.md) |  | [optional] 
**recent_tasks** | [**List[TaskInformation]**](TaskInformation.md) | This property is present only if at least one Task has run on this Compute Node since it was assigned to the Pool. | [optional] 
**running_tasks_count** | **int** |  | [optional] 
**scheduling_state** | **str** |  | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 
**start_task_info** | [**StartTaskInformation**](StartTaskInformation.md) |  | [optional] 
**state** | **str** | The low-priority Compute Node has been preempted. Tasks which were running on the Compute Node when it was preempted will be rescheduled when another Compute Node becomes available. | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**total_tasks_run** | **int** |  | [optional] 
**total_tasks_succeeded** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**vm_size** | **str** | For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). | [optional] 

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



# CloudPool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_state** | **str** |  | [optional] 
**allocation_state_transition_time** | **datetime** |  | [optional] 
**application_licenses** | **List[str]** | The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. | [optional] 
**auto_scale_evaluation_interval** | **str** | This property is set only if the pool automatically scales, i.e. enableAutoScale is true. | [optional] 
**auto_scale_formula** | **str** | This property is set only if the pool automatically scales, i.e. enableAutoScale is true. | [optional] 
**auto_scale_run** | [**AutoScaleRun**](AutoScaleRun.md) |  | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**cloud_service_configuration** | [**CloudServiceConfiguration**](CloudServiceConfiguration.md) |  | [optional] 
**creation_time** | **datetime** |  | [optional] 
**current_dedicated_nodes** | **int** |  | [optional] 
**current_low_priority_nodes** | **int** | Low-priority compute nodes which have been preempted are included in this count. | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**e_tag** | **str** | This is an opaque string. You can use it to detect whether the pool has changed between requests. In particular, you can be pass the ETag when updating a pool to specify that your changes should take effect only if nobody else has modified the pool in the meantime. | [optional] 
**enable_auto_scale** | **bool** | If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false. | [optional] 
**enable_inter_node_communication** | **bool** | This imposes restrictions on which nodes can be assigned to the pool. Specifying this value can reduce the chance of the requested number of nodes to be allocated in the pool. | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). | [optional] 
**last_modified** | **datetime** | This is the last time at which the pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a compute node changing state. | [optional] 
**max_tasks_per_node** | **int** | The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) |  | [optional] 
**network_configuration** | [**NetworkConfiguration**](NetworkConfiguration.md) |  | [optional] 
**resize_errors** | [**List[ResizeError]**](ResizeError.md) | This property is set only if one or more errors occurred during the last pool resize, and only when the pool allocationState is Steady. | [optional] 
**resize_timeout** | **str** | This is the timeout for the most recent resize operation. (The initial sizing when the pool is created counts as a resize.) The default value is 15 minutes. | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 
**state** | **str** |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**stats** | [**PoolStatistics**](PoolStatistics.md) |  | [optional] 
**target_dedicated_nodes** | **int** |  | [optional] 
**target_low_priority_nodes** | **int** |  | [optional] 
**task_scheduling_policy** | [**TaskSchedulingPolicy**](TaskSchedulingPolicy.md) |  | [optional] 
**url** | **str** |  | [optional] 
**user_accounts** | [**List[UserAccount]**](UserAccount.md) |  | [optional] 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 
**vm_size** | **str** | For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). | [optional] 

## Example

```python
from openapi_client.models.cloud_pool import CloudPool

# TODO update the JSON string below
json = "{}"
# create an instance of CloudPool from a JSON string
cloud_pool_instance = CloudPool.from_json(json)
# print the JSON string representation of the object
print(CloudPool.to_json())

# convert the object into a dict
cloud_pool_dict = cloud_pool_instance.to_dict()
# create an instance of CloudPool from a dict
cloud_pool_from_dict = CloudPool.from_dict(cloud_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



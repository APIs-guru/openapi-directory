# PoolProperties

Pool properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_state** | **str** | Values are:   Steady - The pool is not resizing. There are no changes to the number of nodes in the pool in progress. A pool enters this state when it is created and when no operations are being performed on the pool to change the number of dedicated nodes.  Resizing - The pool is resizing; that is, compute nodes are being added to or removed from the pool.  Stopping - The pool was resizing, but the user has requested that the resize be stopped, but the stop request has not yet been completed. | [optional] [readonly] 
**allocation_state_transition_time** | **datetime** |  | [optional] [readonly] 
**application_licenses** | **List[str]** | The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. | [optional] 
**application_packages** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Changes to application packages affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. | [optional] 
**auto_scale_run** | [**AutoScaleRun**](AutoScaleRun.md) |  | [optional] 
**certificates** | [**List[CertificateReference]**](CertificateReference.md) | For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**creation_time** | **datetime** |  | [optional] [readonly] 
**current_dedicated_nodes** | **int** |  | [optional] [readonly] 
**current_low_priority_nodes** | **int** |  | [optional] [readonly] 
**deployment_configuration** | [**DeploymentConfiguration**](DeploymentConfiguration.md) |  | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**inter_node_communication** | **str** | This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to &#39;Disabled&#39;. | [optional] 
**last_modified** | **datetime** | This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state. | [optional] [readonly] 
**max_tasks_per_node** | **int** |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**network_configuration** | [**NetworkConfiguration**](NetworkConfiguration.md) |  | [optional] 
**provisioning_state** | **str** | Values are:   Succeeded - The pool is available to run tasks subject to the availability of compute nodes.  Deleting - The user has requested that the pool be deleted, but the delete operation has not yet completed. | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** |  | [optional] [readonly] 
**resize_operation_status** | [**ResizeOperationStatus**](ResizeOperationStatus.md) |  | [optional] 
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 
**task_scheduling_policy** | [**TaskSchedulingPolicy**](TaskSchedulingPolicy.md) |  | [optional] 
**user_accounts** | [**List[UserAccount]**](UserAccount.md) |  | [optional] 
**vm_size** | **str** | For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). | [optional] 

## Example

```python
from openapi_client.models.pool_properties import PoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PoolProperties from a JSON string
pool_properties_instance = PoolProperties.from_json(json)
# print the JSON string representation of the object
print(PoolProperties.to_json())

# convert the object into a dict
pool_properties_dict = pool_properties_instance.to_dict()
# create an instance of PoolProperties from a dict
pool_properties_from_dict = PoolProperties.from_dict(pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



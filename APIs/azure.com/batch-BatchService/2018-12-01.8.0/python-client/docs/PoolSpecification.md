# PoolSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_licenses** | **List[str]** | The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. The permitted licenses available on the pool are &#39;maya&#39;, &#39;vray&#39;, &#39;3dsmax&#39;, &#39;arnold&#39;. An additional charge applies for each application license added to the pool. | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. | [optional] 
**auto_scale_evaluation_interval** | **str** | The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 
**auto_scale_formula** | **str** | This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**cloud_service_configuration** | [**CloudServiceConfiguration**](CloudServiceConfiguration.md) |  | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**enable_auto_scale** | **bool** | If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The pool automatically resizes according to the formula. The default value is false. | [optional] 
**enable_inter_node_communication** | **bool** | Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false. | [optional] 
**max_tasks_per_node** | **int** | The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**network_configuration** | [**NetworkConfiguration**](NetworkConfiguration.md) |  | [optional] 
**resize_timeout** | **str** | This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 
**target_dedicated_nodes** | **int** | This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. | [optional] 
**target_low_priority_nodes** | **int** | This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. | [optional] 
**task_scheduling_policy** | [**TaskSchedulingPolicy**](TaskSchedulingPolicy.md) |  | [optional] 
**user_accounts** | [**List[UserAccount]**](UserAccount.md) |  | [optional] 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 
**vm_size** | **str** | For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). | 

## Example

```python
from openapi_client.models.pool_specification import PoolSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of PoolSpecification from a JSON string
pool_specification_instance = PoolSpecification.from_json(json)
# print the JSON string representation of the object
print(PoolSpecification.to_json())

# convert the object into a dict
pool_specification_dict = pool_specification_instance.to_dict()
# create an instance of PoolSpecification from a dict
pool_specification_from_dict = PoolSpecification.from_dict(pool_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



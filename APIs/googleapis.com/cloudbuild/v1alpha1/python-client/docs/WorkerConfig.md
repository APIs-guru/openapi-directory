# WorkerConfig

WorkerConfig defines the configuration to be used for a creating workers in the pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **str** | Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If &#x60;0&#x60; is specified, Cloud Build will use a standard disk size. &#x60;disk_size&#x60; is overridden if you specify a different disk size in &#x60;build_options&#x60;. In this case, a VM with a disk size specified in the &#x60;build_options&#x60; will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#buildoptions | [optional] 
**machine_type** | **str** | Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool. &#x60;machine_type&#x60; is overridden if you specify a different machine type in &#x60;build_options&#x60;. In this case, the VM specified in the &#x60;build_options&#x60; will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/speeding-up-builds#using_custom_virtual_machine_sizes | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**tag** | **str** | The tag applied to the worker, and the same tag used by the firewall rule. It is used to identify the Cloud Build workers among other VMs. The default value for tag is &#x60;worker&#x60;. | [optional] 

## Example

```python
from openapi_client.models.worker_config import WorkerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerConfig from a JSON string
worker_config_instance = WorkerConfig.from_json(json)
# print the JSON string representation of the object
print(WorkerConfig.to_json())

# convert the object into a dict
worker_config_dict = worker_config_instance.to_dict()
# create an instance of WorkerConfig from a dict
worker_config_from_dict = WorkerConfig.from_dict(worker_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



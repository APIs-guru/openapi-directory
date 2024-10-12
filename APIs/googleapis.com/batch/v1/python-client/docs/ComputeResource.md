# ComputeResource

Compute resource requirements. ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure both fields are compatible with each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk_mib** | **str** | Extra boot disk size in MiB for each task. | [optional] 
**cpu_milli** | **str** | The milliCPU count. &#x60;cpuMilli&#x60; defines the amount of CPU resources per task in milliCPU units. For example, &#x60;1000&#x60; corresponds to 1 vCPU per task. If undefined, the default value is &#x60;2000&#x60;. If you also define the VM&#39;s machine type using the &#x60;machineType&#x60; in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the &#x60;instanceTemplate&#x60; in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the &#x60;n2-standard-2&#x60; machine type, which has 2 vCPUs each, you are recommended to set &#x60;cpuMilli&#x60; no more than &#x60;2000&#x60;, or you are recommended to run two tasks on the same VM if you set &#x60;cpuMilli&#x60; to &#x60;1000&#x60; or less. | [optional] 
**memory_mib** | **str** | Memory in MiB. &#x60;memoryMib&#x60; defines the amount of memory per task in MiB units. If undefined, the default value is &#x60;2000&#x60;. If you also define the VM&#39;s machine type using the &#x60;machineType&#x60; in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the &#x60;instanceTemplate&#x60; in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the &#x60;n2-standard-2&#x60; machine type, which has 8 GiB each, you are recommended to set &#x60;memoryMib&#x60; to no more than &#x60;8192&#x60;, or you are recommended to run two tasks on the same VM if you set &#x60;memoryMib&#x60; to &#x60;4096&#x60; or less. | [optional] 

## Example

```python
from openapi_client.models.compute_resource import ComputeResource

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeResource from a JSON string
compute_resource_instance = ComputeResource.from_json(json)
# print the JSON string representation of the object
print(ComputeResource.to_json())

# convert the object into a dict
compute_resource_dict = compute_resource_instance.to_dict()
# create an instance of ComputeResource from a dict
compute_resource_from_dict = ComputeResource.from_dict(compute_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



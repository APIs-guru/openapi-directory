# KernelRootkit

Kernel mode rootkit signatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Rootkit name, when available. | [optional] 
**unexpected_code_modification** | **bool** | True if unexpected modifications of kernel code memory are present. | [optional] 
**unexpected_ftrace_handler** | **bool** | True if &#x60;ftrace&#x60; points are present with callbacks pointing to regions that are not in the expected kernel or module code range. | [optional] 
**unexpected_interrupt_handler** | **bool** | True if interrupt handlers that are are not in the expected kernel or module code regions are present. | [optional] 
**unexpected_kernel_code_pages** | **bool** | True if kernel code pages that are not in the expected kernel or module code regions are present. | [optional] 
**unexpected_kprobe_handler** | **bool** | True if &#x60;kprobe&#x60; points are present with callbacks pointing to regions that are not in the expected kernel or module code range. | [optional] 
**unexpected_processes_in_runqueue** | **bool** | True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. | [optional] 
**unexpected_read_only_data_modification** | **bool** | True if unexpected modifications of kernel read-only data memory are present. | [optional] 
**unexpected_system_call_handler** | **bool** | True if system call handlers that are are not in the expected kernel or module code regions are present. | [optional] 

## Example

```python
from openapi_client.models.kernel_rootkit import KernelRootkit

# TODO update the JSON string below
json = "{}"
# create an instance of KernelRootkit from a JSON string
kernel_rootkit_instance = KernelRootkit.from_json(json)
# print the JSON string representation of the object
print(KernelRootkit.to_json())

# convert the object into a dict
kernel_rootkit_dict = kernel_rootkit_instance.to_dict()
# create an instance of KernelRootkit from a dict
kernel_rootkit_from_dict = KernelRootkit.from_dict(kernel_rootkit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



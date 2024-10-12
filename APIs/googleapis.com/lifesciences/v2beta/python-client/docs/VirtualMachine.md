# VirtualMachine

Carries information about a Compute Engine VM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerators** | [**List[Accelerator]**](Accelerator.md) | The list of accelerators to attach to the VM. | [optional] 
**boot_disk_size_gb** | **int** | The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used. | [optional] 
**boot_image** | **str** | The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is &#x60;projects/cos-cloud/global/images/family/cos-stable&#x60;, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value &#x60;projects/cos-cloud/global/images/family/cos-beta&#x60;. | [optional] 
**cpu_platform** | **str** | The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as \&quot;Intel Skylake\&quot;). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. | [optional] 
**disks** | [**List[Disk]**](Disk.md) | The list of disks to create and attach to the VM. Specify either the &#x60;volumes[]&#x60; field or the &#x60;disks[]&#x60; field, but not both. | [optional] 
**docker_cache_images** | **List[str]** | The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. The root directory of the ext4 image must contain &#x60;image&#x60; and &#x60;overlay2&#x60; directories copied from the Docker directory of a VM where the desired Docker images have already been pulled. Any images pulled that are not cached will be stored on the first cache disk instead of the boot disk. Only a single image is supported. | [optional] 
**enable_stackdriver_monitoring** | **bool** | Whether Stackdriver monitoring should be enabled on the VM. | [optional] 
**labels** | **Dict[str, str]** | Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix &#39;google-&#39; are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation. | [optional] 
**machine_type** | **str** | Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as \&quot;n1-standard-1\&quot;) or a custom machine type (such as \&quot;custom-1-4096\&quot;, where \&quot;1\&quot; indicates the number of vCPUs and \&quot;4096\&quot; indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type. | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**nvidia_driver_version** | **str** | The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the &#x60;nvidia-drivers-us-public&#x60; bucket on Google Cloud Storage. | [optional] 
**preemptible** | **bool** | If true, allocate a preemptible VM. | [optional] 
**reservation** | **str** | If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don&#39;t match the reservation. | [optional] 
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | The list of disks and other storage to create or attach to the VM. Specify either the &#x60;volumes[]&#x60; field or the &#x60;disks[]&#x60; field, but not both. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine import VirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachine from a JSON string
virtual_machine_instance = VirtualMachine.from_json(json)
# print the JSON string representation of the object
print(VirtualMachine.to_json())

# convert the object into a dict
virtual_machine_dict = virtual_machine_instance.to_dict()
# create an instance of VirtualMachine from a dict
virtual_machine_from_dict = VirtualMachine.from_dict(virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



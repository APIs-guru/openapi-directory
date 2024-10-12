# LocalDisk

A Local attached disk resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_delete** | **bool** | Optional. Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). | [optional] [readonly] 
**boot** | **bool** | Optional. Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. | [optional] [readonly] 
**device_name** | **str** | Optional. Output only. Specifies a unique device name of your choice that is reflected into the &#x60;/dev/disk/by-id/google-*&#x60; tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. | [optional] [readonly] 
**guest_os_features** | [**List[RuntimeGuestOsFeature]**](RuntimeGuestOsFeature.md) | Output only. Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. | [optional] [readonly] 
**index** | **int** | Output only. A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. | [optional] [readonly] 
**initialize_params** | [**LocalDiskInitializeParams**](LocalDiskInitializeParams.md) |  | [optional] 
**interface** | **str** | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * &#x60;NVME&#x60; * &#x60;SCSI&#x60; | [optional] 
**kind** | **str** | Output only. Type of the resource. Always compute#attachedDisk for attached disks. | [optional] [readonly] 
**licenses** | **List[str]** | Output only. Any valid publicly visible licenses. | [optional] [readonly] 
**mode** | **str** | The mode in which to attach this disk, either &#x60;READ_WRITE&#x60; or &#x60;READ_ONLY&#x60;. If not specified, the default is to attach the disk in &#x60;READ_WRITE&#x60; mode. Valid values: * &#x60;READ_ONLY&#x60; * &#x60;READ_WRITE&#x60; | [optional] 
**source** | **str** | Specifies a valid partial or full URL to an existing Persistent Disk resource. | [optional] 
**type** | **str** | Specifies the type of the disk, either &#x60;SCRATCH&#x60; or &#x60;PERSISTENT&#x60;. If not specified, the default is &#x60;PERSISTENT&#x60;. Valid values: * &#x60;PERSISTENT&#x60; * &#x60;SCRATCH&#x60; | [optional] 

## Example

```python
from openapi_client.models.local_disk import LocalDisk

# TODO update the JSON string below
json = "{}"
# create an instance of LocalDisk from a JSON string
local_disk_instance = LocalDisk.from_json(json)
# print the JSON string representation of the object
print(LocalDisk.to_json())

# convert the object into a dict
local_disk_dict = local_disk_instance.to_dict()
# create an instance of LocalDisk from a dict
local_disk_from_dict = LocalDisk.from_dict(local_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



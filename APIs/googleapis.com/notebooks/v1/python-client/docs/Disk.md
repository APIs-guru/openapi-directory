# Disk

An instance-attached disk resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_delete** | **bool** | Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). | [optional] 
**boot** | **bool** | Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. | [optional] 
**device_name** | **str** | Indicates a unique device name of your choice that is reflected into the &#x60;/dev/disk/by-id/google-*&#x60; tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks. | [optional] 
**disk_size_gb** | **str** | Indicates the size of the disk in base-2 GB. | [optional] 
**guest_os_features** | [**List[GuestOsFeature]**](GuestOsFeature.md) | Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. | [optional] 
**index** | **str** | A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. | [optional] 
**interface** | **str** | Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * &#x60;NVME&#x60; * &#x60;SCSI&#x60; | [optional] 
**kind** | **str** | Type of the resource. Always compute#attachedDisk for attached disks. | [optional] 
**licenses** | **List[str]** | A list of publicly visible licenses. Reserved for Google&#39;s use. A License represents billing and aggregate usage data for public and marketplace images. | [optional] 
**mode** | **str** | The mode in which to attach this disk, either &#x60;READ_WRITE&#x60; or &#x60;READ_ONLY&#x60;. If not specified, the default is to attach the disk in &#x60;READ_WRITE&#x60; mode. Valid values: * &#x60;READ_ONLY&#x60; * &#x60;READ_WRITE&#x60; | [optional] 
**source** | **str** | Indicates a valid partial or full URL to an existing Persistent Disk resource. | [optional] 
**type** | **str** | Indicates the type of the disk, either &#x60;SCRATCH&#x60; or &#x60;PERSISTENT&#x60;. Valid values: * &#x60;PERSISTENT&#x60; * &#x60;SCRATCH&#x60; | [optional] 

## Example

```python
from openapi_client.models.disk import Disk

# TODO update the JSON string below
json = "{}"
# create an instance of Disk from a JSON string
disk_instance = Disk.from_json(json)
# print the JSON string representation of the object
print(Disk.to_json())

# convert the object into a dict
disk_dict = disk_instance.to_dict()
# create an instance of Disk from a dict
disk_from_dict = Disk.from_dict(disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



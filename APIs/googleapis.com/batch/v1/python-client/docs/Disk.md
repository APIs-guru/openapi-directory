# Disk

A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_interface** | **str** | Local SSDs are available through both \&quot;SCSI\&quot; and \&quot;NVMe\&quot; interfaces. If not indicated, \&quot;NVMe\&quot; will be the default one for local ssds. This field is ignored for persistent disks as the interface is chosen automatically. See https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface. | [optional] 
**image** | **str** | URL for a VM image to use as the data source for this disk. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * &#x60;batch-debian&#x60;: use Batch Debian images. * &#x60;batch-centos&#x60;: use Batch CentOS images. * &#x60;batch-cos&#x60;: use Batch Container-Optimized images. * &#x60;batch-hpc-centos&#x60;: use Batch HPC CentOS images. * &#x60;batch-hpc-rocky&#x60;: use Batch HPC Rocky Linux images. | [optional] 
**size_gb** | **str** | Disk size in GB. **Non-Boot Disk**: If the &#x60;type&#x60; specifies a persistent disk, this field is ignored if &#x60;data_source&#x60; is set as &#x60;image&#x60; or &#x60;snapshot&#x60;. If the &#x60;type&#x60; specifies a local SSD, this field should be a multiple of 375 GB, otherwise, the final size will be the next greater multiple of 375 GB. **Boot Disk**: Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the &#x60;boot_disk_mib&#x60; field in task spec&#39;s &#x60;compute_resource&#x60; are defined, Batch will only honor this field. Also, this field should be no smaller than the source disk&#39;s size when the &#x60;data_source&#x60; is set as &#x60;snapshot&#x60; or &#x60;image&#x60;. For example, if you set an image as the &#x60;data_source&#x60; field and the image&#39;s default disk size 30 GB, you can only use this field to make the disk larger or equal to 30 GB. | [optional] 
**snapshot** | **str** | Name of a snapshot used as the data source. Snapshot is not supported as boot disk now. | [optional] 
**type** | **str** | Disk type as shown in &#x60;gcloud compute disk-types list&#x60;. For example, local SSD uses type \&quot;local-ssd\&quot;. Persistent disks and boot disks use \&quot;pd-balanced\&quot;, \&quot;pd-extreme\&quot;, \&quot;pd-ssd\&quot; or \&quot;pd-standard\&quot;. | [optional] 

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



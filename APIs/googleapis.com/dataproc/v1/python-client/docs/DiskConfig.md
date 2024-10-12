# DiskConfig

Specifies the config of disk options for a group of VM instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk_size_gb** | **int** | Optional. Size in GB of the boot disk (default is 500GB). | [optional] 
**boot_disk_type** | **str** | Optional. Type of the boot disk (default is \&quot;pd-standard\&quot;). Valid values: \&quot;pd-balanced\&quot; (Persistent Disk Balanced Solid State Drive), \&quot;pd-ssd\&quot; (Persistent Disk Solid State Drive), or \&quot;pd-standard\&quot; (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types). | [optional] 
**local_ssd_interface** | **str** | Optional. Interface type of local SSDs (default is \&quot;scsi\&quot;). Valid values: \&quot;scsi\&quot; (Small Computer System Interface), \&quot;nvme\&quot; (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance). | [optional] 
**num_local_ssds** | **int** | Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected. | [optional] 

## Example

```python
from openapi_client.models.disk_config import DiskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DiskConfig from a JSON string
disk_config_instance = DiskConfig.from_json(json)
# print the JSON string representation of the object
print(DiskConfig.to_json())

# convert the object into a dict
disk_config_dict = disk_config_instance.to_dict()
# create an instance of DiskConfig from a dict
disk_config_from_dict = DiskConfig.from_dict(disk_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



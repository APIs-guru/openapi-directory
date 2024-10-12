# DiskProperties

Disk resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_data** | [**CreationData**](CreationData.md) |  | 
**disk_iops_read_write** | **int** | The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. | [optional] 
**disk_m_bps_read_write** | **int** | The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. | [optional] 
**disk_size_gb** | **int** | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk&#39;s size. | [optional] 
**disk_state** | **str** | The state of the disk. | [optional] [readonly] 
**encryption_settings_collection** | [**EncryptionSettingsCollection**](EncryptionSettingsCollection.md) |  | [optional] 
**hyper_v_generation** | **str** | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | [optional] 
**os_type** | **str** | The Operating System type. | [optional] 
**provisioning_state** | **str** | The disk provisioning state. | [optional] [readonly] 
**time_created** | **datetime** | The time when the disk was created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_properties import DiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskProperties from a JSON string
disk_properties_instance = DiskProperties.from_json(json)
# print the JSON string representation of the object
print(DiskProperties.to_json())

# convert the object into a dict
disk_properties_dict = disk_properties_instance.to_dict()
# create an instance of DiskProperties from a dict
disk_properties_from_dict = DiskProperties.from_dict(disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DiskProperties

Disk resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | the storage account type of the disk. | [optional] 
**creation_data** | [**CreationData**](CreationData.md) |  | 
**disk_size_gb** | **int** | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk&#39;s size. | [optional] 
**encryption_settings** | [**EncryptionSettings**](EncryptionSettings.md) |  | [optional] 
**os_type** | **str** | The Operating System type. | [optional] 
**owner_id** | **str** | A relative URI containing the VM id that has the disk attached. | [optional] [readonly] 
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



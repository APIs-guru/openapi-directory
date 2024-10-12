# DiskUpdateProperties

Disk resource update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | the storage account type of the disk. | [optional] 
**creation_data** | [**CreationData**](CreationData.md) |  | [optional] 
**disk_size_gb** | **int** | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk&#39;s size. | [optional] 
**encryption_settings** | [**EncryptionSettings**](EncryptionSettings.md) |  | [optional] 
**os_type** | **str** | the Operating System type. | [optional] 

## Example

```python
from openapi_client.models.disk_update_properties import DiskUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskUpdateProperties from a JSON string
disk_update_properties_instance = DiskUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(DiskUpdateProperties.to_json())

# convert the object into a dict
disk_update_properties_dict = disk_update_properties_instance.to_dict()
# create an instance of DiskUpdateProperties from a dict
disk_update_properties_from_dict = DiskUpdateProperties.from_dict(disk_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DataDiskStorageTypeInfo

Storage information about the data disks present in the custom image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **str** | Disk Lun | [optional] 
**storage_type** | **str** | Disk Storage Type | [optional] 

## Example

```python
from openapi_client.models.data_disk_storage_type_info import DataDiskStorageTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataDiskStorageTypeInfo from a JSON string
data_disk_storage_type_info_instance = DataDiskStorageTypeInfo.from_json(json)
# print the JSON string representation of the object
print(DataDiskStorageTypeInfo.to_json())

# convert the object into a dict
data_disk_storage_type_info_dict = data_disk_storage_type_info_instance.to_dict()
# create an instance of DataDiskStorageTypeInfo from a dict
data_disk_storage_type_info_from_dict = DataDiskStorageTypeInfo.from_dict(data_disk_storage_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



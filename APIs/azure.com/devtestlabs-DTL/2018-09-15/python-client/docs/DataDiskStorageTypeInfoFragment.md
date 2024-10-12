# DataDiskStorageTypeInfoFragment

Storage information about the data disks present in the custom image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **str** | Disk Lun | [optional] 
**storage_type** | **str** | Disk Storage Type | [optional] 

## Example

```python
from openapi_client.models.data_disk_storage_type_info_fragment import DataDiskStorageTypeInfoFragment

# TODO update the JSON string below
json = "{}"
# create an instance of DataDiskStorageTypeInfoFragment from a JSON string
data_disk_storage_type_info_fragment_instance = DataDiskStorageTypeInfoFragment.from_json(json)
# print the JSON string representation of the object
print(DataDiskStorageTypeInfoFragment.to_json())

# convert the object into a dict
data_disk_storage_type_info_fragment_dict = data_disk_storage_type_info_fragment_instance.to_dict()
# create an instance of DataDiskStorageTypeInfoFragment from a dict
data_disk_storage_type_info_fragment_from_dict = DataDiskStorageTypeInfoFragment.from_dict(data_disk_storage_type_info_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



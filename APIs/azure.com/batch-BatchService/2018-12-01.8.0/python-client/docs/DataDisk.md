# DataDisk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**CachingType**](CachingType.md) |  | [optional] 
**disk_size_gb** | **int** |  | 
**lun** | **int** | The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. | 
**storage_account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_disk import DataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisk from a JSON string
data_disk_instance = DataDisk.from_json(json)
# print the JSON string representation of the object
print(DataDisk.to_json())

# convert the object into a dict
data_disk_dict = data_disk_instance.to_dict()
# create an instance of DataDisk from a dict
data_disk_from_dict = DataDisk.from_dict(data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



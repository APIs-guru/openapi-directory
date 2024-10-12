# DataDisks

Data disks settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching_type** | **str** | Caching type for the disks. Available values are none (default), readonly, readwrite. Caching type can be set only for VM sizes supporting premium storage. | [optional] [default to 'none']
**disk_count** | **int** | Number of data disks attached to the File Server. If multiple disks attached, they will be configured in RAID level 0. | 
**disk_size_in_gb** | **int** | Disk size in GB for the blank data disks. | 
**storage_account_type** | **str** | Type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS. Premium storage account type can only be used with VM sizes supporting premium storage. | 

## Example

```python
from openapi_client.models.data_disks import DataDisks

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisks from a JSON string
data_disks_instance = DataDisks.from_json(json)
# print the JSON string representation of the object
print(DataDisks.to_json())

# convert the object into a dict
data_disks_dict = data_disks_instance.to_dict()
# create an instance of DataDisks from a dict
data_disks_from_dict = DataDisks.from_dict(data_disks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



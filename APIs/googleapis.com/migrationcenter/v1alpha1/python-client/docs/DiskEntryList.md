# DiskEntryList

VM disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[DiskEntry]**](DiskEntry.md) | Disk entries. | [optional] 

## Example

```python
from openapi_client.models.disk_entry_list import DiskEntryList

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEntryList from a JSON string
disk_entry_list_instance = DiskEntryList.from_json(json)
# print the JSON string representation of the object
print(DiskEntryList.to_json())

# convert the object into a dict
disk_entry_list_dict = disk_entry_list_instance.to_dict()
# create an instance of DiskEntryList from a dict
disk_entry_list_from_dict = DiskEntryList.from_dict(disk_entry_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



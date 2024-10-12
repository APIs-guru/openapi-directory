# DiskList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Disk]**](Disk.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.disk_list import DiskList

# TODO update the JSON string below
json = "{}"
# create an instance of DiskList from a JSON string
disk_list_instance = DiskList.from_json(json)
# print the JSON string representation of the object
print(DiskList.to_json())

# convert the object into a dict
disk_list_dict = disk_list_instance.to_dict()
# create an instance of DiskList from a dict
disk_list_from_dict = DiskList.from_dict(disk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DataDisk

Information about datadisk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **int** | Logical unit number. | [optional] 
**uri** | **str** | Location of the disk template. | [optional] 

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



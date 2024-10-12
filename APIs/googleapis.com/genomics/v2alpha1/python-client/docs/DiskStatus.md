# DiskStatus

The status of a disk on a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_space_bytes** | **str** | Free disk space. | [optional] 
**total_space_bytes** | **str** | Total disk space. | [optional] 

## Example

```python
from openapi_client.models.disk_status import DiskStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DiskStatus from a JSON string
disk_status_instance = DiskStatus.from_json(json)
# print the JSON string representation of the object
print(DiskStatus.to_json())

# convert the object into a dict
disk_status_dict = disk_status_instance.to_dict()
# create an instance of DiskStatus from a dict
disk_status_from_dict = DiskStatus.from_dict(disk_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



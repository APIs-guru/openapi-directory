# VirtualDisk

Virtual disk model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controller_id** | **str** | Disk&#39;s Controller id | 
**independence_mode** | **str** | Disk&#39;s independence mode type | 
**total_size** | **int** | Disk&#39;s total size | 
**virtual_disk_id** | **str** | Disk&#39;s id | [optional] 
**virtual_disk_name** | **str** | Disk&#39;s display name | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_disk import VirtualDisk

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualDisk from a JSON string
virtual_disk_instance = VirtualDisk.from_json(json)
# print the JSON string representation of the object
print(VirtualDisk.to_json())

# convert the object into a dict
virtual_disk_dict = virtual_disk_instance.to_dict()
# create an instance of VirtualDisk from a dict
virtual_disk_from_dict = VirtualDisk.from_dict(virtual_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



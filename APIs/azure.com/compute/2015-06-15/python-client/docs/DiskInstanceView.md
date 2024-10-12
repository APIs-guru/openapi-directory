# DiskInstanceView

The instance view of the disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The disk name. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 

## Example

```python
from openapi_client.models.disk_instance_view import DiskInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of DiskInstanceView from a JSON string
disk_instance_view_instance = DiskInstanceView.from_json(json)
# print the JSON string representation of the object
print(DiskInstanceView.to_json())

# convert the object into a dict
disk_instance_view_dict = disk_instance_view_instance.to_dict()
# create an instance of DiskInstanceView from a dict
disk_instance_view_from_dict = DiskInstanceView.from_dict(disk_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



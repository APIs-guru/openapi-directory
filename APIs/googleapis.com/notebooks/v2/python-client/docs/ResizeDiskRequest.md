# ResizeDiskRequest

Request for resizing the notebook instance disks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk** | [**BootDisk**](BootDisk.md) |  | [optional] 
**data_disk** | [**DataDisk**](DataDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.resize_disk_request import ResizeDiskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeDiskRequest from a JSON string
resize_disk_request_instance = ResizeDiskRequest.from_json(json)
# print the JSON string representation of the object
print(ResizeDiskRequest.to_json())

# convert the object into a dict
resize_disk_request_dict = resize_disk_request_instance.to_dict()
# create an instance of ResizeDiskRequest from a dict
resize_disk_request_from_dict = ResizeDiskRequest.from_dict(resize_disk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



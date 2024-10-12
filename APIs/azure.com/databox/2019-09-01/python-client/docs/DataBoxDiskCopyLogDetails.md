# DataBoxDiskCopyLogDetails

Copy Log Details for a disk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_serial_number** | **str** | Disk Serial Number. | [optional] [readonly] 
**error_log_link** | **str** | Link for copy error logs. | [optional] [readonly] 
**verbose_log_link** | **str** | Link for copy verbose logs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_disk_copy_log_details import DataBoxDiskCopyLogDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxDiskCopyLogDetails from a JSON string
data_box_disk_copy_log_details_instance = DataBoxDiskCopyLogDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxDiskCopyLogDetails.to_json())

# convert the object into a dict
data_box_disk_copy_log_details_dict = data_box_disk_copy_log_details_instance.to_dict()
# create an instance of DataBoxDiskCopyLogDetails from a dict
data_box_disk_copy_log_details_from_dict = DataBoxDiskCopyLogDetails.from_dict(data_box_disk_copy_log_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



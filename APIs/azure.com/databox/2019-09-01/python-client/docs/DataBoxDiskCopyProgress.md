# DataBoxDiskCopyProgress

DataBox Disk Copy Progress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_copied** | **int** | Bytes copied during the copy of disk. | [optional] [readonly] 
**percent_complete** | **int** | Indicates the percentage completed for the copy of the disk. | [optional] [readonly] 
**serial_number** | **str** | The serial number of the disk | [optional] [readonly] 
**status** | **str** | The Status of the copy | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_disk_copy_progress import DataBoxDiskCopyProgress

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxDiskCopyProgress from a JSON string
data_box_disk_copy_progress_instance = DataBoxDiskCopyProgress.from_json(json)
# print the JSON string representation of the object
print(DataBoxDiskCopyProgress.to_json())

# convert the object into a dict
data_box_disk_copy_progress_dict = data_box_disk_copy_progress_instance.to_dict()
# create an instance of DataBoxDiskCopyProgress from a dict
data_box_disk_copy_progress_from_dict = DataBoxDiskCopyProgress.from_dict(data_box_disk_copy_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



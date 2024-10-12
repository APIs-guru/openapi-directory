# DataBoxDiskJobDetails

DataBox Disk Job Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_progress** | [**List[DataBoxDiskCopyProgress]**](DataBoxDiskCopyProgress.md) | Copy progress per disk. | [optional] [readonly] 
**disks_and_size_details** | **Dict[str, int]** | Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer. | [optional] [readonly] 
**passkey** | **str** | User entered passkey for DataBox Disk job. | [optional] 
**preferred_disks** | **Dict[str, int]** | User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int. | [optional] 

## Example

```python
from openapi_client.models.data_box_disk_job_details import DataBoxDiskJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxDiskJobDetails from a JSON string
data_box_disk_job_details_instance = DataBoxDiskJobDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxDiskJobDetails.to_json())

# convert the object into a dict
data_box_disk_job_details_dict = data_box_disk_job_details_instance.to_dict()
# create an instance of DataBoxDiskJobDetails from a dict
data_box_disk_job_details_from_dict = DataBoxDiskJobDetails.from_dict(data_box_disk_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



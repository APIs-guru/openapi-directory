# CopyProgress

Copy progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Id of the account where the data needs to be uploaded. | [optional] [readonly] 
**bytes_sent_to_cloud** | **int** | Amount of data uploaded by the job as of now. | [optional] [readonly] 
**files_processed** | **int** | Number of files processed by the job as of now. | [optional] [readonly] 
**storage_account_name** | **str** | Name of the storage account where the data needs to be uploaded. | [optional] [readonly] 
**total_bytes_to_process** | **int** | Total amount of data to be processed by the job. | [optional] [readonly] 
**total_files_to_process** | **int** | Total number of files to be processed by the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.copy_progress import CopyProgress

# TODO update the JSON string below
json = "{}"
# create an instance of CopyProgress from a JSON string
copy_progress_instance = CopyProgress.from_json(json)
# print the JSON string representation of the object
print(CopyProgress.to_json())

# convert the object into a dict
copy_progress_dict = copy_progress_instance.to_dict()
# create an instance of CopyProgress from a dict
copy_progress_from_dict = CopyProgress.from_dict(copy_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



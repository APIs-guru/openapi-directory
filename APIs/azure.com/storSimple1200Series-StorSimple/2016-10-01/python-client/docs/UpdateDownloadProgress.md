# UpdateDownloadProgress

details available during the download

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_phase** | **str** | The download phase. | [optional] 
**number_of_updates_downloaded** | **int** | Number of updates downloaded. | [optional] 
**number_of_updates_to_download** | **int** | Number of updates to download. | [optional] 
**percent_complete** | **int** | Percentage of completion. | [optional] 
**total_bytes_downloaded** | **float** | Total bytes downloaded. | [optional] 
**total_bytes_to_download** | **float** | Total bytes to download. | [optional] 

## Example

```python
from openapi_client.models.update_download_progress import UpdateDownloadProgress

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDownloadProgress from a JSON string
update_download_progress_instance = UpdateDownloadProgress.from_json(json)
# print the JSON string representation of the object
print(UpdateDownloadProgress.to_json())

# convert the object into a dict
update_download_progress_dict = update_download_progress_instance.to_dict()
# create an instance of UpdateDownloadProgress from a dict
update_download_progress_from_dict = UpdateDownloadProgress.from_dict(update_download_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



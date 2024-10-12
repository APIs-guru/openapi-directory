# JobProperties

The properties for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_stage** | **str** | Current stage of the update operation. | [optional] [readonly] 
**download_progress** | [**UpdateDownloadProgress**](UpdateDownloadProgress.md) |  | [optional] 
**error_manifest_file** | **str** | Local share/remote container relative path to the error manifest file of the refresh. | [optional] [readonly] 
**folder** | **str** | If only subfolders need to be refreshed, then the subfolder path inside the share. (The path is empty if there are no subfolders.) | [optional] 
**install_progress** | [**UpdateInstallProgress**](UpdateInstallProgress.md) |  | [optional] 
**job_type** | **str** | The type of the job. | [optional] [readonly] 
**share_id** | **str** | ARM ID of the share that was refreshed. | [optional] [readonly] 
**total_refresh_errors** | **int** | Total number of errors encountered during the refresh process. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SdfDownloadTask

Type for the response returned by [SdfDownloadTaskService.CreateSdfDownloadTask].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | A resource name to be used in media.download to Download the prepared files. Resource names have the format &#x60;download/sdfdownloadtasks/media/{media_id}&#x60;. &#x60;media_id&#x60; will be made available by the long running operation service once the task status is done. | [optional] 

## Example

```python
from openapi_client.models.sdf_download_task import SdfDownloadTask

# TODO update the JSON string below
json = "{}"
# create an instance of SdfDownloadTask from a JSON string
sdf_download_task_instance = SdfDownloadTask.from_json(json)
# print the JSON string representation of the object
print(SdfDownloadTask.to_json())

# convert the object into a dict
sdf_download_task_dict = sdf_download_task_instance.to_dict()
# create an instance of SdfDownloadTask from a dict
sdf_download_task_from_dict = SdfDownloadTask.from_dict(sdf_download_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



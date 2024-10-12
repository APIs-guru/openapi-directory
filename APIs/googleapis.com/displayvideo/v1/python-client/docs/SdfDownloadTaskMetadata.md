# SdfDownloadTaskMetadata

Type for the metadata returned by [SdfDownloadTaskService.CreateSdfDownloadTask].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the operation was created. | [optional] 
**end_time** | **str** | The time when execution was completed. | [optional] 
**version** | **str** | The SDF version used to execute this download task. | [optional] 

## Example

```python
from openapi_client.models.sdf_download_task_metadata import SdfDownloadTaskMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SdfDownloadTaskMetadata from a JSON string
sdf_download_task_metadata_instance = SdfDownloadTaskMetadata.from_json(json)
# print the JSON string representation of the object
print(SdfDownloadTaskMetadata.to_json())

# convert the object into a dict
sdf_download_task_metadata_dict = sdf_download_task_metadata_instance.to_dict()
# create an instance of SdfDownloadTaskMetadata from a dict
sdf_download_task_metadata_from_dict = SdfDownloadTaskMetadata.from_dict(sdf_download_task_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GlobalResourcesSharedModelsFileDownload

A language used for string translations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crc** | **str** | The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file. | 
**content_type** | **str** | The type of file; sent as the content-type header. | 
**description** | **str** | The description of the file. | 
**id** | **str** | The Id of the file. | [optional] 
**is_public** | **bool** | Indicates whether this file is available to the public for download. | 
**name** | **str** | The name of the file when downloaded. | 
**path** | **str** | The Path of the file. | 
**size** | **int** | The size of the file in bytes. Null until assigned by server when marked as &#39;Available&#39;. Read Only | [optional] 
**state** | **str** | Indicates the state of this file. Must be &#39;Created&#39; when created. | 

## Example

```python
from openapi_client.models.global_resources_shared_models_file_download import GlobalResourcesSharedModelsFileDownload

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsFileDownload from a JSON string
global_resources_shared_models_file_download_instance = GlobalResourcesSharedModelsFileDownload.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsFileDownload.to_json())

# convert the object into a dict
global_resources_shared_models_file_download_dict = global_resources_shared_models_file_download_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsFileDownload from a dict
global_resources_shared_models_file_download_from_dict = GlobalResourcesSharedModelsFileDownload.from_dict(global_resources_shared_models_file_download_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



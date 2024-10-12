# DownloadModelResponse

The response for downloading a model to device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_uri** | **str** | Output only. A download URI for the model/zip file. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated. | [optional] [readonly] 
**model_format** | **str** | Output only. The format of the model being downloaded. | [optional] [readonly] 
**size_bytes** | **str** | Output only. The size of the file(s), if this information is available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.download_model_response import DownloadModelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadModelResponse from a JSON string
download_model_response_instance = DownloadModelResponse.from_json(json)
# print the JSON string representation of the object
print(DownloadModelResponse.to_json())

# convert the object into a dict
download_model_response_dict = download_model_response_instance.to_dict()
# create an instance of DownloadModelResponse from a dict
download_model_response_from_dict = DownloadModelResponse.from_dict(download_model_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



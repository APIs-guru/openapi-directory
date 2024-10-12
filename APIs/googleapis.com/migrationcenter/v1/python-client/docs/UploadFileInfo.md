# UploadFileInfo

A resource that contains a URI to which a data file can be uploaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** | Output only. The headers that were used to sign the URI. | [optional] [readonly] 
**signed_uri** | **str** | Output only. Upload URI for the file. | [optional] [readonly] 
**uri_expiration_time** | **str** | Output only. Expiration time of the upload URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.upload_file_info import UploadFileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UploadFileInfo from a JSON string
upload_file_info_instance = UploadFileInfo.from_json(json)
# print the JSON string representation of the object
print(UploadFileInfo.to_json())

# convert the object into a dict
upload_file_info_dict = upload_file_info_instance.to_dict()
# create an instance of UploadFileInfo from a dict
upload_file_info_from_dict = UploadFileInfo.from_dict(upload_file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



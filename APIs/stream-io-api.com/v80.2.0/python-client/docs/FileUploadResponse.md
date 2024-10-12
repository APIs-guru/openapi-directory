# FileUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**file** | **str** | URL to the uploaded asset. Should be used to put to &#x60;asset_url&#x60; attachment field | [optional] 
**thumb_url** | **str** | URL of the file thumbnail for supported file formats. Should be put to &#x60;thumb_url&#x60; attachment field | [optional] 

## Example

```python
from openapi_client.models.file_upload_response import FileUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadResponse from a JSON string
file_upload_response_instance = FileUploadResponse.from_json(json)
# print the JSON string representation of the object
print(FileUploadResponse.to_json())

# convert the object into a dict
file_upload_response_dict = file_upload_response_instance.to_dict()
# create an instance of FileUploadResponse from a dict
file_upload_response_from_dict = FileUploadResponse.from_dict(file_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



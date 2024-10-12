# UploadGoModuleMediaResponse

The response to upload a Go module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Operation**](Operation.md) |  | [optional] 

## Example

```python
from openapi_client.models.upload_go_module_media_response import UploadGoModuleMediaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadGoModuleMediaResponse from a JSON string
upload_go_module_media_response_instance = UploadGoModuleMediaResponse.from_json(json)
# print the JSON string representation of the object
print(UploadGoModuleMediaResponse.to_json())

# convert the object into a dict
upload_go_module_media_response_dict = upload_go_module_media_response_instance.to_dict()
# create an instance of UploadGoModuleMediaResponse from a dict
upload_go_module_media_response_from_dict = UploadGoModuleMediaResponse.from_dict(upload_go_module_media_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ImagesUploadResponse

Response for uploading an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.images_upload_response import ImagesUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImagesUploadResponse from a JSON string
images_upload_response_instance = ImagesUploadResponse.from_json(json)
# print the JSON string representation of the object
print(ImagesUploadResponse.to_json())

# convert the object into a dict
images_upload_response_dict = images_upload_response_instance.to_dict()
# create an instance of ImagesUploadResponse from a dict
images_upload_response_from_dict = ImagesUploadResponse.from_dict(images_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



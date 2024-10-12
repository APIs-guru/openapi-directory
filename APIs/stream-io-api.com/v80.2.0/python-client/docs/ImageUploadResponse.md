# ImageUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**file** | **str** | URL to the uploaded asset. Should be used to put to &#x60;asset_url&#x60; attachment field | [optional] 
**thumb_url** | **str** | URL of the file thumbnail for supported file formats. Should be put to &#x60;thumb_url&#x60; attachment field | [optional] 
**upload_sizes** | [**List[ImageSize]**](ImageSize.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_upload_response import ImageUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImageUploadResponse from a JSON string
image_upload_response_instance = ImageUploadResponse.from_json(json)
# print the JSON string representation of the object
print(ImageUploadResponse.to_json())

# convert the object into a dict
image_upload_response_dict = image_upload_response_instance.to_dict()
# create an instance of ImageUploadResponse from a dict
image_upload_response_from_dict = ImageUploadResponse.from_dict(image_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



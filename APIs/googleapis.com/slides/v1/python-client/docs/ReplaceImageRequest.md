# ReplaceImageRequest

Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_object_id** | **str** | The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request. | [optional] 
**image_replace_method** | **str** | The replacement method. | [optional] 
**url** | **str** | The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can&#39;t surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. | [optional] 

## Example

```python
from openapi_client.models.replace_image_request import ReplaceImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceImageRequest from a JSON string
replace_image_request_instance = ReplaceImageRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceImageRequest.to_json())

# convert the object into a dict
replace_image_request_dict = replace_image_request_instance.to_dict()
# create an instance of ReplaceImageRequest from a dict
replace_image_request_from_dict = ReplaceImageRequest.from_dict(replace_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



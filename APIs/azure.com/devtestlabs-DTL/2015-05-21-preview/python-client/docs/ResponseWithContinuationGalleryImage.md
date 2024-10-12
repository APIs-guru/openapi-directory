# ResponseWithContinuationGalleryImage

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[GalleryImage]**](GalleryImage.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_gallery_image import ResponseWithContinuationGalleryImage

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationGalleryImage from a JSON string
response_with_continuation_gallery_image_instance = ResponseWithContinuationGalleryImage.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationGalleryImage.to_json())

# convert the object into a dict
response_with_continuation_gallery_image_dict = response_with_continuation_gallery_image_instance.to_dict()
# create an instance of ResponseWithContinuationGalleryImage from a dict
response_with_continuation_gallery_image_from_dict = ResponseWithContinuationGalleryImage.from_dict(response_with_continuation_gallery_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



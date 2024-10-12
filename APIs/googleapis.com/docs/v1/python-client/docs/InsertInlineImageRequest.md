# InsertInlineImageRequest

Inserts an InlineObject containing an image at the given location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**object_size** | [**Size**](Size.md) |  | [optional] 
**uri** | **str** | The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field. | [optional] 

## Example

```python
from openapi_client.models.insert_inline_image_request import InsertInlineImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertInlineImageRequest from a JSON string
insert_inline_image_request_instance = InsertInlineImageRequest.from_json(json)
# print the JSON string representation of the object
print(InsertInlineImageRequest.to_json())

# convert the object into a dict
insert_inline_image_request_dict = insert_inline_image_request_instance.to_dict()
# create an instance of InsertInlineImageRequest from a dict
insert_inline_image_request_from_dict = InsertInlineImageRequest.from_dict(insert_inline_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



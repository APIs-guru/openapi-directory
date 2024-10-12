# ResultImage

Image belonging to a custom search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_size** | **int** | The size of the image, in bytes. | [optional] 
**context_link** | **str** | A URL pointing to the webpage hosting the image. | [optional] 
**height** | **int** | The height of the image, in pixels. | [optional] 
**thumbnail_height** | **int** | The height of the thumbnail image, in pixels. | [optional] 
**thumbnail_link** | **str** | A URL to the thumbnail image. | [optional] 
**thumbnail_width** | **int** | The width of the thumbnail image, in pixels. | [optional] 
**width** | **int** | The width of the image, in pixels. | [optional] 

## Example

```python
from openapi_client.models.result_image import ResultImage

# TODO update the JSON string below
json = "{}"
# create an instance of ResultImage from a JSON string
result_image_instance = ResultImage.from_json(json)
# print the JSON string representation of the object
print(ResultImage.to_json())

# convert the object into a dict
result_image_dict = result_image_instance.to_dict()
# create an instance of ResultImage from a dict
result_image_from_dict = ResultImage.from_dict(result_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



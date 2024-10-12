# ImageError

A message resulting from reading an image file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The type of image error encountered. Optional for older image errors. | [optional] 
**file_path** | **str** | The file path in the import of the image that was rejected. | [optional] 

## Example

```python
from openapi_client.models.image_error import ImageError

# TODO update the JSON string below
json = "{}"
# create an instance of ImageError from a JSON string
image_error_instance = ImageError.from_json(json)
# print the JSON string representation of the object
print(ImageError.to_json())

# convert the object into a dict
image_error_dict = image_error_instance.to_dict()
# create an instance of ImageError from a dict
image_error_from_dict = ImageError.from_dict(image_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Rectangle

Describes the properties of a rectangular window applied to the input media before processing it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | [optional] 
**left** | **str** | The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | [optional] 
**top** | **str** | The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | [optional] 
**width** | **str** | The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | [optional] 

## Example

```python
from openapi_client.models.rectangle import Rectangle

# TODO update the JSON string below
json = "{}"
# create an instance of Rectangle from a JSON string
rectangle_instance = Rectangle.from_json(json)
# print the JSON string representation of the object
print(Rectangle.to_json())

# convert the object into a dict
rectangle_dict = rectangle_instance.to_dict()
# create an instance of Rectangle from a dict
rectangle_from_dict = Rectangle.from_dict(rectangle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



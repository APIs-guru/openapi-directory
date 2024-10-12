# RecognitionUnitInnerBoundingRectangle

The bounding rectangle of the recognition unit represented by the coordinates of the top left corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is not rotated. So for  rotated objects such as slanted handwriting, it will cover the entire object. The unit will be matched to the one specified in the original request (mm by default.) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **float** | The is the height of the bounding rectangle | [optional] 
**top_x** | **float** | This is the top left x coordinate | [optional] 
**top_y** | **float** | This is the top left y coordinate | [optional] 
**width** | **float** | This is width of the bounding rectangle | [optional] 

## Example

```python
from openapi_client.models.recognition_unit_inner_bounding_rectangle import RecognitionUnitInnerBoundingRectangle

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionUnitInnerBoundingRectangle from a JSON string
recognition_unit_inner_bounding_rectangle_instance = RecognitionUnitInnerBoundingRectangle.from_json(json)
# print the JSON string representation of the object
print(RecognitionUnitInnerBoundingRectangle.to_json())

# convert the object into a dict
recognition_unit_inner_bounding_rectangle_dict = recognition_unit_inner_bounding_rectangle_instance.to_dict()
# create an instance of RecognitionUnitInnerBoundingRectangle from a dict
recognition_unit_inner_bounding_rectangle_from_dict = RecognitionUnitInnerBoundingRectangle.from_dict(recognition_unit_inner_bounding_rectangle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RecognitionUnitInner

This identifies the recognized entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternates** | [**List[AlternatePatternInner]**](AlternatePatternInner.md) | The list of alternates for the core recognition result. In case of handwriting related recognition units, this list includes other words that are close possibilities to the results provided as &#39;recognizedText&#39;. | [optional] 
**bounding_rectangle** | [**RecognitionUnitInnerBoundingRectangle**](RecognitionUnitInnerBoundingRectangle.md) |  | [optional] 
**category** | [**CategoryPattern**](CategoryPattern.md) |  | 
**center** | [**PointDetailsPattern**](PointDetailsPattern.md) |  | [optional] 
**child_ids** | **List[int]** | An array of integers representing the identifier of each child of the current recognition unit. | [optional] 
**var_class** | [**ClassPattern**](ClassPattern.md) |  | 
**confidence** | **float** | A number between 0 and 1 which indicates the confidence level in the result. | [optional] 
**id** | **int** | The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units. | 
**parent_id** | **int** | The id of the parent node in the tree structure of the recognition results. parent &#x3D; 0 indicates that there is no dedicated parent node for this unit. | 
**points** | [**List[PointDetailsPattern]**](PointDetailsPattern.md) | Array of point objects that represent points that are relevant to the type of recognition unit. For example, for a leaf node of inkDrawing category that represents a triangle, points would include the x, y coordinates of the vertices of the recognized triangle. The points represent the coordinates used to create the perfectly drawn shape that is closest to the original input. They may not exactly match. | [optional] 
**recognized_object** | [**ShapePattern**](ShapePattern.md) |  | [optional] 
**recognized_text** | **str** | The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text. | [optional] 
**rotated_bounding_rectangle** | [**List[PointDetailsPattern]**](PointDetailsPattern.md) | This is the rotated bounding rectangle that covers the entire recognized object along the angle of rotation of the object. Note that this is NOT the same as rotating the boundingRectangle by the rotation angle. | [optional] 
**rotation_angle** | **float** | This is the angle at which the unit is rotated in degrees with respect to the positive X axis. | [optional] 
**stroke_ids** | **List[int]** | This is an array of integers representing the list of stroke Identifiers from the input request body that belong to this recognition unit. | 

## Example

```python
from openapi_client.models.recognition_unit_inner import RecognitionUnitInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionUnitInner from a JSON string
recognition_unit_inner_instance = RecognitionUnitInner.from_json(json)
# print the JSON string representation of the object
print(RecognitionUnitInner.to_json())

# convert the object into a dict
recognition_unit_inner_dict = recognition_unit_inner_instance.to_dict()
# create an instance of RecognitionUnitInner from a dict
recognition_unit_inner_from_dict = RecognitionUnitInner.from_dict(recognition_unit_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AlternatePatternInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**LeafCategoryPattern**](LeafCategoryPattern.md) |  | 
**confidence** | **float** | A number between 0 and 1 which indicates the confidence level in the result | [optional] 
**points** | [**List[PointDetailsPattern]**](PointDetailsPattern.md) | Array of point objects that represent points that are relevant to the type of recognition unit. For example, for leaf node of inkDrawing category that represents a triangle, points would include the x,y coordinates of the vertices of the recognized triangle. The points represent the coordinates of points used to create the perfectly drawn shape that is closest to the original input. They may not exactly match. | [optional] 
**recognized_string** | **str** | The recognized string from an inkWord or the name of a recognized shape in an inkDrawing object | 
**rotation_angle** | **float** | The angular orientation of an object relative to the horizontal axis | [optional] 

## Example

```python
from openapi_client.models.alternate_pattern_inner import AlternatePatternInner

# TODO update the JSON string below
json = "{}"
# create an instance of AlternatePatternInner from a JSON string
alternate_pattern_inner_instance = AlternatePatternInner.from_json(json)
# print the JSON string representation of the object
print(AlternatePatternInner.to_json())

# convert the object into a dict
alternate_pattern_inner_dict = alternate_pattern_inner_instance.to_dict()
# create an instance of AlternatePatternInner from a dict
alternate_pattern_inner_from_dict = AlternatePatternInner.from_dict(alternate_pattern_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



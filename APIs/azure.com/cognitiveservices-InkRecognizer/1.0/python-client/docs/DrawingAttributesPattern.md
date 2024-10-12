# DrawingAttributesPattern

The properties to use when rendering ink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**DrawingAttributesPatternColor**](DrawingAttributesPatternColor.md) |  | [optional] 
**fit_to_curve** | **bool** |  This indicates whether Bezier smoothing is used to render the stroke | [optional] 
**height** | **float** | The height of the stylus used to draw the stroke | [optional] 
**ignore_pressure** | **bool** |  This indicates whether the thickness of a rendered Stroke changes according the amount of pressure applied. | [optional] 
**raster_op** | **str** |  | [optional] 
**tip** | **str** | This specifies the tip to be used to draw a stroke | [optional] 
**width** | **float** | The width of the stylus used to draw the stroke | [optional] 

## Example

```python
from openapi_client.models.drawing_attributes_pattern import DrawingAttributesPattern

# TODO update the JSON string below
json = "{}"
# create an instance of DrawingAttributesPattern from a JSON string
drawing_attributes_pattern_instance = DrawingAttributesPattern.from_json(json)
# print the JSON string representation of the object
print(DrawingAttributesPattern.to_json())

# convert the object into a dict
drawing_attributes_pattern_dict = drawing_attributes_pattern_instance.to_dict()
# create an instance of DrawingAttributesPattern from a dict
drawing_attributes_pattern_from_dict = DrawingAttributesPattern.from_dict(drawing_attributes_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DrawingAttributesPatternColor

This shows the components of the color in rgba format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | **float** | The alpha component of the color | [optional] 
**b** | **float** | The blue component of the color | [optional] 
**g** | **float** | The green component of the color | [optional] 
**r** | **float** | The red component of the color | [optional] 

## Example

```python
from openapi_client.models.drawing_attributes_pattern_color import DrawingAttributesPatternColor

# TODO update the JSON string below
json = "{}"
# create an instance of DrawingAttributesPatternColor from a JSON string
drawing_attributes_pattern_color_instance = DrawingAttributesPatternColor.from_json(json)
# print the JSON string representation of the object
print(DrawingAttributesPatternColor.to_json())

# convert the object into a dict
drawing_attributes_pattern_color_dict = drawing_attributes_pattern_color_instance.to_dict()
# create an instance of DrawingAttributesPatternColor from a dict
drawing_attributes_pattern_color_from_dict = DrawingAttributesPatternColor.from_dict(drawing_attributes_pattern_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



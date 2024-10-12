# Autofit

The autofit properties of a Shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autofit_type** | **str** | The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values. | [optional] 
**font_scale** | **float** | The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only. | [optional] 
**line_spacing_reduction** | **float** | The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only. | [optional] 

## Example

```python
from openapi_client.models.autofit import Autofit

# TODO update the JSON string below
json = "{}"
# create an instance of Autofit from a JSON string
autofit_instance = Autofit.from_json(json)
# print the JSON string representation of the object
print(Autofit.to_json())

# convert the object into a dict
autofit_dict = autofit_instance.to_dict()
# create an instance of Autofit from a dict
autofit_from_dict = Autofit.from_dict(autofit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



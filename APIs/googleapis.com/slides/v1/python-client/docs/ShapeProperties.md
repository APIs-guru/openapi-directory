# ShapeProperties

The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autofit** | [**Autofit**](Autofit.md) |  | [optional] 
**content_alignment** | **str** | The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor. | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**outline** | [**Outline**](Outline.md) |  | [optional] 
**shadow** | [**Shadow**](Shadow.md) |  | [optional] 
**shape_background_fill** | [**ShapeBackgroundFill**](ShapeBackgroundFill.md) |  | [optional] 

## Example

```python
from openapi_client.models.shape_properties import ShapeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShapeProperties from a JSON string
shape_properties_instance = ShapeProperties.from_json(json)
# print the JSON string representation of the object
print(ShapeProperties.to_json())

# convert the object into a dict
shape_properties_dict = shape_properties_instance.to_dict()
# create an instance of ShapeProperties from a dict
shape_properties_from_dict = ShapeProperties.from_dict(shape_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



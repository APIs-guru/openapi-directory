# Shape

A PageElement kind representing a generic shape that does not have a more specific classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**placeholder** | [**Placeholder**](Placeholder.md) |  | [optional] 
**shape_properties** | [**ShapeProperties**](ShapeProperties.md) |  | [optional] 
**shape_type** | **str** | The type of the shape. | [optional] 
**text** | [**TextContent**](TextContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.shape import Shape

# TODO update the JSON string below
json = "{}"
# create an instance of Shape from a JSON string
shape_instance = Shape.from_json(json)
# print the JSON string representation of the object
print(Shape.to_json())

# convert the object into a dict
shape_dict = shape_instance.to_dict()
# create an instance of Shape from a dict
shape_from_dict = Shape.from_dict(shape_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EmbeddedObjectBorder

A border around an EmbeddedObject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**dash_style** | **str** | The dash style of the border. | [optional] 
**property_state** | **str** | The property state of the border property. | [optional] 
**width** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.embedded_object_border import EmbeddedObjectBorder

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedObjectBorder from a JSON string
embedded_object_border_instance = EmbeddedObjectBorder.from_json(json)
# print the JSON string representation of the object
print(EmbeddedObjectBorder.to_json())

# convert the object into a dict
embedded_object_border_dict = embedded_object_border_instance.to_dict()
# create an instance of EmbeddedObjectBorder from a dict
embedded_object_border_from_dict = EmbeddedObjectBorder.from_dict(embedded_object_border_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EmbeddedObject

An embedded object in the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the embedded object. The &#x60;title&#x60; and &#x60;description&#x60; are both combined to display alt text. | [optional] 
**embedded_drawing_properties** | **object** | The properties of an embedded drawing and used to differentiate the object type. An embedded drawing is one that&#39;s created and edited within a document. Note that extensive details are not supported. | [optional] 
**embedded_object_border** | [**EmbeddedObjectBorder**](EmbeddedObjectBorder.md) |  | [optional] 
**image_properties** | [**ImageProperties**](ImageProperties.md) |  | [optional] 
**linked_content_reference** | [**LinkedContentReference**](LinkedContentReference.md) |  | [optional] 
**margin_bottom** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_left** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_right** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_top** | [**Dimension**](Dimension.md) |  | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**title** | **str** | The title of the embedded object. The &#x60;title&#x60; and &#x60;description&#x60; are both combined to display alt text. | [optional] 

## Example

```python
from openapi_client.models.embedded_object import EmbeddedObject

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedObject from a JSON string
embedded_object_instance = EmbeddedObject.from_json(json)
# print the JSON string representation of the object
print(EmbeddedObject.to_json())

# convert the object into a dict
embedded_object_dict = embedded_object_instance.to_dict()
# create an instance of EmbeddedObject from a dict
embedded_object_from_dict = EmbeddedObject.from_dict(embedded_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



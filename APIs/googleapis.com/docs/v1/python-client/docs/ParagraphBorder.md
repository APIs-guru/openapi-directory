# ParagraphBorder

A border around a paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**dash_style** | **str** | The dash style of the border. | [optional] 
**padding** | [**Dimension**](Dimension.md) |  | [optional] 
**width** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.paragraph_border import ParagraphBorder

# TODO update the JSON string below
json = "{}"
# create an instance of ParagraphBorder from a JSON string
paragraph_border_instance = ParagraphBorder.from_json(json)
# print the JSON string representation of the object
print(ParagraphBorder.to_json())

# convert the object into a dict
paragraph_border_dict = paragraph_border_instance.to_dict()
# create an instance of ParagraphBorder from a dict
paragraph_border_from_dict = ParagraphBorder.from_dict(paragraph_border_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



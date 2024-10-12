# ParagraphStyle

Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** | The text alignment for this paragraph. | [optional] 
**direction** | **str** | The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited. | [optional] 
**indent_end** | [**Dimension**](Dimension.md) |  | [optional] 
**indent_first_line** | [**Dimension**](Dimension.md) |  | [optional] 
**indent_start** | [**Dimension**](Dimension.md) |  | [optional] 
**line_spacing** | **float** | The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent. | [optional] 
**space_above** | [**Dimension**](Dimension.md) |  | [optional] 
**space_below** | [**Dimension**](Dimension.md) |  | [optional] 
**spacing_mode** | **str** | The spacing mode for the paragraph. | [optional] 

## Example

```python
from openapi_client.models.paragraph_style import ParagraphStyle

# TODO update the JSON string below
json = "{}"
# create an instance of ParagraphStyle from a JSON string
paragraph_style_instance = ParagraphStyle.from_json(json)
# print the JSON string representation of the object
print(ParagraphStyle.to_json())

# convert the object into a dict
paragraph_style_dict = paragraph_style_instance.to_dict()
# create an instance of ParagraphStyle from a dict
paragraph_style_from_dict = ParagraphStyle.from_dict(paragraph_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



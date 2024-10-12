# ParagraphStyle

Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** | The text alignment for this paragraph. | [optional] 
**avoid_widow_and_orphan** | **bool** | Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent. | [optional] 
**border_between** | [**ParagraphBorder**](ParagraphBorder.md) |  | [optional] 
**border_bottom** | [**ParagraphBorder**](ParagraphBorder.md) |  | [optional] 
**border_left** | [**ParagraphBorder**](ParagraphBorder.md) |  | [optional] 
**border_right** | [**ParagraphBorder**](ParagraphBorder.md) |  | [optional] 
**border_top** | [**ParagraphBorder**](ParagraphBorder.md) |  | [optional] 
**direction** | **str** | The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited. | [optional] 
**heading_id** | **str** | The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only. | [optional] 
**indent_end** | [**Dimension**](Dimension.md) |  | [optional] 
**indent_first_line** | [**Dimension**](Dimension.md) |  | [optional] 
**indent_start** | [**Dimension**](Dimension.md) |  | [optional] 
**keep_lines_together** | **bool** | Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent. | [optional] 
**keep_with_next** | **bool** | Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent. | [optional] 
**line_spacing** | **float** | The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent. | [optional] 
**named_style_type** | **str** | The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated. | [optional] 
**page_break_before** | **bool** | Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent. Attempting to update page_break_before for paragraphs in unsupported regions, including Table, Header, Footer and Footnote, can result in an invalid document state that returns a 400 bad request error. | [optional] 
**shading** | [**Shading**](Shading.md) |  | [optional] 
**space_above** | [**Dimension**](Dimension.md) |  | [optional] 
**space_below** | [**Dimension**](Dimension.md) |  | [optional] 
**spacing_mode** | **str** | The spacing mode for the paragraph. | [optional] 
**tab_stops** | [**List[TabStop]**](TabStop.md) | A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only. | [optional] 

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



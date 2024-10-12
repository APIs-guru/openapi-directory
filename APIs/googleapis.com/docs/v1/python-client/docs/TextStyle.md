# TextStyle

Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**baseline_offset** | **str** | The text&#39;s vertical offset from its normal position. Text with &#x60;SUPERSCRIPT&#x60; or &#x60;SUBSCRIPT&#x60; baseline offsets is automatically rendered in a smaller font size, computed based on the &#x60;font_size&#x60; field. Changes in this field don&#39;t affect the &#x60;font_size&#x60;. | [optional] 
**bold** | **bool** | Whether or not the text is rendered as bold. | [optional] 
**font_size** | [**Dimension**](Dimension.md) |  | [optional] 
**foreground_color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**italic** | **bool** | Whether or not the text is italicized. | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**small_caps** | **bool** | Whether or not the text is in small capital letters. | [optional] 
**strikethrough** | **bool** | Whether or not the text is struck through. | [optional] 
**underline** | **bool** | Whether or not the text is underlined. | [optional] 
**weighted_font_family** | [**WeightedFontFamily**](WeightedFontFamily.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_style import TextStyle

# TODO update the JSON string below
json = "{}"
# create an instance of TextStyle from a JSON string
text_style_instance = TextStyle.from_json(json)
# print the JSON string representation of the object
print(TextStyle.to_json())

# convert the object into a dict
text_style_dict = text_style_instance.to_dict()
# create an instance of TextStyle from a dict
text_style_from_dict = TextStyle.from_dict(text_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



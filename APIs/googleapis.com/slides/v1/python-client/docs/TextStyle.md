# TextStyle

Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**baseline_offset** | **str** | The text&#39;s vertical offset from its normal position. Text with &#x60;SUPERSCRIPT&#x60; or &#x60;SUBSCRIPT&#x60; baseline offsets is automatically rendered in a smaller font size, computed based on the &#x60;font_size&#x60; field. The &#x60;font_size&#x60; itself is not affected by changes in this field. | [optional] 
**bold** | **bool** | Whether or not the text is rendered as bold. | [optional] 
**font_family** | **str** | The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in &#x60;Arial&#x60;. Some fonts can affect the weight of the text. If an update request specifies values for both &#x60;font_family&#x60; and &#x60;bold&#x60;, the explicitly-set &#x60;bold&#x60; value is used. | [optional] 
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



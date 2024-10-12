# NestingLevel

Contains properties describing the look and feel of a list bullet at a given level of nesting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet_alignment** | **str** | The alignment of the bullet within the space allotted for rendering the bullet. | [optional] 
**glyph_format** | **str** | The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and these placeholders are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow the pattern &#x60;%[nesting_level]&#x60;. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern &#x60;%[nesting_level]&#x60;. Note that the prefix and suffix are optional and can be arbitrary strings. For example, the glyph format &#x60;%0.&#x60; indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph format &#x60;%0.&#x60; at nesting level 0 will result in a list with rendered glyphs &#x60;A.&#x60; &#x60;B.&#x60; &#x60;C.&#x60; The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of &#x60;%0.&#x60; at nesting level 0 and a glyph format of &#x60;%0.%1.&#x60; at nesting level 1. Assuming both nesting levels have DECIMAL glyph types, this would result in a list with rendered glyphs &#x60;1.&#x60; &#x60;2.&#x60; &#x60; 2.1.&#x60; &#x60; 2.2.&#x60; &#x60;3.&#x60; For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph&#39;s order within the list. | [optional] 
**glyph_symbol** | **str** | A custom glyph symbol used by bullets when paragraphs at this level of nesting are unordered. The glyph symbol replaces placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode U+25cf code point and the glyph_format is &#x60;%0&#x60;, the rendered glyph would be the solid circle. | [optional] 
**glyph_type** | **str** | The type of glyph used by bullets when paragraphs at this level of nesting are ordered. The glyph type determines the type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the glyph_format is &#x60;%0.&#x60; and the glyph type is DECIMAL, then the rendered glyph would replace the placeholder &#x60;%0&#x60; in the glyph format with a number corresponding to list item&#39;s order within the list. | [optional] 
**indent_first_line** | [**Dimension**](Dimension.md) |  | [optional] 
**indent_start** | [**Dimension**](Dimension.md) |  | [optional] 
**start_number** | **int** | The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and Roman numeral lists. For values of both 0 and 1, lettered and Roman numeral lists will begin at &#x60;a&#x60; and &#x60;i&#x60; respectively. This value is ignored for nesting levels with unordered glyphs. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.nesting_level import NestingLevel

# TODO update the JSON string below
json = "{}"
# create an instance of NestingLevel from a JSON string
nesting_level_instance = NestingLevel.from_json(json)
# print the JSON string representation of the object
print(NestingLevel.to_json())

# convert the object into a dict
nesting_level_dict = nesting_level_instance.to_dict()
# create an instance of NestingLevel from a dict
nesting_level_from_dict = NestingLevel.from_dict(nesting_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



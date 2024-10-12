# TextFormat

The format of a run of text in a cell. Absent values indicate that the field isn't specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bold** | **bool** | True if the text is bold. | [optional] 
**font_family** | **str** | The font family. | [optional] 
**font_size** | **int** | The size of the font. | [optional] 
**foreground_color** | [**Color**](Color.md) |  | [optional] 
**foreground_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**italic** | **bool** | True if the text is italicized. | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**strikethrough** | **bool** | True if the text has a strikethrough. | [optional] 
**underline** | **bool** | True if the text is underlined. | [optional] 

## Example

```python
from openapi_client.models.text_format import TextFormat

# TODO update the JSON string below
json = "{}"
# create an instance of TextFormat from a JSON string
text_format_instance = TextFormat.from_json(json)
# print the JSON string representation of the object
print(TextFormat.to_json())

# convert the object into a dict
text_format_dict = text_format_instance.to_dict()
# create an instance of TextFormat from a dict
text_format_from_dict = TextFormat.from_dict(text_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



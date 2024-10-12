# TextStyle

Properties that determine how the title and content are styled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | The background color as a hex string. \&quot;#RRGGBB\&quot; or \&quot;#RGB\&quot; | [optional] 
**font_size** | **str** | Font sizes for both the title and content. The title will still be larger relative to the content. | [optional] 
**horizontal_alignment** | **str** | The horizontal alignment of both the title and content | [optional] 
**padding** | **str** | The amount of padding around the widget | [optional] 
**pointer_location** | **str** | The pointer location for this widget (also sometimes called a \&quot;tail\&quot;) | [optional] 
**text_color** | **str** | The text color as a hex string. \&quot;#RRGGBB\&quot; or \&quot;#RGB\&quot; | [optional] 
**vertical_alignment** | **str** | The vertical alignment of both the title and content | [optional] 

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



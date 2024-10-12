# WeightedFontFamily

Represents a font family and weight used to style a TextRun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**font_family** | **str** | The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in &#x60;Arial&#x60;. | [optional] 
**weight** | **int** | The rendered weight of the text. This field can have any value that is a multiple of &#x60;100&#x60; between &#x60;100&#x60; and &#x60;900&#x60;, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to &#x60;700&#x60; are considered bold, and weights less than &#x60;700&#x60;are not bold. The default value is &#x60;400&#x60; (\&quot;normal\&quot;). | [optional] 

## Example

```python
from openapi_client.models.weighted_font_family import WeightedFontFamily

# TODO update the JSON string below
json = "{}"
# create an instance of WeightedFontFamily from a JSON string
weighted_font_family_instance = WeightedFontFamily.from_json(json)
# print the JSON string representation of the object
print(WeightedFontFamily.to_json())

# convert the object into a dict
weighted_font_family_dict = weighted_font_family_instance.to_dict()
# create an instance of WeightedFontFamily from a dict
weighted_font_family_from_dict = WeightedFontFamily.from_dict(weighted_font_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



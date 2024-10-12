# WeightedFontFamily

Represents a font family and weight of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**font_family** | **str** | The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in &#x60;Arial&#x60;. | [optional] 
**weight** | **int** | The weight of the font. This field can have any value that&#39;s a multiple of &#x60;100&#x60; between &#x60;100&#x60; and &#x60;900&#x60;, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is &#x60;400&#x60; (\&quot;normal\&quot;). The font weight makes up just one component of the rendered font weight. A combination of the &#x60;weight&#x60; and the text style&#39;s resolved &#x60;bold&#x60; value determine the rendered weight, after accounting for inheritance: * If the text is bold and the weight is less than &#x60;400&#x60;, the rendered weight is 400. * If the text is bold and the weight is greater than or equal to &#x60;400&#x60; but is less than &#x60;700&#x60;, the rendered weight is &#x60;700&#x60;. * If the weight is greater than or equal to &#x60;700&#x60;, the rendered weight is equal to the weight. * If the text is not bold, the rendered weight is equal to the weight. | [optional] 

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



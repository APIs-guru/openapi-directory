# AdStyleFont

The font which is included in the style.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | The family of the font. | [optional] 
**size** | **str** | The size of the font. | [optional] 

## Example

```python
from openapi_client.models.ad_style_font import AdStyleFont

# TODO update the JSON string below
json = "{}"
# create an instance of AdStyleFont from a JSON string
ad_style_font_instance = AdStyleFont.from_json(json)
# print the JSON string representation of the object
print(AdStyleFont.to_json())

# convert the object into a dict
ad_style_font_dict = ad_style_font_instance.to_dict()
# create an instance of AdStyleFont from a dict
ad_style_font_from_dict = AdStyleFont.from_dict(ad_style_font_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



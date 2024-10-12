# Webfont

Metadata describing a family of fonts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axes** | [**List[Axis]**](Axis.md) | Axis for variable fonts. | [optional] 
**category** | **str** | The category of the font. | [optional] 
**family** | **str** | The name of the font. | [optional] 
**files** | **Dict[str, str]** | The font files (with all supported scripts) for each one of the available variants, as a key : value map. | [optional] 
**kind** | **str** | This kind represents a webfont object in the webfonts service. | [optional] 
**last_modified** | **str** | The date (format \&quot;yyyy-MM-dd\&quot;) the font was modified for the last time. | [optional] 
**menu** | **str** | Font URL for menu subset, a subset of the font that is enough to display the font name | [optional] 
**subsets** | **List[str]** | The scripts supported by the font. | [optional] 
**variants** | **List[str]** | The available variants for the font. | [optional] 
**version** | **str** | The font version. | [optional] 

## Example

```python
from openapi_client.models.webfont import Webfont

# TODO update the JSON string below
json = "{}"
# create an instance of Webfont from a JSON string
webfont_instance = Webfont.from_json(json)
# print the JSON string representation of the object
print(Webfont.to_json())

# convert the object into a dict
webfont_dict = webfont_instance.to_dict()
# create an instance of Webfont from a dict
webfont_from_dict = Webfont.from_dict(webfont_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdStyleColors

The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | **str** | The color of the ad background. | [optional] 
**border** | **str** | The color of the ad border. | [optional] 
**text** | **str** | The color of the ad text. | [optional] 
**title** | **str** | The color of the ad title. | [optional] 
**url** | **str** | The color of the ad url. | [optional] 

## Example

```python
from openapi_client.models.ad_style_colors import AdStyleColors

# TODO update the JSON string below
json = "{}"
# create an instance of AdStyleColors from a JSON string
ad_style_colors_instance = AdStyleColors.from_json(json)
# print the JSON string representation of the object
print(AdStyleColors.to_json())

# convert the object into a dict
ad_style_colors_dict = ad_style_colors_instance.to_dict()
# create an instance of AdStyleColors from a dict
ad_style_colors_from_dict = AdStyleColors.from_dict(ad_style_colors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



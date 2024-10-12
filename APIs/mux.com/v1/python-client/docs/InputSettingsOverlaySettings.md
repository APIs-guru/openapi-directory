# InputSettingsOverlaySettings

An object that describes how the image file referenced in URL should be placed over the video (i.e. watermarking). Ensure that the URL is active and persists the entire lifespan of the video object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | How tall the overlay should appear. Can be expressed as a percent (\&quot;10%\&quot;) or as a pixel value (\&quot;100px\&quot;). If both width and height are left blank the height will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If width is supplied with no height, the height will scale proportionally to the width. | [optional] 
**horizontal_align** | **str** | Where the horizontal positioning of the overlay/watermark should begin from. | [optional] 
**horizontal_margin** | **str** | The distance from the horizontal_align starting point and the image&#39;s closest edge. Can be expressed as a percent (\&quot;10%\&quot;) or as a pixel value (\&quot;100px\&quot;). Negative values will move the overlay offscreen. In the case of &#39;center&#39;, a positive value will shift the image towards the right and and a negative value will shift it towards the left. | [optional] 
**opacity** | **str** | How opaque the overlay should appear, expressed as a percent. (Default 100%) | [optional] 
**vertical_align** | **str** | Where the vertical positioning of the overlay/watermark should begin from. Defaults to &#x60;\&quot;top\&quot;&#x60; | [optional] 
**vertical_margin** | **str** | The distance from the vertical_align starting point and the image&#39;s closest edge. Can be expressed as a percent (\&quot;10%\&quot;) or as a pixel value (\&quot;100px\&quot;). Negative values will move the overlay offscreen. In the case of &#39;middle&#39;, a positive value will shift the overlay towards the bottom and and a negative value will shift it towards the top. | [optional] 
**width** | **str** | How wide the overlay should appear. Can be expressed as a percent (\&quot;10%\&quot;) or as a pixel value (\&quot;100px\&quot;). If both width and height are left blank the width will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If height is supplied with no width, the width will scale proportionally to the height. | [optional] 

## Example

```python
from openapi_client.models.input_settings_overlay_settings import InputSettingsOverlaySettings

# TODO update the JSON string below
json = "{}"
# create an instance of InputSettingsOverlaySettings from a JSON string
input_settings_overlay_settings_instance = InputSettingsOverlaySettings.from_json(json)
# print the JSON string representation of the object
print(InputSettingsOverlaySettings.to_json())

# convert the object into a dict
input_settings_overlay_settings_dict = input_settings_overlay_settings_instance.to_dict()
# create an instance of InputSettingsOverlaySettings from a dict
input_settings_overlay_settings_from_dict = InputSettingsOverlaySettings.from_dict(input_settings_overlay_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



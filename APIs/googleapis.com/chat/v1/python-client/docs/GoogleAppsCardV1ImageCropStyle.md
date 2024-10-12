# GoogleAppsCardV1ImageCropStyle

Represents the crop style applied to an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { \"type\": \"RECTANGLE_CUSTOM\", \"aspectRatio\": 16/9 } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **float** | The aspect ratio to use if the crop type is &#x60;RECTANGLE_CUSTOM&#x60;. For example, here&#39;s how to apply a 16:9 aspect ratio: &#x60;&#x60;&#x60; cropStyle { \&quot;type\&quot;: \&quot;RECTANGLE_CUSTOM\&quot;, \&quot;aspectRatio\&quot;: 16/9 } &#x60;&#x60;&#x60; | [optional] 
**type** | **str** | The crop type. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_image_crop_style import GoogleAppsCardV1ImageCropStyle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1ImageCropStyle from a JSON string
google_apps_card_v1_image_crop_style_instance = GoogleAppsCardV1ImageCropStyle.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1ImageCropStyle.to_json())

# convert the object into a dict
google_apps_card_v1_image_crop_style_dict = google_apps_card_v1_image_crop_style_instance.to_dict()
# create an instance of GoogleAppsCardV1ImageCropStyle from a dict
google_apps_card_v1_image_crop_style_from_dict = GoogleAppsCardV1ImageCropStyle.from_dict(google_apps_card_v1_image_crop_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



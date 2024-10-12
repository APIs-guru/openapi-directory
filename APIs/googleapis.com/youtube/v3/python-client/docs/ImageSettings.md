# ImageSettings

Branding properties for images associated with the channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_image_url** | [**LocalizedProperty**](LocalizedProperty.md) |  | [optional] 
**banner_external_url** | **str** | This is generated when a ChannelBanner.Insert request has succeeded for the given channel. | [optional] 
**banner_image_url** | **str** | Banner image. Desktop size (1060x175). | [optional] 
**banner_mobile_extra_hd_image_url** | **str** | Banner image. Mobile size high resolution (1440x395). | [optional] 
**banner_mobile_hd_image_url** | **str** | Banner image. Mobile size high resolution (1280x360). | [optional] 
**banner_mobile_image_url** | **str** | Banner image. Mobile size (640x175). | [optional] 
**banner_mobile_low_image_url** | **str** | Banner image. Mobile size low resolution (320x88). | [optional] 
**banner_mobile_medium_hd_image_url** | **str** | Banner image. Mobile size medium/high resolution (960x263). | [optional] 
**banner_tablet_extra_hd_image_url** | **str** | Banner image. Tablet size extra high resolution (2560x424). | [optional] 
**banner_tablet_hd_image_url** | **str** | Banner image. Tablet size high resolution (2276x377). | [optional] 
**banner_tablet_image_url** | **str** | Banner image. Tablet size (1707x283). | [optional] 
**banner_tablet_low_image_url** | **str** | Banner image. Tablet size low resolution (1138x188). | [optional] 
**banner_tv_high_image_url** | **str** | Banner image. TV size high resolution (1920x1080). | [optional] 
**banner_tv_image_url** | **str** | Banner image. TV size extra high resolution (2120x1192). | [optional] 
**banner_tv_low_image_url** | **str** | Banner image. TV size low resolution (854x480). | [optional] 
**banner_tv_medium_image_url** | **str** | Banner image. TV size medium resolution (1280x720). | [optional] 
**large_branded_banner_image_imap_script** | [**LocalizedProperty**](LocalizedProperty.md) |  | [optional] 
**large_branded_banner_image_url** | [**LocalizedProperty**](LocalizedProperty.md) |  | [optional] 
**small_branded_banner_image_imap_script** | [**LocalizedProperty**](LocalizedProperty.md) |  | [optional] 
**small_branded_banner_image_url** | [**LocalizedProperty**](LocalizedProperty.md) |  | [optional] 
**tracking_image_url** | **str** | The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages. | [optional] 
**watch_icon_image_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.image_settings import ImageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSettings from a JSON string
image_settings_instance = ImageSettings.from_json(json)
# print the JSON string representation of the object
print(ImageSettings.to_json())

# convert the object into a dict
image_settings_dict = image_settings_instance.to_dict()
# create an instance of ImageSettings from a dict
image_settings_from_dict = ImageSettings.from_dict(image_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



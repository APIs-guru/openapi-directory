# AboutDriveThemesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_image_link** | **str** | A link to this theme&#39;s background image. | [optional] 
**color_rgb** | **str** | The color of this theme as an RGB hex string. | [optional] 
**id** | **str** | The ID of the theme. | [optional] 

## Example

```python
from openapi_client.models.about_drive_themes_inner import AboutDriveThemesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutDriveThemesInner from a JSON string
about_drive_themes_inner_instance = AboutDriveThemesInner.from_json(json)
# print the JSON string representation of the object
print(AboutDriveThemesInner.to_json())

# convert the object into a dict
about_drive_themes_inner_dict = about_drive_themes_inner_instance.to_dict()
# create an instance of AboutDriveThemesInner from a dict
about_drive_themes_inner_from_dict = AboutDriveThemesInner.from_dict(about_drive_themes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



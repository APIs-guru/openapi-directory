# GoogleAppsDriveLabelsV2betaBadgeColors

The color derived from BadgeConfig and changed to the closest recommended supported color.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**foreground_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**solo_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_badge_colors import GoogleAppsDriveLabelsV2betaBadgeColors

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaBadgeColors from a JSON string
google_apps_drive_labels_v2beta_badge_colors_instance = GoogleAppsDriveLabelsV2betaBadgeColors.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaBadgeColors.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_badge_colors_dict = google_apps_drive_labels_v2beta_badge_colors_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaBadgeColors from a dict
google_apps_drive_labels_v2beta_badge_colors_from_dict = GoogleAppsDriveLabelsV2betaBadgeColors.from_dict(google_apps_drive_labels_v2beta_badge_colors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



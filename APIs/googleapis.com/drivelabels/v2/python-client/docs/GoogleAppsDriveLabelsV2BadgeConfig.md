# GoogleAppsDriveLabelsV2BadgeConfig

Badge status of the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**priority_override** | **str** | Override the default global priority of this badge. When set to 0, the default priority heuristic is used. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_badge_config import GoogleAppsDriveLabelsV2BadgeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2BadgeConfig from a JSON string
google_apps_drive_labels_v2_badge_config_instance = GoogleAppsDriveLabelsV2BadgeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2BadgeConfig.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_badge_config_dict = google_apps_drive_labels_v2_badge_config_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2BadgeConfig from a dict
google_apps_drive_labels_v2_badge_config_from_dict = GoogleAppsDriveLabelsV2BadgeConfig.from_dict(google_apps_drive_labels_v2_badge_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



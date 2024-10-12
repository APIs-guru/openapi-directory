# GoogleAppsDriveLabelsV2betaBadgeConfig

Badge status of the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**priority_override** | **str** | Override the default global priority of this badge. When set to 0, the default priority heuristic is used. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_badge_config import GoogleAppsDriveLabelsV2betaBadgeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaBadgeConfig from a JSON string
google_apps_drive_labels_v2beta_badge_config_instance = GoogleAppsDriveLabelsV2betaBadgeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaBadgeConfig.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_badge_config_dict = google_apps_drive_labels_v2beta_badge_config_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaBadgeConfig from a dict
google_apps_drive_labels_v2beta_badge_config_from_dict = GoogleAppsDriveLabelsV2betaBadgeConfig.from_dict(google_apps_drive_labels_v2beta_badge_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



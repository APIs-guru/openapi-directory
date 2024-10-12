# GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties

Basic properties of the choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_config** | [**GoogleAppsDriveLabelsV2betaBadgeConfig**](GoogleAppsDriveLabelsV2betaBadgeConfig.md) |  | [optional] 
**description** | **str** | The description of this label. | [optional] 
**display_name** | **str** | Required. The display text to show in the UI identifying this field. | [optional] 
**insert_before_choice** | **str** | Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_selection_options_choice_properties import GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties from a JSON string
google_apps_drive_labels_v2beta_field_selection_options_choice_properties_instance = GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_selection_options_choice_properties_dict = google_apps_drive_labels_v2beta_field_selection_options_choice_properties_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties from a dict
google_apps_drive_labels_v2beta_field_selection_options_choice_properties_from_dict = GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties.from_dict(google_apps_drive_labels_v2beta_field_selection_options_choice_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints

UI display hints for rendering an option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_colors** | [**GoogleAppsDriveLabelsV2BadgeColors**](GoogleAppsDriveLabelsV2BadgeColors.md) |  | [optional] 
**badge_priority** | **str** | The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to &#x60;BadgeConfig.priority_override&#x60; or the default heuristic which prefers creation date of the label, and field and option priority. | [optional] 
**dark_badge_colors** | [**GoogleAppsDriveLabelsV2BadgeColors**](GoogleAppsDriveLabelsV2BadgeColors.md) |  | [optional] 
**disabled** | **bool** | Whether the option should be shown in the UI as disabled. | [optional] 
**hidden_in_search** | **bool** | This option should be hidden in the search menu when searching for Drive items. | [optional] 
**shown_in_apply** | **bool** | This option should be shown in the apply menu when applying values to a Drive item. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_field_selection_options_choice_display_hints import GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints from a JSON string
google_apps_drive_labels_v2_field_selection_options_choice_display_hints_instance = GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_field_selection_options_choice_display_hints_dict = google_apps_drive_labels_v2_field_selection_options_choice_display_hints_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints from a dict
google_apps_drive_labels_v2_field_selection_options_choice_display_hints_from_dict = GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints.from_dict(google_apps_drive_labels_v2_field_selection_options_choice_display_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



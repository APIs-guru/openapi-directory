# GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities

The capabilities related to this choice on applied metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Whether the user can read related applied metadata on items. | [optional] 
**can_search** | **bool** | Whether the user can use this choice in search queries. | [optional] 
**can_select** | **bool** | Whether the user can select this choice on an item. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities import GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities from a JSON string
google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities_instance = GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities_dict = google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities from a dict
google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities_from_dict = GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities.from_dict(google_apps_drive_labels_v2_field_selection_options_choice_applied_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



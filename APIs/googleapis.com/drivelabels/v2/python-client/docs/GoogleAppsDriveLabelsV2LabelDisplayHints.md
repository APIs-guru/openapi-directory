# GoogleAppsDriveLabelsV2LabelDisplayHints

UI display hints for rendering the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the label should be shown in the UI as disabled. | [optional] 
**hidden_in_search** | **bool** | This label should be hidden in the search menu when searching for Drive items. | [optional] 
**priority** | **str** | Order to display label in a list. | [optional] 
**shown_in_apply** | **bool** | This label should be shown in the apply menu when applying values to a Drive item. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_label_display_hints import GoogleAppsDriveLabelsV2LabelDisplayHints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LabelDisplayHints from a JSON string
google_apps_drive_labels_v2_label_display_hints_instance = GoogleAppsDriveLabelsV2LabelDisplayHints.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LabelDisplayHints.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_label_display_hints_dict = google_apps_drive_labels_v2_label_display_hints_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LabelDisplayHints from a dict
google_apps_drive_labels_v2_label_display_hints_from_dict = GoogleAppsDriveLabelsV2LabelDisplayHints.from_dict(google_apps_drive_labels_v2_label_display_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



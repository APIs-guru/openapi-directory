# GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy

Behavior of this label when it's applied to Drive items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_mode** | **str** | Indicates how the applied label and field values should be copied when a Drive item is copied. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_label_applied_label_policy import GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy from a JSON string
google_apps_drive_labels_v2_label_applied_label_policy_instance = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_label_applied_label_policy_dict = google_apps_drive_labels_v2_label_applied_label_policy_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy from a dict
google_apps_drive_labels_v2_label_applied_label_policy_from_dict = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy.from_dict(google_apps_drive_labels_v2_label_applied_label_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



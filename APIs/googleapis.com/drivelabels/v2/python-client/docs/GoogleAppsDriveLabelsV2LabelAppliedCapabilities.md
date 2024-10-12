# GoogleAppsDriveLabelsV2LabelAppliedCapabilities

The capabilities a user has on this label's applied metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_apply** | **bool** | Whether the user can apply this label to items. | [optional] 
**can_read** | **bool** | Whether the user can read applied metadata related to this label. | [optional] 
**can_remove** | **bool** | Whether the user can remove this label from items. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_label_applied_capabilities import GoogleAppsDriveLabelsV2LabelAppliedCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LabelAppliedCapabilities from a JSON string
google_apps_drive_labels_v2_label_applied_capabilities_instance = GoogleAppsDriveLabelsV2LabelAppliedCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LabelAppliedCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_label_applied_capabilities_dict = google_apps_drive_labels_v2_label_applied_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LabelAppliedCapabilities from a dict
google_apps_drive_labels_v2_label_applied_capabilities_from_dict = GoogleAppsDriveLabelsV2LabelAppliedCapabilities.from_dict(google_apps_drive_labels_v2_label_applied_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



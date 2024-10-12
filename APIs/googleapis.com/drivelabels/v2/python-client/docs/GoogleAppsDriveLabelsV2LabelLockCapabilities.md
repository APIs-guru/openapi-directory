# GoogleAppsDriveLabelsV2LabelLockCapabilities

A description of a user's capabilities on a LabelLock.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_view_policy** | **bool** | True if the user is authorized to view the policy. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_label_lock_capabilities import GoogleAppsDriveLabelsV2LabelLockCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LabelLockCapabilities from a JSON string
google_apps_drive_labels_v2_label_lock_capabilities_instance = GoogleAppsDriveLabelsV2LabelLockCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LabelLockCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_label_lock_capabilities_dict = google_apps_drive_labels_v2_label_lock_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LabelLockCapabilities from a dict
google_apps_drive_labels_v2_label_lock_capabilities_from_dict = GoogleAppsDriveLabelsV2LabelLockCapabilities.from_dict(google_apps_drive_labels_v2_label_lock_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



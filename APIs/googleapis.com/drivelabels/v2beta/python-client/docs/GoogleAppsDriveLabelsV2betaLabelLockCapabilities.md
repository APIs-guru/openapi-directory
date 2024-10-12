# GoogleAppsDriveLabelsV2betaLabelLockCapabilities

A description of a user's capabilities on a LabelLock.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_view_policy** | **bool** | True if the user is authorized to view the policy. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_label_lock_capabilities import GoogleAppsDriveLabelsV2betaLabelLockCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLabelLockCapabilities from a JSON string
google_apps_drive_labels_v2beta_label_lock_capabilities_instance = GoogleAppsDriveLabelsV2betaLabelLockCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLabelLockCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_label_lock_capabilities_dict = google_apps_drive_labels_v2beta_label_lock_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLabelLockCapabilities from a dict
google_apps_drive_labels_v2beta_label_lock_capabilities_from_dict = GoogleAppsDriveLabelsV2betaLabelLockCapabilities.from_dict(google_apps_drive_labels_v2beta_label_lock_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



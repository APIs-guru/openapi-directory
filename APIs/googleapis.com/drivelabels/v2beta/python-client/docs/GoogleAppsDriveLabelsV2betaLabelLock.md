# GoogleAppsDriveLabelsV2betaLabelLock

A Lock that can be applied to a Label, Field, or Choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**GoogleAppsDriveLabelsV2betaLabelLockCapabilities**](GoogleAppsDriveLabelsV2betaLabelLockCapabilities.md) |  | [optional] 
**choice_id** | **str** | The ID of the Selection Field Choice that should be locked. If present, &#x60;field_id&#x60; must also be present. | [optional] 
**create_time** | **str** | Output only. The time this LabelLock was created. | [optional] [readonly] 
**creator** | [**GoogleAppsDriveLabelsV2betaUserInfo**](GoogleAppsDriveLabelsV2betaUserInfo.md) |  | [optional] 
**delete_time** | **str** | Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state. | [optional] [readonly] 
**field_id** | **str** | The ID of the Field that should be locked. Empty if the whole Label should be locked. | [optional] 
**name** | **str** | Output only. Resource name of this LabelLock. | [optional] [readonly] 
**state** | **str** | Output only. This LabelLock&#39;s state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_label_lock import GoogleAppsDriveLabelsV2betaLabelLock

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLabelLock from a JSON string
google_apps_drive_labels_v2beta_label_lock_instance = GoogleAppsDriveLabelsV2betaLabelLock.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLabelLock.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_label_lock_dict = google_apps_drive_labels_v2beta_label_lock_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLabelLock from a dict
google_apps_drive_labels_v2beta_label_lock_from_dict = GoogleAppsDriveLabelsV2betaLabelLock.from_dict(google_apps_drive_labels_v2beta_label_lock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



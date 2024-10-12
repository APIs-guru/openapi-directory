# GoogleAppsDriveLabelsV2LockStatus

Contains information about whether a label component should be considered locked.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** | Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it&#39;s not the direct target of a LabelLock, in which case this field is set to false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_lock_status import GoogleAppsDriveLabelsV2LockStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LockStatus from a JSON string
google_apps_drive_labels_v2_lock_status_instance = GoogleAppsDriveLabelsV2LockStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LockStatus.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_lock_status_dict = google_apps_drive_labels_v2_lock_status_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LockStatus from a dict
google_apps_drive_labels_v2_lock_status_from_dict = GoogleAppsDriveLabelsV2LockStatus.from_dict(google_apps_drive_labels_v2_lock_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



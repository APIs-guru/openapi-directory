# GoogleAppsDriveLabelsV2betaWriteControl

Provides control over how write requests are executed. When not specified, the last write wins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_revision_id** | **str** | The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_write_control import GoogleAppsDriveLabelsV2betaWriteControl

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaWriteControl from a JSON string
google_apps_drive_labels_v2beta_write_control_instance = GoogleAppsDriveLabelsV2betaWriteControl.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaWriteControl.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_write_control_dict = google_apps_drive_labels_v2beta_write_control_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaWriteControl from a dict
google_apps_drive_labels_v2beta_write_control_from_dict = GoogleAppsDriveLabelsV2betaWriteControl.from_dict(google_apps_drive_labels_v2beta_write_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



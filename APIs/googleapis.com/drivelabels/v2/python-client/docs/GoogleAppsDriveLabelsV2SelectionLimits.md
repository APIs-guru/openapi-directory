# GoogleAppsDriveLabelsV2SelectionLimits

Limits for selection Field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_limits** | [**GoogleAppsDriveLabelsV2ListLimits**](GoogleAppsDriveLabelsV2ListLimits.md) |  | [optional] 
**max_choices** | **int** | The max number of choices. | [optional] 
**max_deleted_choices** | **int** | Maximum number of deleted choices. | [optional] 
**max_display_name_length** | **int** | Maximum length for display name. | [optional] 
**max_id_length** | **int** | Maximum ID length for a selection options. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_selection_limits import GoogleAppsDriveLabelsV2SelectionLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2SelectionLimits from a JSON string
google_apps_drive_labels_v2_selection_limits_instance = GoogleAppsDriveLabelsV2SelectionLimits.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2SelectionLimits.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_selection_limits_dict = google_apps_drive_labels_v2_selection_limits_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2SelectionLimits from a dict
google_apps_drive_labels_v2_selection_limits_from_dict = GoogleAppsDriveLabelsV2SelectionLimits.from_dict(google_apps_drive_labels_v2_selection_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



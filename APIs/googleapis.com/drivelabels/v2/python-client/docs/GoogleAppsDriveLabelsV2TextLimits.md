# GoogleAppsDriveLabelsV2TextLimits

Limits for text Field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_length** | **int** | Maximum length allowed for a text Field type. | [optional] 
**min_length** | **int** | Minimum length allowed for a text Field type. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_text_limits import GoogleAppsDriveLabelsV2TextLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2TextLimits from a JSON string
google_apps_drive_labels_v2_text_limits_instance = GoogleAppsDriveLabelsV2TextLimits.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2TextLimits.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_text_limits_dict = google_apps_drive_labels_v2_text_limits_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2TextLimits from a dict
google_apps_drive_labels_v2_text_limits_from_dict = GoogleAppsDriveLabelsV2TextLimits.from_dict(google_apps_drive_labels_v2_text_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



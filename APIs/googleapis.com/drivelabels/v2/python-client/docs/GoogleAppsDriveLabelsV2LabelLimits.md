# GoogleAppsDriveLabelsV2LabelLimits

Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_limits** | [**GoogleAppsDriveLabelsV2FieldLimits**](GoogleAppsDriveLabelsV2FieldLimits.md) |  | [optional] 
**max_deleted_fields** | **int** | The maximum number of published Fields that can be deleted. | [optional] 
**max_description_length** | **int** | The maximum number of characters allowed for the description. | [optional] 
**max_draft_revisions** | **int** | The maximum number of draft revisions that will be kept before deleting old drafts. | [optional] 
**max_fields** | **int** | The maximum number of Fields allowed within the label. | [optional] 
**max_title_length** | **int** | The maximum number of characters allowed for the title. | [optional] 
**name** | **str** | Resource name. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_label_limits import GoogleAppsDriveLabelsV2LabelLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LabelLimits from a JSON string
google_apps_drive_labels_v2_label_limits_instance = GoogleAppsDriveLabelsV2LabelLimits.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LabelLimits.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_label_limits_dict = google_apps_drive_labels_v2_label_limits_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LabelLimits from a dict
google_apps_drive_labels_v2_label_limits_from_dict = GoogleAppsDriveLabelsV2LabelLimits.from_dict(google_apps_drive_labels_v2_label_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



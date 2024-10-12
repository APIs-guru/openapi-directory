# GoogleAppsDriveLabelsV2FieldSelectionOptions

Options for the selection field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choices** | [**List[GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice]**](GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.md) | The options available for this selection field. The list order is consistent, and modified with &#x60;insert_before_choice&#x60;. | [optional] 
**list_options** | [**GoogleAppsDriveLabelsV2FieldListOptions**](GoogleAppsDriveLabelsV2FieldListOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_field_selection_options import GoogleAppsDriveLabelsV2FieldSelectionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptions from a JSON string
google_apps_drive_labels_v2_field_selection_options_instance = GoogleAppsDriveLabelsV2FieldSelectionOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2FieldSelectionOptions.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_field_selection_options_dict = google_apps_drive_labels_v2_field_selection_options_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2FieldSelectionOptions from a dict
google_apps_drive_labels_v2_field_selection_options_from_dict = GoogleAppsDriveLabelsV2FieldSelectionOptions.from_dict(google_apps_drive_labels_v2_field_selection_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



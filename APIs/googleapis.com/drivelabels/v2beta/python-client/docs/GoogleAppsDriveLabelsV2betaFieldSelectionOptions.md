# GoogleAppsDriveLabelsV2betaFieldSelectionOptions

Options for the selection field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choices** | [**List[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice]**](GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.md) | The options available for this selection field. The list order is consistent, and modified with &#x60;insert_before_choice&#x60;. | [optional] 
**list_options** | [**GoogleAppsDriveLabelsV2betaFieldListOptions**](GoogleAppsDriveLabelsV2betaFieldListOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_selection_options import GoogleAppsDriveLabelsV2betaFieldSelectionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldSelectionOptions from a JSON string
google_apps_drive_labels_v2beta_field_selection_options_instance = GoogleAppsDriveLabelsV2betaFieldSelectionOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldSelectionOptions.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_selection_options_dict = google_apps_drive_labels_v2beta_field_selection_options_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldSelectionOptions from a dict
google_apps_drive_labels_v2beta_field_selection_options_from_dict = GoogleAppsDriveLabelsV2betaFieldSelectionOptions.from_dict(google_apps_drive_labels_v2beta_field_selection_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



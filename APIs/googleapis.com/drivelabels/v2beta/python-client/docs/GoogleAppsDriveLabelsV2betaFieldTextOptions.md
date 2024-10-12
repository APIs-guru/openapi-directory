# GoogleAppsDriveLabelsV2betaFieldTextOptions

Options for the Text field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_length** | **int** | Output only. The maximum valid length of values for the text field. | [optional] [readonly] 
**min_length** | **int** | Output only. The minimum valid length of values for the text field. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_text_options import GoogleAppsDriveLabelsV2betaFieldTextOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldTextOptions from a JSON string
google_apps_drive_labels_v2beta_field_text_options_instance = GoogleAppsDriveLabelsV2betaFieldTextOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldTextOptions.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_text_options_dict = google_apps_drive_labels_v2beta_field_text_options_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldTextOptions from a dict
google_apps_drive_labels_v2beta_field_text_options_from_dict = GoogleAppsDriveLabelsV2betaFieldTextOptions.from_dict(google_apps_drive_labels_v2beta_field_text_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



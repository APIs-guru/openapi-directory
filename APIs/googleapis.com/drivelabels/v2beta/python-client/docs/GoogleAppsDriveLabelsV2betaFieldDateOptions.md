# GoogleAppsDriveLabelsV2betaFieldDateOptions

Options for the date field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_format** | **str** | Output only. ICU date format. | [optional] [readonly] 
**date_format_type** | **str** | Localized date formatting option. Field values are rendered in this format according to their locale. | [optional] 
**max_value** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**min_value** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_date_options import GoogleAppsDriveLabelsV2betaFieldDateOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldDateOptions from a JSON string
google_apps_drive_labels_v2beta_field_date_options_instance = GoogleAppsDriveLabelsV2betaFieldDateOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldDateOptions.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_date_options_dict = google_apps_drive_labels_v2beta_field_date_options_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldDateOptions from a dict
google_apps_drive_labels_v2beta_field_date_options_from_dict = GoogleAppsDriveLabelsV2betaFieldDateOptions.from_dict(google_apps_drive_labels_v2beta_field_date_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



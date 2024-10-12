# GoogleAppsDriveLabelsV2betaFieldIntegerOptions

Options for the Integer field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **str** | Output only. The maximum valid value for the integer field. | [optional] [readonly] 
**min_value** | **str** | Output only. The minimum valid value for the integer field. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_integer_options import GoogleAppsDriveLabelsV2betaFieldIntegerOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldIntegerOptions from a JSON string
google_apps_drive_labels_v2beta_field_integer_options_instance = GoogleAppsDriveLabelsV2betaFieldIntegerOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldIntegerOptions.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_integer_options_dict = google_apps_drive_labels_v2beta_field_integer_options_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldIntegerOptions from a dict
google_apps_drive_labels_v2beta_field_integer_options_from_dict = GoogleAppsDriveLabelsV2betaFieldIntegerOptions.from_dict(google_apps_drive_labels_v2beta_field_integer_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



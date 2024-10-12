# GoogleAppsDriveLabelsV2betaFieldProperties

The basic properties of the field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display text to show in the UI identifying this field. | [optional] 
**insert_before_field** | **str** | Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. | [optional] 
**required** | **bool** | Whether the field should be marked as required. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_properties import GoogleAppsDriveLabelsV2betaFieldProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldProperties from a JSON string
google_apps_drive_labels_v2beta_field_properties_instance = GoogleAppsDriveLabelsV2betaFieldProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldProperties.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_properties_dict = google_apps_drive_labels_v2beta_field_properties_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldProperties from a dict
google_apps_drive_labels_v2beta_field_properties_from_dict = GoogleAppsDriveLabelsV2betaFieldProperties.from_dict(google_apps_drive_labels_v2beta_field_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



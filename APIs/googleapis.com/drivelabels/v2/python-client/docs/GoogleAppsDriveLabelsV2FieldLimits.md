# GoogleAppsDriveLabelsV2FieldLimits

Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_limits** | [**GoogleAppsDriveLabelsV2DateLimits**](GoogleAppsDriveLabelsV2DateLimits.md) |  | [optional] 
**integer_limits** | [**GoogleAppsDriveLabelsV2IntegerLimits**](GoogleAppsDriveLabelsV2IntegerLimits.md) |  | [optional] 
**long_text_limits** | [**GoogleAppsDriveLabelsV2LongTextLimits**](GoogleAppsDriveLabelsV2LongTextLimits.md) |  | [optional] 
**max_description_length** | **int** | Limits for Field description, also called help text. | [optional] 
**max_display_name_length** | **int** | Limits for Field title. | [optional] 
**max_id_length** | **int** | Max length for the id. | [optional] 
**selection_limits** | [**GoogleAppsDriveLabelsV2SelectionLimits**](GoogleAppsDriveLabelsV2SelectionLimits.md) |  | [optional] 
**text_limits** | [**GoogleAppsDriveLabelsV2TextLimits**](GoogleAppsDriveLabelsV2TextLimits.md) |  | [optional] 
**user_limits** | [**GoogleAppsDriveLabelsV2UserLimits**](GoogleAppsDriveLabelsV2UserLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_field_limits import GoogleAppsDriveLabelsV2FieldLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2FieldLimits from a JSON string
google_apps_drive_labels_v2_field_limits_instance = GoogleAppsDriveLabelsV2FieldLimits.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2FieldLimits.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_field_limits_dict = google_apps_drive_labels_v2_field_limits_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2FieldLimits from a dict
google_apps_drive_labels_v2_field_limits_from_dict = GoogleAppsDriveLabelsV2FieldLimits.from_dict(google_apps_drive_labels_v2_field_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



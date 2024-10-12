# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest

Request to change the type of a Field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_options** | [**GoogleAppsDriveLabelsV2FieldDateOptions**](GoogleAppsDriveLabelsV2FieldDateOptions.md) |  | [optional] 
**id** | **str** | Required. The Field to update. | [optional] 
**integer_options** | [**GoogleAppsDriveLabelsV2FieldIntegerOptions**](GoogleAppsDriveLabelsV2FieldIntegerOptions.md) |  | [optional] 
**selection_options** | [**GoogleAppsDriveLabelsV2FieldSelectionOptions**](GoogleAppsDriveLabelsV2FieldSelectionOptions.md) |  | [optional] 
**text_options** | [**GoogleAppsDriveLabelsV2FieldTextOptions**](GoogleAppsDriveLabelsV2FieldTextOptions.md) |  | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root of &#x60;type_options&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 
**user_options** | [**GoogleAppsDriveLabelsV2FieldUserOptions**](GoogleAppsDriveLabelsV2FieldUserOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request_dict = google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_update_field_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



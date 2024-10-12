# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest

Request to change the type of a Field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_options** | [**GoogleAppsDriveLabelsV2betaFieldDateOptions**](GoogleAppsDriveLabelsV2betaFieldDateOptions.md) |  | [optional] 
**id** | **str** | Required. The Field to update. | [optional] 
**integer_options** | [**GoogleAppsDriveLabelsV2betaFieldIntegerOptions**](GoogleAppsDriveLabelsV2betaFieldIntegerOptions.md) |  | [optional] 
**selection_options** | [**GoogleAppsDriveLabelsV2betaFieldSelectionOptions**](GoogleAppsDriveLabelsV2betaFieldSelectionOptions.md) |  | [optional] 
**text_options** | [**GoogleAppsDriveLabelsV2betaFieldTextOptions**](GoogleAppsDriveLabelsV2betaFieldTextOptions.md) |  | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root of &#x60;type_options&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 
**user_options** | [**GoogleAppsDriveLabelsV2betaFieldUserOptions**](GoogleAppsDriveLabelsV2betaFieldUserOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_update_field_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



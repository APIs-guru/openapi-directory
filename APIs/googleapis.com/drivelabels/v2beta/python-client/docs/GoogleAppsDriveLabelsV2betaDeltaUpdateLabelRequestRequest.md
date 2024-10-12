# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest

A single kind of update to apply to a Label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_field** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest.md) |  | [optional] 
**create_selection_choice** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest.md) |  | [optional] 
**delete_field** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest.md) |  | [optional] 
**delete_selection_choice** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest.md) |  | [optional] 
**disable_field** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest.md) |  | [optional] 
**disable_selection_choice** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest.md) |  | [optional] 
**enable_field** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest.md) |  | [optional] 
**enable_selection_choice** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest.md) |  | [optional] 
**update_field** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest.md) |  | [optional] 
**update_field_type** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest.md) |  | [optional] 
**update_label** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest.md) |  | [optional] 
**update_selection_choice_properties** | [**GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



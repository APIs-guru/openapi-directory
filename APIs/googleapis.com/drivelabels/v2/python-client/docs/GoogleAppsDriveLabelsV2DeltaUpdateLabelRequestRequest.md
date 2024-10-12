# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest

A single kind of update to apply to a Label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest.md) |  | [optional] 
**create_selection_choice** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest.md) |  | [optional] 
**delete_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest.md) |  | [optional] 
**delete_selection_choice** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest.md) |  | [optional] 
**disable_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest.md) |  | [optional] 
**disable_selection_choice** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest.md) |  | [optional] 
**enable_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest.md) |  | [optional] 
**enable_selection_choice** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest.md) |  | [optional] 
**update_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest.md) |  | [optional] 
**update_field_type** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest.md) |  | [optional] 
**update_label** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest.md) |  | [optional] 
**update_selection_choice_properties** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest**](GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_request_dict = google_apps_drive_labels_v2_delta_update_label_request_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



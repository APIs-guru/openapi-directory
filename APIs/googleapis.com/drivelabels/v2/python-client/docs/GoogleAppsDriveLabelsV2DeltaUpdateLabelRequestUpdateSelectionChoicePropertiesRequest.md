# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest

Request to update a Choice properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** | Required. The Selection Field to update. | [optional] 
**id** | **str** | Required. The Choice to update. | [optional] 
**properties** | [**GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties**](GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties.md) |  | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;properties&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request_dict = google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_update_selection_choice_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



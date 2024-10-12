# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest

Request to enable a Choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** | Required. The Selection Field in which a Choice will be enabled. | [optional] 
**id** | **str** | Required. Choice to enable. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_enable_selection_choice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



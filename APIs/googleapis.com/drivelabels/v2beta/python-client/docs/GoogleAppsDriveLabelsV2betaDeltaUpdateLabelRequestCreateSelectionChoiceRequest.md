# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest

Request to create a Selection Choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choice** | [**GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice**](GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.md) |  | [optional] 
**field_id** | **str** | Required. The Selection Field in which a Choice will be created. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_create_selection_choice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



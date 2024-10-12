# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest

Request to delete a Choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** | Required. The Selection Field from which a Choice will be deleted. | [optional] 
**id** | **str** | Required. Choice to delete. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request_dict = google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_delete_selection_choice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest

Request to disable a Choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_policy** | [**GoogleAppsDriveLabelsV2LifecycleDisabledPolicy**](GoogleAppsDriveLabelsV2LifecycleDisabledPolicy.md) |  | [optional] 
**field_id** | **str** | Required. The Selection Field in which a Choice will be disabled. | [optional] 
**id** | **str** | Required. Choice to disable. | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;disabled_policy&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request_dict = google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_disable_selection_choice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



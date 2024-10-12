# GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse

A single response from an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse**](GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse.md) |  | [optional] 
**create_selection_choice** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse**](GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse.md) |  | [optional] 
**delete_field** | **object** | Response following Field delete. | [optional] 
**delete_selection_choice** | **object** | Response following Choice delete. | [optional] 
**disable_field** | **object** | Response following Field disable. | [optional] 
**disable_selection_choice** | **object** | Response following Choice disable. | [optional] 
**enable_field** | **object** | Response following Field enable. | [optional] 
**enable_selection_choice** | **object** | Response following Choice enable. | [optional] 
**update_field** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse**](GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse.md) |  | [optional] 
**update_field_type** | **object** | Response following update to Field type. | [optional] 
**update_label** | **object** | Response following update to Label properties. | [optional] 
**update_selection_choice_properties** | [**GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse**](GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_response_response import GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse from a JSON string
google_apps_drive_labels_v2_delta_update_label_response_response_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_response_response_dict = google_apps_drive_labels_v2_delta_update_label_response_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse from a dict
google_apps_drive_labels_v2_delta_update_label_response_response_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse.from_dict(google_apps_drive_labels_v2_delta_update_label_response_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



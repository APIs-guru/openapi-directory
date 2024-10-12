# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest

Request to disable the Field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_policy** | [**GoogleAppsDriveLabelsV2LifecycleDisabledPolicy**](GoogleAppsDriveLabelsV2LifecycleDisabledPolicy.md) |  | [optional] 
**id** | **str** | Required. Key of the Field to disable. | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;disabled_policy&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_disable_field_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_disable_field_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_disable_field_request_dict = google_apps_drive_labels_v2_delta_update_label_request_disable_field_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_disable_field_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_disable_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



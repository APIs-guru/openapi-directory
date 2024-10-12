# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest

Request to disable the Field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_policy** | [**GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy**](GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy.md) |  | [optional] 
**id** | **str** | Required. Key of the Field to disable. | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;disabled_policy&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_disable_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



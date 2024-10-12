# GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest

Updates basic properties of a Label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GoogleAppsDriveLabelsV2LabelProperties**](GoogleAppsDriveLabelsV2LabelProperties.md) |  | [optional] 
**update_mask** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;label_properties&#x60; is implied and should not be specified. A single &#x60;*&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request import GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest from a JSON string
google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request_instance = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request_dict = google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest from a dict
google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request_from_dict = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest.from_dict(google_apps_drive_labels_v2_delta_update_label_request_update_label_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



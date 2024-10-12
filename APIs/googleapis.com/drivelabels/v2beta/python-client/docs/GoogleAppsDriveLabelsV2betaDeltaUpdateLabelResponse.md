# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse

Response for Label update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse]**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.md) | The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty. | [optional] 
**updated_label** | [**GoogleAppsDriveLabelsV2betaLabel**](GoogleAppsDriveLabelsV2betaLabel.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_response import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_response_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_response_dict = google_apps_drive_labels_v2beta_delta_update_label_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse from a dict
google_apps_drive_labels_v2beta_delta_update_label_response_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse.from_dict(google_apps_drive_labels_v2beta_delta_update_label_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



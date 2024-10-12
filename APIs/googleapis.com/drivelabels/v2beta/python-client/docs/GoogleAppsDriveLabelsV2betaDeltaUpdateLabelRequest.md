# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest

The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The BCP-47 language code to use for evaluating localized Field labels when &#x60;include_label_in_response&#x60; is &#x60;true&#x60;. | [optional] 
**requests** | [**List[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest]**](GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest.md) | A list of updates to apply to the Label. Requests will be applied in the order they are specified. | [optional] 
**use_admin_access** | **bool** | Set to &#x60;true&#x60; in order to use the user&#39;s admin credentials. The server will verify the user is an admin for the Label before allowing access. | [optional] 
**view** | **str** | When specified, only certain fields belonging to the indicated view will be returned. | [optional] 
**write_control** | [**GoogleAppsDriveLabelsV2betaWriteControl**](GoogleAppsDriveLabelsV2betaWriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_request import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_request_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_request_dict = google_apps_drive_labels_v2beta_delta_update_label_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest from a dict
google_apps_drive_labels_v2beta_delta_update_label_request_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest.from_dict(google_apps_drive_labels_v2beta_delta_update_label_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



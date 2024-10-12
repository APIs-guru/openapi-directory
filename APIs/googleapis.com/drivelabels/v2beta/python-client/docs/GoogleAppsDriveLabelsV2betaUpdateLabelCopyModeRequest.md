# GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest

Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \\

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_mode** | **str** | Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied. | [optional] 
**language_code** | **str** | The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. | [optional] 
**use_admin_access** | **bool** | Set to &#x60;true&#x60; in order to use the user&#39;s admin credentials. The server will verify the user is an admin for the Label before allowing access. | [optional] 
**view** | **str** | When specified, only certain fields belonging to the indicated view will be returned. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_update_label_copy_mode_request import GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest from a JSON string
google_apps_drive_labels_v2beta_update_label_copy_mode_request_instance = GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_update_label_copy_mode_request_dict = google_apps_drive_labels_v2beta_update_label_copy_mode_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest from a dict
google_apps_drive_labels_v2beta_update_label_copy_mode_request_from_dict = GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.from_dict(google_apps_drive_labels_v2beta_update_label_copy_mode_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



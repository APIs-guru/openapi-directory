# GoogleAppsDriveLabelsV2betaEnableLabelRequest

Request to enable a label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. | [optional] 
**use_admin_access** | **bool** | Set to &#x60;true&#x60; in order to use the user&#39;s admin credentials. The server will verify the user is an admin for the Label before allowing access. | [optional] 
**write_control** | [**GoogleAppsDriveLabelsV2betaWriteControl**](GoogleAppsDriveLabelsV2betaWriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_enable_label_request import GoogleAppsDriveLabelsV2betaEnableLabelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaEnableLabelRequest from a JSON string
google_apps_drive_labels_v2beta_enable_label_request_instance = GoogleAppsDriveLabelsV2betaEnableLabelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaEnableLabelRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_enable_label_request_dict = google_apps_drive_labels_v2beta_enable_label_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaEnableLabelRequest from a dict
google_apps_drive_labels_v2beta_enable_label_request_from_dict = GoogleAppsDriveLabelsV2betaEnableLabelRequest.from_dict(google_apps_drive_labels_v2beta_enable_label_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



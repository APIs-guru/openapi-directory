# GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse

Response for updating one or more Label Permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**List[GoogleAppsDriveLabelsV2betaLabelPermission]**](GoogleAppsDriveLabelsV2betaLabelPermission.md) | Required. Permissions updated. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_batch_update_label_permissions_response import GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse from a JSON string
google_apps_drive_labels_v2beta_batch_update_label_permissions_response_instance = GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_batch_update_label_permissions_response_dict = google_apps_drive_labels_v2beta_batch_update_label_permissions_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse from a dict
google_apps_drive_labels_v2beta_batch_update_label_permissions_response_from_dict = GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse.from_dict(google_apps_drive_labels_v2beta_batch_update_label_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



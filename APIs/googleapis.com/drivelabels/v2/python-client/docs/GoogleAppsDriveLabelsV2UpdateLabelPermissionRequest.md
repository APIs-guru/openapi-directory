# GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest

Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_permission** | [**GoogleAppsDriveLabelsV2LabelPermission**](GoogleAppsDriveLabelsV2LabelPermission.md) |  | [optional] 
**parent** | **str** | Required. The parent Label resource name. | [optional] 
**use_admin_access** | **bool** | Set to &#x60;true&#x60; in order to use the user&#39;s admin credentials. The server will verify the user is an admin for the Label before allowing access. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_update_label_permission_request import GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest from a JSON string
google_apps_drive_labels_v2_update_label_permission_request_instance = GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_update_label_permission_request_dict = google_apps_drive_labels_v2_update_label_permission_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest from a dict
google_apps_drive_labels_v2_update_label_permission_request_from_dict = GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest.from_dict(google_apps_drive_labels_v2_update_label_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



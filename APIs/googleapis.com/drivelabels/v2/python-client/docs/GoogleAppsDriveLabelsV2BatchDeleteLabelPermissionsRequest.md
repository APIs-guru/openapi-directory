# GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest

Deletes one of more Label Permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest]**](GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest.md) | Required. The request message specifying the resources to update. | [optional] 
**use_admin_access** | **bool** | Set to &#x60;true&#x60; in order to use the user&#39;s admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_batch_delete_label_permissions_request import GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest from a JSON string
google_apps_drive_labels_v2_batch_delete_label_permissions_request_instance = GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_batch_delete_label_permissions_request_dict = google_apps_drive_labels_v2_batch_delete_label_permissions_request_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest from a dict
google_apps_drive_labels_v2_batch_delete_label_permissions_request_from_dict = GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest.from_dict(google_apps_drive_labels_v2_batch_delete_label_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



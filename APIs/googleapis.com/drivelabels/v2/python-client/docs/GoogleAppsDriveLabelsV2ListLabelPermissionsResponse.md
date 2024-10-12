# GoogleAppsDriveLabelsV2ListLabelPermissionsResponse

Response for listing the permissions on a Label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_permissions** | [**List[GoogleAppsDriveLabelsV2LabelPermission]**](GoogleAppsDriveLabelsV2LabelPermission.md) | Label permissions. | [optional] 
**next_page_token** | **str** | The token of the next page in the response. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_list_label_permissions_response import GoogleAppsDriveLabelsV2ListLabelPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2ListLabelPermissionsResponse from a JSON string
google_apps_drive_labels_v2_list_label_permissions_response_instance = GoogleAppsDriveLabelsV2ListLabelPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2ListLabelPermissionsResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_list_label_permissions_response_dict = google_apps_drive_labels_v2_list_label_permissions_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2ListLabelPermissionsResponse from a dict
google_apps_drive_labels_v2_list_label_permissions_response_from_dict = GoogleAppsDriveLabelsV2ListLabelPermissionsResponse.from_dict(google_apps_drive_labels_v2_list_label_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



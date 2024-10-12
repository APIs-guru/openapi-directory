# GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse

Response for listing the permissions on a Label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_permissions** | [**List[GoogleAppsDriveLabelsV2betaLabelPermission]**](GoogleAppsDriveLabelsV2betaLabelPermission.md) | Label permissions. | [optional] 
**next_page_token** | **str** | The token of the next page in the response. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_list_label_permissions_response import GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse from a JSON string
google_apps_drive_labels_v2beta_list_label_permissions_response_instance = GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_list_label_permissions_response_dict = google_apps_drive_labels_v2beta_list_label_permissions_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse from a dict
google_apps_drive_labels_v2beta_list_label_permissions_response_from_dict = GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse.from_dict(google_apps_drive_labels_v2beta_list_label_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAppsDriveLabelsV2betaUserCapabilities

The capabilities of a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_access_label_manager** | **bool** | Output only. Whether the user is allowed access to the label manager. | [optional] [readonly] 
**can_administrate_labels** | **bool** | Output only. Whether the user is an administrator for the shared labels feature. | [optional] [readonly] 
**can_create_admin_labels** | **bool** | Output only. Whether the user is allowed to create new admin labels. | [optional] [readonly] 
**can_create_shared_labels** | **bool** | Output only. Whether the user is allowed to create new shared labels. | [optional] [readonly] 
**name** | **str** | Output only. Resource name for the user capabilities. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_user_capabilities import GoogleAppsDriveLabelsV2betaUserCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaUserCapabilities from a JSON string
google_apps_drive_labels_v2beta_user_capabilities_instance = GoogleAppsDriveLabelsV2betaUserCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaUserCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_user_capabilities_dict = google_apps_drive_labels_v2beta_user_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaUserCapabilities from a dict
google_apps_drive_labels_v2beta_user_capabilities_from_dict = GoogleAppsDriveLabelsV2betaUserCapabilities.from_dict(google_apps_drive_labels_v2beta_user_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAppsDriveLabelsV2UserInfo

Information about a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | **str** | The identifier for this user that can be used with the People API to get more information. For example, people/12345678. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_user_info import GoogleAppsDriveLabelsV2UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2UserInfo from a JSON string
google_apps_drive_labels_v2_user_info_instance = GoogleAppsDriveLabelsV2UserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2UserInfo.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_user_info_dict = google_apps_drive_labels_v2_user_info_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2UserInfo from a dict
google_apps_drive_labels_v2_user_info_from_dict = GoogleAppsDriveLabelsV2UserInfo.from_dict(google_apps_drive_labels_v2_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



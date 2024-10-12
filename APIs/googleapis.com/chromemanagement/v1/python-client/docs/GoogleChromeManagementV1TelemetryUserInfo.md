# GoogleChromeManagementV1TelemetryUserInfo

Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Output only. User&#39;s email. | [optional] [readonly] 
**org_unit_id** | **str** | Output only. Organization unit ID of the user. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_user_info import GoogleChromeManagementV1TelemetryUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryUserInfo from a JSON string
google_chrome_management_v1_telemetry_user_info_instance = GoogleChromeManagementV1TelemetryUserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryUserInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_user_info_dict = google_chrome_management_v1_telemetry_user_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryUserInfo from a dict
google_chrome_management_v1_telemetry_user_info_from_dict = GoogleChromeManagementV1TelemetryUserInfo.from_dict(google_chrome_management_v1_telemetry_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleChromeManagementV1TelemetryUser

Telemetry data collected from a managed user. * Granular permission needed: TELEMETRY_API_USER

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | G Suite Customer whose enterprise enrolled the device. | [optional] 
**name** | **str** | Resource name of the user. | [optional] 
**org_unit_id** | **str** | Organization unit of the user. | [optional] 
**user_device** | [**List[GoogleChromeManagementV1TelemetryUserDevice]**](GoogleChromeManagementV1TelemetryUserDevice.md) | Telemetry data collected from a managed user and device. | [optional] 
**user_email** | **str** | Email address of the user. | [optional] 
**user_id** | **str** | Directory ID of the user. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_user import GoogleChromeManagementV1TelemetryUser

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryUser from a JSON string
google_chrome_management_v1_telemetry_user_instance = GoogleChromeManagementV1TelemetryUser.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryUser.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_user_dict = google_chrome_management_v1_telemetry_user_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryUser from a dict
google_chrome_management_v1_telemetry_user_from_dict = GoogleChromeManagementV1TelemetryUser.from_dict(google_chrome_management_v1_telemetry_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



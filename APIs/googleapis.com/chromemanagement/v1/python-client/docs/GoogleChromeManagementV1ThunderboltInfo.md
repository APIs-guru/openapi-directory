# GoogleChromeManagementV1ThunderboltInfo

Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BUS_DEVICE_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_level** | **str** | Security level of the Thunderbolt bus. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_thunderbolt_info import GoogleChromeManagementV1ThunderboltInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ThunderboltInfo from a JSON string
google_chrome_management_v1_thunderbolt_info_instance = GoogleChromeManagementV1ThunderboltInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ThunderboltInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_thunderbolt_info_dict = google_chrome_management_v1_thunderbolt_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1ThunderboltInfo from a dict
google_chrome_management_v1_thunderbolt_info_from_dict = GoogleChromeManagementV1ThunderboltInfo.from_dict(google_chrome_management_v1_thunderbolt_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



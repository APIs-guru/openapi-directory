# GoogleChromeManagementV1NetworkInfo

Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_devices** | [**List[GoogleChromeManagementV1NetworkDevice]**](GoogleChromeManagementV1NetworkDevice.md) | Output only. List of network devices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_network_info import GoogleChromeManagementV1NetworkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1NetworkInfo from a JSON string
google_chrome_management_v1_network_info_instance = GoogleChromeManagementV1NetworkInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1NetworkInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_network_info_dict = google_chrome_management_v1_network_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1NetworkInfo from a dict
google_chrome_management_v1_network_info_from_dict = GoogleChromeManagementV1NetworkInfo.from_dict(google_chrome_management_v1_network_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



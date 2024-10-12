# GoogleChromeManagementV1NetworkDevice

Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iccid** | **str** | Output only. The integrated circuit card ID associated with the device&#39;s sim card. | [optional] [readonly] 
**imei** | **str** | Output only. IMEI (if applicable) of the corresponding network device. | [optional] [readonly] 
**mac_address** | **str** | Output only. MAC address (if applicable) of the corresponding network device. | [optional] [readonly] 
**mdn** | **str** | Output only. The mobile directory number associated with the device&#39;s sim card. | [optional] [readonly] 
**meid** | **str** | Output only. MEID (if applicable) of the corresponding network device. | [optional] [readonly] 
**type** | **str** | Output only. Network device type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_network_device import GoogleChromeManagementV1NetworkDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1NetworkDevice from a JSON string
google_chrome_management_v1_network_device_instance = GoogleChromeManagementV1NetworkDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1NetworkDevice.to_json())

# convert the object into a dict
google_chrome_management_v1_network_device_dict = google_chrome_management_v1_network_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1NetworkDevice from a dict
google_chrome_management_v1_network_device_from_dict = GoogleChromeManagementV1NetworkDevice.from_dict(google_chrome_management_v1_network_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



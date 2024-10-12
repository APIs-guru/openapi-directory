# GoogleChromeManagementV1DeviceAueCountReport

Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aue_month** | **str** | Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty. | [optional] 
**aue_year** | **str** | Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty. | [optional] 
**count** | **str** | Count of devices of this model. | [optional] 
**expired** | **bool** | Boolean value for whether or not the device has already expired. | [optional] 
**model** | **str** | Public model name of the devices. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_device_aue_count_report import GoogleChromeManagementV1DeviceAueCountReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DeviceAueCountReport from a JSON string
google_chrome_management_v1_device_aue_count_report_instance = GoogleChromeManagementV1DeviceAueCountReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DeviceAueCountReport.to_json())

# convert the object into a dict
google_chrome_management_v1_device_aue_count_report_dict = google_chrome_management_v1_device_aue_count_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1DeviceAueCountReport from a dict
google_chrome_management_v1_device_aue_count_report_from_dict = GoogleChromeManagementV1DeviceAueCountReport.from_dict(google_chrome_management_v1_device_aue_count_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



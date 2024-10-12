# GoogleChromeManagementV1AudioStatusReport

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_AUDIO_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_device** | **str** | Output only. Active input device&#39;s name. | [optional] [readonly] 
**input_gain** | **int** | Output only. Active input device&#39;s gain in [0, 100]. | [optional] [readonly] 
**input_mute** | **bool** | Output only. Is active input device mute or not. | [optional] [readonly] 
**output_device** | **str** | Output only. Active output device&#39;s name. | [optional] [readonly] 
**output_mute** | **bool** | Output only. Is active output device mute or not. | [optional] [readonly] 
**output_volume** | **int** | Output only. Active output device&#39;s volume in [0, 100]. | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the sample was collected on device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_audio_status_report import GoogleChromeManagementV1AudioStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1AudioStatusReport from a JSON string
google_chrome_management_v1_audio_status_report_instance = GoogleChromeManagementV1AudioStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1AudioStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_audio_status_report_dict = google_chrome_management_v1_audio_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1AudioStatusReport from a dict
google_chrome_management_v1_audio_status_report_from_dict = GoogleChromeManagementV1AudioStatusReport.from_dict(google_chrome_management_v1_audio_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



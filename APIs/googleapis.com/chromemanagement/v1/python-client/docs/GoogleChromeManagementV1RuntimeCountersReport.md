# GoogleChromeManagementV1RuntimeCountersReport

Runtime counters retrieved from CPU. Currently the runtime counters telemetry is only supported by Intel vPro PSR on Gen 14+.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enter_hibernation_count** | **str** | Number of times that the device has entered into the hibernation state. Currently obtained via the PSR, count from S0-&gt;S4. | [optional] 
**enter_poweroff_count** | **str** | Number of times that the device has entered into the power-off state. Currently obtained via the PSR, count from S0-&gt;S5. | [optional] 
**enter_sleep_count** | **str** | Number of times that the device has entered into the sleep state. Currently obtained via the PSR, count from S0-&gt;S3. | [optional] 
**report_time** | **str** | Timestamp when the report was collected. | [optional] 
**uptime_runtime_duration** | **str** | Total lifetime runtime. Currently always S0 runtime from Intel vPro PSR. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_runtime_counters_report import GoogleChromeManagementV1RuntimeCountersReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1RuntimeCountersReport from a JSON string
google_chrome_management_v1_runtime_counters_report_instance = GoogleChromeManagementV1RuntimeCountersReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1RuntimeCountersReport.to_json())

# convert the object into a dict
google_chrome_management_v1_runtime_counters_report_dict = google_chrome_management_v1_runtime_counters_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1RuntimeCountersReport from a dict
google_chrome_management_v1_runtime_counters_report_from_dict = GoogleChromeManagementV1RuntimeCountersReport.from_dict(google_chrome_management_v1_runtime_counters_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# StepReportDeviceScreenshotsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appium_log_file** | **str** |  | [optional] 
**crash_data** | **List[str]** |  | [optional] 
**device_snapshot_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**log_file** | **str** |  | [optional] 
**raw_crash_data** | **List[str]** |  | [optional] 
**screenshot** | [**StepReportDeviceScreenshotsInnerScreenshot**](StepReportDeviceScreenshotsInnerScreenshot.md) |  | [optional] 
**stacktrace** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.step_report_device_screenshots_inner import StepReportDeviceScreenshotsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StepReportDeviceScreenshotsInner from a JSON string
step_report_device_screenshots_inner_instance = StepReportDeviceScreenshotsInner.from_json(json)
# print the JSON string representation of the object
print(StepReportDeviceScreenshotsInner.to_json())

# convert the object into a dict
step_report_device_screenshots_inner_dict = step_report_device_screenshots_inner_instance.to_dict()
# create an instance of StepReportDeviceScreenshotsInner from a dict
step_report_device_screenshots_inner_from_dict = StepReportDeviceScreenshotsInner.from_dict(step_report_device_screenshots_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



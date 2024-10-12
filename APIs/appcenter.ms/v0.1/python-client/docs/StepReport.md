# StepReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_screenshots** | [**List[StepReportDeviceScreenshotsInner]**](StepReportDeviceScreenshotsInner.md) |  | 
**finished_snapshots** | **List[str]** |  | 

## Example

```python
from openapi_client.models.step_report import StepReport

# TODO update the JSON string below
json = "{}"
# create an instance of StepReport from a JSON string
step_report_instance = StepReport.from_json(json)
# print the JSON string representation of the object
print(StepReport.to_json())

# convert the object into a dict
step_report_dict = step_report_instance.to_dict()
# create an instance of StepReport from a dict
step_report_from_dict = StepReport.from_dict(step_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



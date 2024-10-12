# PerformanceReport

Report data for a single test (a.k.a. scenario)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_snapshot_id** | **str** |  | [optional] 
**performance_data** | [**PerformanceReportPerformanceData**](PerformanceReportPerformanceData.md) |  | [optional] 
**video** | [**PerformanceReportVideo**](PerformanceReportVideo.md) |  | [optional] 

## Example

```python
from openapi_client.models.performance_report import PerformanceReport

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReport from a JSON string
performance_report_instance = PerformanceReport.from_json(json)
# print the JSON string representation of the object
print(PerformanceReport.to_json())

# convert the object into a dict
performance_report_dict = performance_report_instance.to_dict()
# create an instance of PerformanceReport from a dict
performance_report_from_dict = PerformanceReport.from_dict(performance_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



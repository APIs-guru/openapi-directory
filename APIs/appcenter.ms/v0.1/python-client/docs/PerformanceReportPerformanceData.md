# PerformanceReportPerformanceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_secs** | **float** |  | 
**elapsed_secs_end** | **float** |  | 
**elapsed_secs_start** | **float** |  | 
**id** | **str** |  | 
**steps** | [**List[PerformanceReportPerformanceDataStepsInner]**](PerformanceReportPerformanceDataStepsInner.md) |  | 

## Example

```python
from openapi_client.models.performance_report_performance_data import PerformanceReportPerformanceData

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReportPerformanceData from a JSON string
performance_report_performance_data_instance = PerformanceReportPerformanceData.from_json(json)
# print the JSON string representation of the object
print(PerformanceReportPerformanceData.to_json())

# convert the object into a dict
performance_report_performance_data_dict = performance_report_performance_data_instance.to_dict()
# create an instance of PerformanceReportPerformanceData from a dict
performance_report_performance_data_from_dict = PerformanceReportPerformanceData.from_dict(performance_report_performance_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PerformanceReportPerformanceDataStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_cpu** | **float** |  | [optional] 
**avg_mem** | **float** |  | [optional] 
**elapsed_secs** | **float** |  | [optional] 
**elapsed_secs_end** | **float** |  | [optional] 
**elapsed_secs_start** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**samples** | [**List[PerformanceReportPerformanceDataStepsInnerSamplesInner]**](PerformanceReportPerformanceDataStepsInnerSamplesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.performance_report_performance_data_steps_inner import PerformanceReportPerformanceDataStepsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReportPerformanceDataStepsInner from a JSON string
performance_report_performance_data_steps_inner_instance = PerformanceReportPerformanceDataStepsInner.from_json(json)
# print the JSON string representation of the object
print(PerformanceReportPerformanceDataStepsInner.to_json())

# convert the object into a dict
performance_report_performance_data_steps_inner_dict = performance_report_performance_data_steps_inner_instance.to_dict()
# create an instance of PerformanceReportPerformanceDataStepsInner from a dict
performance_report_performance_data_steps_inner_from_dict = PerformanceReportPerformanceDataStepsInner.from_dict(performance_report_performance_data_steps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



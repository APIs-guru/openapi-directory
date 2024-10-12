# PerfMetricsSummary

A summary of perf metrics collected and performance environment info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_start_time** | [**AppStartTime**](AppStartTime.md) |  | [optional] 
**execution_id** | **str** | A tool results execution ID. @OutputOnly | [optional] 
**graphics_stats** | [**GraphicsStats**](GraphicsStats.md) |  | [optional] 
**history_id** | **str** | A tool results history ID. @OutputOnly | [optional] 
**perf_environment** | [**PerfEnvironment**](PerfEnvironment.md) |  | [optional] 
**perf_metrics** | **List[str]** | Set of resource collected | [optional] 
**project_id** | **str** | The cloud project @OutputOnly | [optional] 
**step_id** | **str** | A tool results step ID. @OutputOnly | [optional] 

## Example

```python
from openapi_client.models.perf_metrics_summary import PerfMetricsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PerfMetricsSummary from a JSON string
perf_metrics_summary_instance = PerfMetricsSummary.from_json(json)
# print the JSON string representation of the object
print(PerfMetricsSummary.to_json())

# convert the object into a dict
perf_metrics_summary_dict = perf_metrics_summary_instance.to_dict()
# create an instance of PerfMetricsSummary from a dict
perf_metrics_summary_from_dict = PerfMetricsSummary.from_dict(perf_metrics_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



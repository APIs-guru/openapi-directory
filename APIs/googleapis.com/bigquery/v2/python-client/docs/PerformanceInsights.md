# PerformanceInsights

Performance insights for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_previous_execution_ms** | **str** | Output only. Average execution ms of previous runs. Indicates the job ran slow compared to previous executions. To find previous executions, use INFORMATION_SCHEMA tables and filter jobs with same query hash. | [optional] [readonly] 
**stage_performance_change_insights** | [**List[StagePerformanceChangeInsight]**](StagePerformanceChangeInsight.md) | Output only. Query stage performance insights compared to previous runs, for diagnosing performance regression. | [optional] [readonly] 
**stage_performance_standalone_insights** | [**List[StagePerformanceStandaloneInsight]**](StagePerformanceStandaloneInsight.md) | Output only. Standalone query stage performance insights, for exploring potential improvements. | [optional] [readonly] 

## Example

```python
from openapi_client.models.performance_insights import PerformanceInsights

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceInsights from a JSON string
performance_insights_instance = PerformanceInsights.from_json(json)
# print the JSON string representation of the object
print(PerformanceInsights.to_json())

# convert the object into a dict
performance_insights_dict = performance_insights_instance.to_dict()
# create an instance of PerformanceInsights from a dict
performance_insights_from_dict = PerformanceInsights.from_dict(performance_insights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# StagePerformanceChangeInsight

Performance insights compared to the previous executions for a specific stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_data_change** | [**InputDataChange**](InputDataChange.md) |  | [optional] 
**stage_id** | **str** | Output only. The stage id that the insight mapped to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.stage_performance_change_insight import StagePerformanceChangeInsight

# TODO update the JSON string below
json = "{}"
# create an instance of StagePerformanceChangeInsight from a JSON string
stage_performance_change_insight_instance = StagePerformanceChangeInsight.from_json(json)
# print the JSON string representation of the object
print(StagePerformanceChangeInsight.to_json())

# convert the object into a dict
stage_performance_change_insight_dict = stage_performance_change_insight_instance.to_dict()
# create an instance of StagePerformanceChangeInsight from a dict
stage_performance_change_insight_from_dict = StagePerformanceChangeInsight.from_dict(stage_performance_change_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# StagePerformanceStandaloneInsight

Standalone performance insights for a specific stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bi_engine_reasons** | [**List[BiEngineReason]**](BiEngineReason.md) | Output only. If present, the stage had the following reasons for being disqualified from BI Engine execution. | [optional] [readonly] 
**high_cardinality_joins** | [**List[HighCardinalityJoin]**](HighCardinalityJoin.md) | Output only. High cardinality joins in the stage. | [optional] [readonly] 
**insufficient_shuffle_quota** | **bool** | Output only. True if the stage has insufficient shuffle quota. | [optional] [readonly] 
**slot_contention** | **bool** | Output only. True if the stage has a slot contention issue. | [optional] [readonly] 
**stage_id** | **str** | Output only. The stage id that the insight mapped to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.stage_performance_standalone_insight import StagePerformanceStandaloneInsight

# TODO update the JSON string below
json = "{}"
# create an instance of StagePerformanceStandaloneInsight from a JSON string
stage_performance_standalone_insight_instance = StagePerformanceStandaloneInsight.from_json(json)
# print the JSON string representation of the object
print(StagePerformanceStandaloneInsight.to_json())

# convert the object into a dict
stage_performance_standalone_insight_dict = stage_performance_standalone_insight_instance.to_dict()
# create an instance of StagePerformanceStandaloneInsight from a dict
stage_performance_standalone_insight_from_dict = StagePerformanceStandaloneInsight.from_dict(stage_performance_standalone_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



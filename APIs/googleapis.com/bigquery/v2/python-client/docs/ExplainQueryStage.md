# ExplainQueryStage

A single stage of query execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_parallel_inputs** | **str** | Number of parallel input segments completed. | [optional] 
**compute_mode** | **str** | Output only. Compute mode for this stage. | [optional] [readonly] 
**compute_ms_avg** | **str** | Milliseconds the average shard spent on CPU-bound tasks. | [optional] 
**compute_ms_max** | **str** | Milliseconds the slowest shard spent on CPU-bound tasks. | [optional] 
**compute_ratio_avg** | **float** | Relative amount of time the average shard spent on CPU-bound tasks. | [optional] 
**compute_ratio_max** | **float** | Relative amount of time the slowest shard spent on CPU-bound tasks. | [optional] 
**end_ms** | **str** | Stage end time represented as milliseconds since the epoch. | [optional] 
**id** | **str** | Unique ID for the stage within the plan. | [optional] 
**input_stages** | **List[str]** | IDs for stages that are inputs to this stage. | [optional] 
**name** | **str** | Human-readable name for the stage. | [optional] 
**parallel_inputs** | **str** | Number of parallel input segments to be processed | [optional] 
**read_ms_avg** | **str** | Milliseconds the average shard spent reading input. | [optional] 
**read_ms_max** | **str** | Milliseconds the slowest shard spent reading input. | [optional] 
**read_ratio_avg** | **float** | Relative amount of time the average shard spent reading input. | [optional] 
**read_ratio_max** | **float** | Relative amount of time the slowest shard spent reading input. | [optional] 
**records_read** | **str** | Number of records read into the stage. | [optional] 
**records_written** | **str** | Number of records written by the stage. | [optional] 
**shuffle_output_bytes** | **str** | Total number of bytes written to shuffle. | [optional] 
**shuffle_output_bytes_spilled** | **str** | Total number of bytes written to shuffle and spilled to disk. | [optional] 
**slot_ms** | **str** | Slot-milliseconds used by the stage. | [optional] 
**start_ms** | **str** | Stage start time represented as milliseconds since the epoch. | [optional] 
**status** | **str** | Current status for this stage. | [optional] 
**steps** | [**List[ExplainQueryStep]**](ExplainQueryStep.md) | List of operations within the stage in dependency order (approximately chronological). | [optional] 
**wait_ms_avg** | **str** | Milliseconds the average shard spent waiting to be scheduled. | [optional] 
**wait_ms_max** | **str** | Milliseconds the slowest shard spent waiting to be scheduled. | [optional] 
**wait_ratio_avg** | **float** | Relative amount of time the average shard spent waiting to be scheduled. | [optional] 
**wait_ratio_max** | **float** | Relative amount of time the slowest shard spent waiting to be scheduled. | [optional] 
**write_ms_avg** | **str** | Milliseconds the average shard spent on writing output. | [optional] 
**write_ms_max** | **str** | Milliseconds the slowest shard spent on writing output. | [optional] 
**write_ratio_avg** | **float** | Relative amount of time the average shard spent on writing output. | [optional] 
**write_ratio_max** | **float** | Relative amount of time the slowest shard spent on writing output. | [optional] 

## Example

```python
from openapi_client.models.explain_query_stage import ExplainQueryStage

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainQueryStage from a JSON string
explain_query_stage_instance = ExplainQueryStage.from_json(json)
# print the JSON string representation of the object
print(ExplainQueryStage.to_json())

# convert the object into a dict
explain_query_stage_dict = explain_query_stage_instance.to_dict()
# create an instance of ExplainQueryStage from a dict
explain_query_stage_from_dict = ExplainQueryStage.from_dict(explain_query_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



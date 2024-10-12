# StageSummary

Information about a particular execution stage of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time. | [optional] 
**metrics** | [**List[MetricUpdate]**](MetricUpdate.md) | Metrics for this stage. | [optional] 
**progress** | [**ProgressTimeseries**](ProgressTimeseries.md) |  | [optional] 
**stage_id** | **str** | ID of this stage | [optional] 
**start_time** | **str** | Start time of this stage. | [optional] 
**state** | **str** | State of this stage. | [optional] 
**straggler_summary** | [**StragglerSummary**](StragglerSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.stage_summary import StageSummary

# TODO update the JSON string below
json = "{}"
# create an instance of StageSummary from a JSON string
stage_summary_instance = StageSummary.from_json(json)
# print the JSON string representation of the object
print(StageSummary.to_json())

# convert the object into a dict
stage_summary_dict = stage_summary_instance.to_dict()
# create an instance of StageSummary from a dict
stage_summary_from_dict = StageSummary.from_dict(stage_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


